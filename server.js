import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { config } from 'dotenv';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================
// BLOQUE DE INTEGRACIÓN CON OCTANO
// ============================================

/**
 * Petición HTTPS genérica a la API de Octano
 */
async function octanoRequest(path, body, token = null) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);

    const options = {
      hostname: 'pagos.octanopayments.com',
      path: '/api/v1' + path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        ...(token && { 'Authorization': `Bearer ${token}` }),
      },
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(responseData));
        } catch {
          reject(new Error(`Error en la solicitud a Octano: ${responseData}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(data);
    req.end();
  });
}

// Token en caché para no autenticar en cada petición
let octanoAuthToken = null;
let octanoTokenExpiry = 0;

/**
 * Obtiene (o reutiliza) el token de autenticación de Octano
 */
async function getOctanoToken() {
  if (octanoAuthToken && Date.now() < octanoTokenExpiry) {
    return octanoAuthToken;
  }

  console.log('🔐 Autenticando con Octano...');
  const authRes = await octanoRequest('/signin', {
    email: process.env.OCTANO_EMAIL,
    password: process.env.OCTANO_PASSWORD,
  });

  const authToken = authRes?.authToken;
  if (!authToken) {
    throw new Error('No se pudo obtener el token de Octano.');
  }

  octanoAuthToken = authToken;
  // El token suele durar 24 horas, lo cacheamos por 23 para curarnos en salud
  octanoTokenExpiry = Date.now() + 23 * 60 * 60 * 1000;
  console.log('✅ Token Octano obtenido');
  return authToken;
}

/**
 * Procesa un pago completo con Octano:
 * 1. Obtiene token de autenticación.
 * 2. Tokeniza la tarjeta.
 * 3. Crea la venta.
 */
async function processOctanoPayment(paymentData) {
  try {
    // 1. Obtener token de autenticación
    const token = await getOctanoToken();

    // 2. Tokenizar tarjeta
    console.log('🪪 Tokenizando tarjeta...');
    const tokenizeRes = await octanoRequest('/card/tokenizer', {
      cardData: {
        cardNumber: paymentData.cardNumber.replace(/\s/g, ''),
        cardholderName: paymentData.cardName,
        expirationYear: paymentData.expYear,
        expirationMonth: paymentData.expMonth,
      },
    }, token);
    const cardToken = tokenizeRes?.cardNumberToken;

    if (!cardToken) {
      throw new Error('No se pudo tokenizar la tarjeta.');
    }
    console.log('✅ Tarjeta tokenizada');

    // 3. Crear la venta
    console.log('💰 Procesando venta...');
    const saleRes = await octanoRequest('/sale', {
      amount: paymentData.amount,
      currency: '484', // MXN
      reference: paymentData.reference,
      customerInformation: {
        firstName: paymentData.name || 'Cliente',
        lastName: paymentData.lastName || 'NubTek',
        email: paymentData.email || 'cliente@test.com',
        phone1: paymentData.phone || '5544332211',
        address1: paymentData.address || 'Sin dirección',
        city: paymentData.city || 'Ciudad de México',
        state: paymentData.city || 'Ciudad de México',
        postalCode: paymentData.zip || '12345',
        country: 'MX',
        ip: '127.0.0.1',
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: paymentData.cardCvc,
      },
    }, token);

    if (saleRes.status === 'APPROVED') {
      console.log('✅ Pago Octano aprobado:', saleRes.orderId);
      return { success: true, data: saleRes };
    } else {
      throw new Error(saleRes.responseMessage || 'Transacción rechazada por Octano.');
    }
  } catch (error) {
    console.error('❌ Error en pasarela Octano:', error.message);
    // Devolvemos el error de forma estructurada
    return { success: false, error: error.message || 'Error al procesar el pago.' };
  }
}
// ============================================
// FIN DEL BLOQUE DE OCTANO
// ============================================

// ============================================
// RUTAS API
// ============================================

// Enviar correo
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body;
    const recipients = Array.isArray(to) ? to : [to];
    
    console.log('📧 ========================================');
    console.log('📧 NUEVO ENVÍO DE CORREO');
    console.log('📧 Para:', recipients.join(', '));
    console.log('📧 Asunto:', subject);
    console.log('📧 Remitente:', process.env.EMAIL_FROM || 'NubTek <onboarding@resend.dev>');
    console.log('📧 ========================================');

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'NubTek <onboarding@resend.dev>',
      to: recipients,
      subject,
      html
    });

    if (error) {
      console.error('❌ ERROR AL ENVIAR:', error.message);
      console.error('❌ Destinatario:', recipients.join(', '));
      return res.status(400).json({ error: error.message });
    }

    console.log('✅ CORREO ENVIADO EXITOSAMENTE');
    console.log('✅ ID:', data?.id);
    console.log('✅ Para:', recipients.join(', '));
    console.log('📧 ========================================\n');

    res.json({ 
      success: true, 
      data,
      receipt: {
        id: data?.id,
        to: recipients,
        subject,
        timestamp: new Date().toISOString()
      }
    });
  } catch (err) {
    console.error('❌ Error correo:', err);
    res.status(500).json({ error: err.message });
  }
});

// Procesar pago con OCTANO
app.post('/api/process-payment', async (req, res) => {
  try {
    const { amount, cardNumber, cardName, cardExpiry, cardCvc, email, name, lastName, phone, address, city, zip } = req.body;
    const [expMonth, expYear] = cardExpiry.split('/');

    const result = await processOctanoPayment({
      amount: Math.round(amount),
      cardNumber,
      cardName,
      expMonth,
      expYear,
      cardCvc,
      email,
      name,
      lastName,
      phone,
      address,
      city,
      zip,
      reference: `NUBTEK-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    });

    if (result.success) {
      console.log('✅ Pago aprobado - Orden:', result.data.orderId);
      res.json({ success: true, ...result.data });
    } else {
      res.status(400).json({ success: false, error: result.error });
    }
  } catch (err) {
    console.error('❌ Error pago:', err);
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// SERVIR ARCHIVOS ESTÁTICOS (PRODUCCIÓN)
// ============================================
const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

// Cualquier ruta que no sea API, servir index.html
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Ruta API no encontrada' });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

// ============================================
// INICIAR SERVIDOR
// ============================================
app.listen(PORT, () => {
  console.log('🚀 Servidor: http://localhost:' + PORT);
  console.log('📧 Correos: http://localhost:' + PORT + '/api/send-email');
  console.log('💳 Pagos: http://localhost:' + PORT + '/api/process-payment');
});