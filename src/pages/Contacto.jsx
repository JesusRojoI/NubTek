import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: t('contact.error_required') });
      setLoading(false);
      return;
    }

    try {
      const { sendContactEmails } = await import('../services/emailService');
      await sendContactEmails({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });

      setStatus({ type: 'success', message: t('contact.success') });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: t('contact.error_generic') });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: '📍', title: t('contact.address'), content: t('contact.address_text') },
    { icon: '📧', title: t('contact.email_label'), content: 'soluciones@nubtek.com.mx' },
    { icon: '📞', title: t('contact.phone_label'), content: '+52 1 55 5920 2774' },
    { icon: '🕐', title: t('contact.hours'), content: t('contact.hours_text') }
  ];

  return (
    <div>
      <section style={{
        padding: '140px 20px 80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('contact.title')}
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #ffffff, #93c5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t('contact.title')}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '20px auto' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 20px 80px', background: '#f8fafc', marginTop: '-30px' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '40px',
          alignItems: 'start'
        }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '10px' }}>{t('contact.talk')}</h2>
            <p style={{ color: '#64748b', marginBottom: '30px', lineHeight: '1.8' }}>{t('contact.talk_desc')}</p>
            {contactInfo.map((info, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                <span style={{ fontSize: '1.5rem' }}>{info.icon}</span>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#0f172a' }}>{info.title}</h4>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '10px' }}>{t('contact.form_title')}</h2>
            <p style={{ color: '#64748b', marginBottom: '25px', fontSize: '0.95rem' }}>{t('contact.form_desc')}</p>

            {status.message && (
              <div style={{
                padding: '15px',
                borderRadius: '12px',
                marginBottom: '20px',
                background: status.type === 'success' ? '#d1fae5' : '#fee2e2',
                color: status.type === 'success' ? '#065f46' : '#991b1b',
                fontWeight: '500'
              }}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('contact.name')} *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('contact.email')} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('contact.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('contact.subject')}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                    style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('contact.message')} *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                  style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', resize: 'vertical', boxSizing: 'border-box', minHeight: '130px' }} />
              </div>

              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '14px',
                background: loading ? '#94a3b8' : '#2563eb',
                color: 'white', border: 'none', borderRadius: '12px',
                fontWeight: '600', fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}>
                {loading ? t('contact.sending') : t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;