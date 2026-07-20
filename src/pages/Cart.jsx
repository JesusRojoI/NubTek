import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingCart } from 'react-icons/fi';

const Cart = () => {
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  const handleManualQuantity = (productId, currentQty) => {
    setEditingId(productId);
    setEditValue(currentQty.toString());
  };

  const handleQuantitySubmit = (productId) => {
    const qty = parseInt(editValue);
    if (qty && qty > 0) updateQuantity(productId, qty);
    setEditingId(null);
    setEditValue('');
  };

  const handleKeyDown = (e, productId) => {
    if (e.key === 'Enter') handleQuantitySubmit(productId);
    if (e.key === 'Escape') { setEditingId(null); setEditValue(''); }
  };

  if (cart.length === 0) {
    return (
      <div>
        <section style={{
          padding: '120px 20px 60px', textAlign: 'center',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
        }}>
          <h1 style={{ fontSize: '2.5rem', color: '#0f172a' }}>{t('cart.title')}</h1>
          <p style={{ color: '#64748b' }}>
            <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>{t('nav.home')}</Link> / {t('cart.title')}
          </p>
        </section>

        <section style={{ padding: '80px 20px', minHeight: '50vh', textAlign: 'center' }}>
          <p style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</p>
          <h2 style={{ color: '#334155', marginBottom: '15px', fontSize: '1.8rem' }}>{t('cart.empty')}</h2>
          <p style={{ color: '#64748b', marginBottom: '30px', fontSize: '1.1rem' }}>{t('cart.empty_desc')}</p>
          <Link to="/planes" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 22px', background: '#2563eb', color: 'white',
            textDecoration: 'none', borderRadius: '10px', fontWeight: '600',
            fontSize: '0.95rem', transition: 'all 0.3s'
          }}>
            <FiArrowLeft /> {t('cart.view_plans')}
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section style={{
        padding: '120px 20px 40px', textAlign: 'center',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a' }}>{t('cart.title')}</h1>
        <p style={{ color: '#64748b' }}>
          <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>{t('nav.home')}</Link> / {t('cart.title')}
        </p>
      </section>

      <section style={{ padding: '40px 20px 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            background: 'white', borderRadius: '16px',
            boxShadow: '0 2px 20px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '30px'
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '50px 2fr 1fr 1.5fr 1fr 50px',
              padding: '20px', background: '#f8fafc', fontWeight: '600',
              color: '#475569', fontSize: '0.9rem', alignItems: 'center',
              borderBottom: '2px solid #e2e8f0'
            }}>
              <span></span>
              <span>{t('cart.product')}</span>
              <span>{t('cart.price')}</span>
              <span>{t('cart.quantity')}</span>
              <span>{t('cart.subtotal')}</span>
              <span></span>
            </div>

            {cart.map(item => (
              <div key={item.id} style={{
                display: 'grid', gridTemplateColumns: '50px 2fr 1fr 1.5fr 1fr 50px',
                padding: '20px', alignItems: 'center', borderBottom: '1px solid #f1f5f9'
              }}>
                <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
                <div>
                  {/* ¡¡¡ CORRECCIÓN DE TRADUCCIÓN APLICADA AQUÍ !!! */}
                  <h4 style={{ margin: '0 0 5px 0', color: '#0f172a', fontSize: '1rem' }}>
                    {t(`products.${item.id}.name`, item.name)}
                  </h4>
                  {item.type === 'plan' && (
                    <span style={{
                      display: 'inline-block', padding: '3px 10px',
                      background: '#dbeafe', color: '#2563eb',
                      borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600'
                    }}>{t('cart.plan_tag')}</span>
                  )}
                </div>
                <span style={{ fontWeight: '600', color: '#0f172a' }}>${item.price.toFixed(2)}</span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{
                    width: '32px', height: '32px', border: '1px solid #e2e8f0',
                    background: 'white', borderRadius: '8px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.target.style.background = '#fee2e2'; e.target.style.borderColor = '#ef4444'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'white'; e.target.style.borderColor = '#e2e8f0'; }}>
                    <FiMinus size={16} />
                  </button>
                  
                  {editingId === item.id ? (
                    <input type="number" value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => handleQuantitySubmit(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, item.id)}
                      autoFocus min="1"
                      style={{ width: '45px', height: '32px', textAlign: 'center',
                        border: '2px solid #2563eb', borderRadius: '8px',
                        fontSize: '0.95rem', fontWeight: '600', outline: 'none' }} />
                  ) : (
                    <span onClick={() => handleManualQuantity(item.id, item.quantity)} style={{
                      width: '45px', height: '32px', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', background: '#f8fafc', borderRadius: '8px',
                      fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', border: '1px solid #e2e8f0'
                    }} title="Clic para editar">{item.quantity}</span>
                  )}
                  
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{
                    width: '32px', height: '32px', border: '1px solid #e2e8f0',
                    background: 'white', borderRadius: '8px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#475569', transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.target.style.background = '#d1fae5'; e.target.style.borderColor = '#10b981'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'white'; e.target.style.borderColor = '#e2e8f0'; }}>
                    <FiPlus size={16} />
                  </button>
                </div>

                <span style={{ fontWeight: '700', color: '#2563eb', fontSize: '1.05rem' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button onClick={() => removeFromCart(item.id)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#94a3b8', padding: '5px', borderRadius: '8px',
                  transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                onMouseEnter={(e) => { e.target.style.color = '#ef4444'; e.target.style.background = '#fee2e2'; }}
                onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.background = 'none'; }}>
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <Link to="/planes" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 20px', background: '#2563eb', color: 'white',
                textDecoration: 'none', borderRadius: '10px', fontWeight: '600',
                fontSize: '0.9rem', height: 'fit-content'
              }}><FiArrowLeft /> {t('cart.continue')}</Link>
              
              <button onClick={clearCart} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '10px 20px', background: 'white', color: '#ef4444',
                border: '1.5px solid #fecaca', borderRadius: '10px',
                fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', height: 'fit-content'
              }}
              onMouseEnter={(e) => { e.target.style.background = '#fef2f2'; e.target.style.borderColor = '#ef4444'; }}
              onMouseLeave={(e) => { e.target.style.background = 'white'; e.target.style.borderColor = '#fecaca'; }}>
                <FiTrash2 size={16} /> {t('cart.clear')}
              </button>
            </div>

            <div style={{
              background: 'white', padding: '25px 30px', borderRadius: '16px',
              boxShadow: '0 2px 20px rgba(0,0,0,0.08)', minWidth: '300px'
            }}>
              <h3 style={{ margin: '0 0 20px 0', color: '#0f172a', fontSize: '1.3rem',
                borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>{t('cart.summary')}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#475569' }}>
                <span>{t('cart.subtotal')}</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#475569' }}>
                <span>{t('cart.tax')}</span><span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px',
                paddingTop: '15px', borderTop: '2px solid #e2e8f0', fontWeight: '700',
                fontSize: '1.2rem', color: '#0f172a' }}>
                <span>{t('cart.total')}</span><span style={{ color: '#2563eb' }}>${total.toFixed(2)}</span>
              </div>
              <Link to="/finalizar-compra" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                width: '100%', padding: '14px', marginTop: '25px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white', textAlign: 'center', textDecoration: 'none',
                borderRadius: '10px', fontWeight: '600', fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)', boxSizing: 'border-box'
              }}>
                <FiShoppingCart /> {t('cart.checkout')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;