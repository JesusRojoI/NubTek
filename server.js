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
// Obtener token de Etomin automáticamente
// ============================================
async function getEtominToken() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      email: process.env.ETOMIN_USER,
      password: process.env.ETOMIN_PASSWORD
    });

    const options = {
      hostname: 'pagos.etomin.com',
      path: '/api/v1/signin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          if (result.authToken) {
            console.log('✅ Token Etomin obtenido');
            resolve(result.authToken);
          } else {
            reject(new Error('No se recibió token de Etomin'));
          }
        } catch {
          reject(new Error('Respuesta inválida de Etomin: ' + responseData));
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

// ============================================
// Petición a Etomin
// ============================================
async function etominRequest(path, body) {
  const token = await getEtominToken();

  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      hostname: 'pagos.etomin.com',
      path: '/api/v1' + path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(responseData));
        } catch {
          resolve({ error: true, raw: responseData });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

// ============================================
// RUTAS API
// ============================================

// Enviar correo
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body;
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'NubTek <onboarding@resend.dev>',
      to: Array.isArray(to) ? to : [to],
      subject,
      html
    });
    if (error) return res.status(400).json({ error: error.message });
    console.log('✅ Correo enviado:', data?.id);
    res.json({ success: true, data });
  } catch (err) {
    console.error('❌ Error correo:', err);
    res.status(500).json({ error: err.message });
  }
});

// Procesar pago
app.post('/api/process-payment', async (req, res) => {
  try {
    const { amount, cardNumber, cardName, cardExpiry, cardCvc, email, name, lastName, phone, address, city, zip } = req.body;
    const [expMonth, expYear] = cardExpiry.split('/');
    const reference = 'FB-' + Date.now();

    console.log('💳 Procesando pago por $' + amount + ' MXN...');

    const result = await etominRequest('/sale', {
      amount: Math.round(amount),
      currency: '484',
      reference: reference,
      customerInformation: {
        firstName: name || 'Cliente',
        lastName: lastName || 'NubTek',
        email: email || 'cliente@test.com',
        phone1: phone || '5544332211',
        city: city || 'Ciudad de Mexico',
        address1: address || 'Direccion',
        postalCode: zip || '12345',
        state: city || 'CDMX',
        country: 'MX',
        ip: '192.168.1.1'
      },
      cardData: {
        cardNumber: cardNumber.replace(/\s/g, ''),
        cvv: cardCvc,
        cardholderName: cardName,
        expirationYear: expYear,
        expirationMonth: expMonth
      },
      redirectUrl: 'http://localhost:5173/compra-exitosa'
    });

    console.log('📋 Resultado:', JSON.stringify(result));

    if (result.status !== 'APPROVED') {
      return res.status(400).json({ error: result.responseMessage || 'Pago rechazado' });
    }

    console.log('✅ Pago aprobado - Orden:', result.orderId);
    res.json({ success: true, orderId: result.orderId, reference: result.reference });
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