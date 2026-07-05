import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiCreditCard, FiUser, FiMail, FiPhone, FiMapPin, FiLock } from 'react-icons/fi';

const Checkout = () => {
  const { t } = useTranslation();
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', address2: '', city: '',
    state: 'Ciudad de México', zip: '', phone: '', email: '',
    cardName: '', cardNumber: '', cardExpiry: '', cardCvc: '', notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.firstName || !formData.email || !formData.address) {
      setError(t('checkout.error_fields')); setLoading(false); return;
    }
    if (!formData.cardNumber || !formData.cardName || !formData.cardExpiry || !formData.cardCvc) {
      setError(t('checkout.error_card')); setLoading(false); return;
    }

    try {  //QUITAR LOCALHOST PARA PRODUCCION...
      const paymentRes = await fetch('/api/process-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total, cardNumber: formData.cardNumber,
          cardName: formData.cardName, cardExpiry: formData.cardExpiry,
          cardCvc: formData.cardCvc, email: formData.email,
          name: formData.firstName, lastName: formData.lastName,
          phone: formData.phone, address: formData.address,
          city: formData.city, zip: formData.zip
        })
      });

      const paymentData = await paymentRes.json();
      if (!paymentData.success) throw new Error(paymentData.error || 'Pago rechazado');

      const purchaseData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        items: cart.map(item => ({ name: item.name, emoji: item.emoji, price: item.price, quantity: item.quantity })),
        subtotal, tax, total
      };

      const { sendPurchaseEmails } = await import('../services/emailService');
      await sendPurchaseEmails(purchaseData);

      clearCart();
      navigate('/compra-exitosa');
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error al procesar');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div>
        <section style={{ padding: '120px 20px 60px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#0f172a' }}>{t('checkout.title')}</h1>
        </section>
        <section style={{ padding: '80px 20px', textAlign: 'center', minHeight: '50vh' }}>
          <FiShoppingCart size={50} style={{ color: '#94a3b8', marginBottom: '20px' }} />
          <h2>{t('cart.empty')}</h2>
          <Link to="/planes" style={{ display: 'inline-block', padding: '14px 30px', background: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '10px', fontWeight: '600' }}>{t('cart.view_plans')}</Link>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section style={{ padding: '120px 20px 40px', textAlign: 'center', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a' }}>{t('checkout.title')}</h1>
        <p style={{ color: '#64748b' }}>
          <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>{t('nav.home')}</Link> / {t('checkout.title')}
        </p>
      </section>

      <section style={{ padding: '40px 20px 80px', background: '#f8fafc' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: '30px', alignItems: 'start' }}>
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
              <h3 style={{ margin: '0 0 25px 0', color: '#0f172a', fontSize: '1.4rem', paddingBottom: '15px', borderBottom: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiUser /> {t('checkout.billing')}
              </h3>

              {error && (
                <div style={{ padding: '15px', background: '#fee2e2', color: '#991b1b', borderRadius: '10px', marginBottom: '25px', border: '1px solid #fca5a5', fontWeight: '500' }}>⚠️ {error}</div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>{t('checkout.name')} *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>{t('checkout.lastname')} *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}><FiMapPin style={{ marginRight: '5px' }} />{t('checkout.address')} *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required
                  style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t('checkout.city')} *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t('checkout.zip')} *</label>
                  <input type="text" name="zip" value={formData.zip} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}><FiPhone /> {t('checkout.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}><FiMail /> {t('checkout.email')} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <h3 style={{ margin: '30px 0 20px 0', color: '#0f172a', fontSize: '1.4rem', paddingBottom: '15px', borderBottom: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span><FiCreditCard style={{ marginRight: '10px' }} />{t('checkout.payment')}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', padding: '8px 14px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                  <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: '600' }}>{t('checkout.secure_payment')}</span>
                  <img src="/etomin_logo.jpeg" alt="Etomin" style={{ height: '22px', width: 'auto' }} />
                </div>
              </h3>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t('checkout.card_name')} *</label>
                <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required
                  style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t('checkout.card_number')} *</label>
                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required maxLength="16"
                  style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t('checkout.card_expiry')} *</label>
                  <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} required maxLength="5" placeholder="MM/AA"
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '0.9rem' }}>{t('checkout.card_cvc')} *</label>
                  <input type="text" name="cardCvc" value={formData.cardCvc} onChange={handleChange} required maxLength="4"
                    style={{ width: '100%', padding: '12px 15px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', position: 'sticky', top: '100px', border: '2px solid #2563eb' }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#0f172a', fontSize: '1.3rem', paddingBottom: '15px', borderBottom: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FiShoppingCart /> {t('checkout.order')}
              </h3>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                    <div>
                      <p style={{ margin: 0, fontWeight: '500', color: '#0f172a', fontSize: '0.9rem' }}>{item.name}</p>
                      <p style={{ margin: '3px 0 0 0', color: '#94a3b8', fontSize: '0.8rem' }}>{t('cart.quantity')}: {item.quantity}</p>
                    </div>
                  </div>
                  <span style={{ fontWeight: '600', color: '#0f172a' }}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#475569' }}>
                  <span>{t('cart.subtotal')}</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#475569' }}>
                  <span>{t('cart.tax')}</span><span>${tax.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', paddingTop: '15px', borderTop: '2px solid #e2e8f0', fontWeight: '700', fontSize: '1.2rem', color: '#0f172a' }}>
                  <span>{t('cart.total')}</span><span style={{ color: '#2563eb' }}>${total.toFixed(2)}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '20px', lineHeight: '1.6', padding: '15px', background: '#f8fafc', borderRadius: '10px' }}>
                {t('checkout.privacy')}
              </p>
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '16px', marginTop: '20px',
                background: loading ? '#94a3b8' : 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white', border: 'none', borderRadius: '12px',
                fontWeight: '700', fontSize: '1.1rem', cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(16,185,129,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
              }}>
                {loading ? (
                  <><span style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }}></span> {t('checkout.processing')}</>
                ) : (
                  <><FiLock /> {t('checkout.place_order')}</>
                )}
              </button>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;