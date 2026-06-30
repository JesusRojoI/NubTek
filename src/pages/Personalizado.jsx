import { useState } from 'react';
import { Link } from 'react-router-dom';

const Personalizado = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    quoteId: '',
    amount: '',
    details: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email) {
      setStatus({ type: 'error', message: 'Por favor completa los campos requeridos.' });
      setLoading(false);
      return;
    }

    try {
      const { sendCotizacionEmails } = await import('../services/emailService');
      
      await sendCotizacionEmails({
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        quoteId: formData.quoteId,
        amount: formData.amount,
        details: formData.details,
        service: 'Servicio personalizado'
      });

      setStatus({ type: 'success', message: '¡Cotización enviada con éxito! Te contactaremos pronto.' });
      setFormData({ name: '', lastName: '', email: '', quoteId: '', amount: '', details: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Error al enviar. Intenta de nuevo.' });
    } finally {
      setLoading(false);
    }
  };
   

  const iva = formData.amount ? (parseFloat(formData.amount) * 0.16).toFixed(2) : '0.00';
  const total = formData.amount ? (parseFloat(formData.amount) * 1.16).toFixed(2) : '0.00';

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '140px 20px 80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.1)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            Servicio exclusivo
          </p>
          
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(37, 99, 235, 0.2)',
            color: '#93c5fd',
            borderRadius: '25px',
            fontWeight: '600',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            marginBottom: '20px'
          }}>
            COTIZACIÓN
          </span>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '15px'
          }}>
            ¿Buscas una solución a tu medida?
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Cuéntanos qué necesitas y diseñaremos un plan personalizado para tu proyecto.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section style={{
        padding: '60px 20px 80px',
        background: '#f8fafc',
        marginTop: '-30px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '20px',
          padding: '45px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#0f172a',
            marginBottom: '10px'
          }}>
            ✨ Servicio personalizado
          </h2>
          <p style={{
            color: '#64748b',
            marginBottom: '30px'
          }}>
            Completa el formulario y recibe una cotización adaptada a tus necesidades.
          </p>

          {status.message && (
            <div style={{
              padding: '15px 20px',
              borderRadius: '12px',
              marginBottom: '25px',
              fontWeight: '500',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: status.type === 'success' ? '#d1fae5' : '#fee2e2',
              color: status.type === 'success' ? '#065f46' : '#991b1b',
              border: `1px solid ${status.type === 'success' ? '#6ee7b7' : '#fca5a5'}`
            }}>
              <span>{status.type === 'success' ? '✅' : '⚠️'}</span>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#334155',
                  fontSize: '0.9rem'
                }}>
                  Nombre <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                    background: '#f8fafc',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#334155',
                  fontSize: '0.9rem'
                }}>
                  Apellidos
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Tus apellidos"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                    background: '#f8fafc',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#334155',
                fontSize: '0.9rem'
              }}>
                Correo electrónico <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.3s',
                  background: '#f8fafc',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#f8fafc';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#334155',
                  fontSize: '0.9rem'
                }}>
                  ID de Cotización
                </label>
                <input
                  type="text"
                  name="quoteId"
                  value={formData.quoteId}
                  onChange={handleChange}
                  placeholder="Opcional"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                    background: '#f8fafc',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.background = 'white';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#334155',
                  fontSize: '0.9rem'
                }}>
                  Monto a Pagar (MXN)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                    background: '#f8fafc',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.background = 'white';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.background = '#f8fafc';
                  }}
                />
              </div>
            </div>

            {formData.amount > 0 && (
              <div style={{
                padding: '15px 20px',
                background: '#f0f9ff',
                borderRadius: '12px',
                marginBottom: '20px',
                border: '1px solid #bae6fd'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#475569' }}>
                  <span>Subtotal</span>
                  <span>${parseFloat(formData.amount).toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#475569' }}>
                  <span>IVA (16%)</span>
                  <span>${iva}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '10px',
                  borderTop: '2px solid #bae6fd',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  color: '#0f172a'
                }}>
                  <span>Total</span>
                  <span style={{ color: '#2563eb' }}>${total}</span>
                </div>
              </div>
            )}

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#334155',
                fontSize: '0.9rem'
              }}>
                Detalles del servicio
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="4"
                placeholder="Describe brevemente qué necesitas..."
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s',
                  background: '#f8fafc',
                  boxSizing: 'border-box',
                  minHeight: '120px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.background = 'white';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.background = '#f8fafc';
                }}
              ></textarea>
            </div>

            <p style={{
              fontSize: '0.8rem',
              color: '#ef4444',
              marginBottom: '20px',
              padding: '12px',
              background: '#fef2f2',
              borderRadius: '10px',
              fontWeight: '500'
            }}>
              ⚠️ IMPORTANTE: El importe final incluirá el 16% de IVA.
            </p>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                background: loading ? '#94a3b8' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1.05rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: 'white',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                    display: 'inline-block'
                  }}></span>
                  Enviando solicitud...
                </>
              ) : (
                <>
                  💳 Pagar
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Personalizado;