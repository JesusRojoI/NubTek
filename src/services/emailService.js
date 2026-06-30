// ============================================
// FETCHBRAND - Servicio de Correos Bilingüe
// ============================================

function getLanguage() {
  return localStorage.getItem('language') || 'es';
}

function t(es, en) {
  return getLanguage() === 'en' ? en : es;
}

const templates = {
  // ✅ Confirmación para el CLIENTE (formulario de contacto)
  contactConfirmation: (data) => ({
    subject: t(
      '✅ Hemos recibido tu mensaje - FetchBrand',
      '✅ We received your message - FetchBrand'
    ),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:550px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;padding:30px 25px;text-align:center;border-radius:16px 16px 0 0;">
          <h1 style="margin:0;">${t('✅ Mensaje Recibido', '✅ Message Received')}</h1>
        </div>
        <div style="padding:30px 25px;">
          <h2>${t('¡Hola', 'Hello')} ${data.name}!</h2>
          <p>${t(
            'Gracias por contactarnos. Hemos recibido tu mensaje correctamente.',
            'Thank you for contacting us. We have received your message.'
          )}</p>
          <p>${t(
            'Te responderemos en las próximas <strong>24 horas</strong>.',
            'We will respond within the next <strong>24 hours</strong>.'
          )}</p>
        </div>
      </div>`
  }),

  // ✅ Confirmación para el CLIENTE (formulario de cotización)
  cotizacionConfirmation: (data) => ({
    subject: t(
      '✅ Hemos recibido tu cotización - FetchBrand',
      '✅ We received your quote request - FetchBrand'
    ),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:550px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#fff;padding:30px 25px;text-align:center;border-radius:16px 16px 0 0;">
          <h1 style="margin:0;">${t('✅ Cotización Recibida', '✅ Quote Received')}</h1>
        </div>
        <div style="padding:30px 25px;">
          <h2>${t('¡Hola', 'Hello')} ${data.name}!</h2>
          <p>${t(
            'Hemos recibido tu solicitud para recibir una cotización adaptada.',
            'We have received your request for a customized quote.'
          )}</p>
          <p>${t(
            'Te responderemos en las próximas <strong>24 horas</strong>.',
            'We will respond within the next <strong>24 hours</strong>.'
          )}</p>
        </div>
      </div>`
  }),

  // 📬 Notificación para el ADMIN (formulario de contacto)
  adminNotification: (data) => ({
    subject: t(
      `📬 Nuevo contacto: ${data.name}`,
      `📬 New contact: ${data.name}`
    ),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:550px;margin:0 auto;background:#fff;border-radius:16px;">
        <div style="background:#0f172a;color:#fff;padding:20px;text-align:center;border-radius:16px 16px 0 0;">
          <h1>${t('📬 Nuevo Mensaje', '📬 New Message')}</h1>
        </div>
        <div style="padding:25px;">
          <p><strong>${t('Nombre:', 'Name:')}</strong> ${data.name}</p>
          <p><strong>${t('Email:', 'Email:')}</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>${t('Teléfono:', 'Phone:')}</strong> ${data.phone}</p>` : ''}
          ${data.subject ? `<p><strong>${t('Asunto:', 'Subject:')}</strong> ${data.subject}</p>` : ''}
          <p><strong>${t('Mensaje:', 'Message:')}</strong></p>
          <p>${data.message}</p>
          <p style="margin-top:15px;color:#94a3b8;font-size:12px;">${t(
            'Idioma del usuario: Español',
            'User language: English'
          )}</p>
        </div>
      </div>`
  }),

  // 📋 Notificación para el ADMIN (formulario de cotización)
  cotizacionNotification: (data) => ({
    subject: t(
      `📋 Nueva cotización: ${data.name}`,
      `📋 New quote: ${data.name}`
    ),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:550px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#7c3aed,#6d28d9);color:#fff;padding:25px;text-align:center;border-radius:16px 16px 0 0;">
          <h1 style="margin:0;">${t('📋 Nueva Cotización', '📋 New Quote')}</h1>
          <p style="margin:5px 0 0;opacity:0.9;">FetchBrand - ${t('Servicio Personalizado', 'Custom Service')}</p>
        </div>
        <div style="padding:25px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">👤 ${t('Nombre:', 'Name:')}</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${data.name}</td></tr>
            ${data.lastName ? `<tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">👤 ${t('Apellidos:', 'Last Name:')}</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${data.lastName}</td></tr>` : ''}
            <tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">📧 ${t('Email:', 'Email:')}</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.quoteId ? `<tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">🆔 ${t('ID Cotización:', 'Quote ID:')}</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">${data.quoteId}</td></tr>` : ''}
            ${data.amount ? `<tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">💰 ${t('Monto:', 'Amount:')}</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#2563eb;">$${parseFloat(data.amount).toFixed(2)} MXN</td></tr>` : ''}
            ${data.amount ? `<tr><td style="padding:10px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#334155;">🧾 ${t('IVA (16%):', 'Tax (16%):')}</td><td style="padding:10px;border-bottom:1px solid #e2e8f0;">$${(parseFloat(data.amount) * 0.16).toFixed(2)} MXN</td></tr>` : ''}
            ${data.amount ? `<tr><td style="padding:10px;font-weight:600;color:#334155;">💵 ${t('Total:', 'Total:')}</td><td style="padding:10px;font-weight:700;font-size:18px;color:#7c3aed;">$${(parseFloat(data.amount) * 1.16).toFixed(2)} MXN</td></tr>` : ''}
          </table>
          ${data.details ? `
          <div style="margin-top:20px;padding:15px;background:#f8fafc;border-radius:10px;border-left:4px solid #7c3aed;">
            <p style="font-weight:600;color:#334155;margin:0 0 8px 0;">📝 ${t('Detalles del servicio:', 'Service Details:')}</p>
            <p style="margin:0;white-space:pre-wrap;">${data.details}</p>
          </div>` : ''}
        </div>
        <div style="text-align:center;padding:15px;color:#94a3b8;font-size:12px;border-top:1px solid #e2e8f0;">
          <p>${t('Formulario de cotización - FetchBrand', 'Quote Form - FetchBrand')}</p>
          <p>${t('Idioma del usuario: Español', 'User language: English')}</p>
        </div>
      </div>`
  }),

  // 🛒 Confirmación de COMPRA para el CLIENTE
  purchaseConfirmation: (data) => ({
    subject: t(
      '🛒 ¡Compra confirmada! - FetchBrand',
      '🛒 Purchase Confirmed! - FetchBrand'
    ),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:550px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#10b981,#059669);color:#fff;padding:30px 25px;text-align:center;border-radius:16px 16px 0 0;">
          <h1 style="margin:0;">${t('🎉 ¡Compra Confirmada!', '🎉 Purchase Confirmed!')}</h1>
          <p style="margin:5px 0 0;opacity:0.9;">${t('Gracias por confiar en FetchBrand', 'Thank you for trusting FetchBrand')}</p>
        </div>
        <div style="padding:25px;">
          <h2>${t('¡Hola', 'Hello')} ${data.name}!</h2>
          <p>${t(
            'Tu pedido ha sido procesado correctamente. Aquí tienes el resumen de tu compra:',
            'Your order has been processed successfully. Here is your purchase summary:'
          )}</p>
          
          <div style="background:#f8fafc;border-radius:10px;padding:15px;margin:15px 0;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:2px solid #e2e8f0;">
                <td style="padding:8px;font-weight:600;color:#334155;">${t('Producto', 'Product')}</td>
                <td style="padding:8px;font-weight:600;color:#334155;text-align:center;">${t('Cant.', 'Qty.')}</td>
                <td style="padding:8px;font-weight:600;color:#334155;text-align:right;">${t('Precio', 'Price')}</td>
                <td style="padding:8px;font-weight:600;color:#334155;text-align:right;">${t('Subtotal', 'Subtotal')}</td>
              </tr>
              ${data.items.map(item => `
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px;">${item.emoji || ''} ${item.name}</td>
                  <td style="padding:8px;text-align:center;">${item.quantity}</td>
                  <td style="padding:8px;text-align:right;">$${item.price.toFixed(2)}</td>
                  <td style="padding:8px;text-align:right;font-weight:600;">$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              `).join('')}
            </table>
          </div>

          <div style="margin-top:15px;padding:15px;background:#f0fdf4;border-radius:10px;border:1px solid #bbf7d0;">
            <table style="width:100%;">
              <tr><td style="padding:4px 0;color:#475569;">${t('Subtotal:', 'Subtotal:')}</td><td style="text-align:right;">$${data.subtotal.toFixed(2)} MXN</td></tr>
              <tr><td style="padding:4px 0;color:#475569;">${t('IVA (16%):', 'Tax (16%):')}</td><td style="text-align:right;">$${data.tax.toFixed(2)} MXN</td></tr>
              <tr style="border-top:2px solid #bbf7d0;"><td style="padding:8px 0;font-weight:700;color:#0f172a;">${t('Total:', 'Total:')}</td><td style="text-align:right;font-weight:700;font-size:18px;color:#059669;">$${data.total.toFixed(2)} MXN</td></tr>
            </table>
          </div>

          <p style="margin-top:20px;color:#64748b;">${t(
            '⏰ Nos pondremos en contacto contigo en las próximas <strong>24 horas</strong> para coordinar los detalles de tu servicio.',
            '⏰ We will contact you within the next <strong>24 hours</strong> to coordinate the details of your service.'
          )}</p>
        </div>
        <div style="text-align:center;padding:15px;color:#94a3b8;font-size:12px;border-top:1px solid #e2e8f0;">
          <p>© ${new Date().getFullYear()} FetchBrand - ${t('Todos los derechos reservados', 'All rights reserved')}</p>
        </div>
      </div>`
  }),

  // 🛒 Notificación de COMPRA para el ADMIN
  purchaseAdminNotification: (data) => ({
    subject: t(
      `💰 Nueva venta: ${data.name} - $${data.total.toFixed(2)} MXN`,
      `💰 New Sale: ${data.name} - $${data.total.toFixed(2)} MXN`
    ),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:550px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#10b981,#059669);color:#fff;padding:25px;text-align:center;border-radius:16px 16px 0 0;">
          <h1 style="margin:0;">${t('💰 Nueva Venta', '💰 New Sale')}</h1>
        </div>
        <div style="padding:25px;">
          <p><strong>👤 ${t('Cliente:', 'Customer:')}</strong> ${data.name}</p>
          <p><strong>📧 ${t('Email:', 'Email:')}</strong> ${data.email}</p>
          
          <div style="background:#f8fafc;border-radius:10px;padding:15px;margin:15px 0;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:2px solid #e2e8f0;">
                <td style="padding:8px;font-weight:600;">${t('Producto', 'Product')}</td>
                <td style="padding:8px;font-weight:600;text-align:center;">${t('Cant.', 'Qty.')}</td>
                <td style="padding:8px;font-weight:600;text-align:right;">${t('Subtotal', 'Subtotal')}</td>
              </tr>
              ${data.items.map(item => `
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px;">${item.emoji || ''} ${item.name}</td>
                  <td style="padding:8px;text-align:center;">${item.quantity}</td>
                  <td style="padding:8px;text-align:right;font-weight:600;">$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              `).join('')}
            </table>
          </div>

          <p><strong>💰 ${t('Total:', 'Total:')}</strong> <span style="font-size:20px;color:#059669;">$${data.total.toFixed(2)} MXN</span></p>
          <p><strong>📅 ${t('Fecha:', 'Date:')}</strong> ${new Date().toLocaleDateString(getLanguage() === 'en' ? 'en-US' : 'es-MX', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
          <p style="margin-top:15px;color:#94a3b8;font-size:12px;">${t('Idioma del cliente: Español', 'Customer language: English')}</p>
        </div>
      </div>`
  })
};

// ============================================
// FUNCIÓN PARA ENVIAR CORREO
// ============================================
export async function sendEmail({ to, template, data }) {
  try {
    const templateData = templates[template](data);

    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        subject: templateData.subject,
        html: templateData.html
      })
    });

    if (!response.ok) {
      const result = await response.json();
      console.error('❌ Error:', result);
      return { success: false, error: result.error };
    }

    const result = await response.json();
    console.log('✅ Correo enviado:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Error:', error);
    return { success: false, error: error.message };
  }
}

// ============================================
// FUNCIONES DE ENVÍO
// ============================================

export async function sendContactEmails(data) {
  const adminEmail = 'jaknet.software.dev@gmail.com';
  await sendEmail({ to: adminEmail, template: 'adminNotification', data });
  await sendEmail({ to: data.email, template: 'contactConfirmation', data });
}

export async function sendCotizacionEmails(data) {
  const adminEmail = 'jaknet.software.dev@gmail.com';
  await sendEmail({ to: adminEmail, template: 'cotizacionNotification', data });
  await sendEmail({ to: data.email, template: 'cotizacionConfirmation', data: { name: data.name } });
}

export async function sendPurchaseEmails(data) {
  const adminEmail = 'jaknet.software.dev@gmail.com';
  await sendEmail({ to: adminEmail, template: 'purchaseAdminNotification', data });
  await sendEmail({ to: data.email, template: 'purchaseConfirmation', data });
}