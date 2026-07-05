import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { productsData, iconMap } from '../data/products';
import { FiPlus, FiMinus, FiShoppingCart, FiCheck, FiArrowLeft, FiTag } from 'react-icons/fi';

const categoryImages = {
  'administracion-tareas-basicas': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
  'atencion-al-cliente-comunicaciones': 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&h=400&fit=crop',
  'gestion-de-proyectos-coordinacion': 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop',
  'soporte-para-contenido-y-marketing-digital': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  'tareas-administrativas-avanzadas-costo-por-hora': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
};

const productImages = {
  'adm-1': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=400&fit=crop',
  'adm-2': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  'adm-3': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
  'adm-4': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  'atc-1': 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&h=400&fit=crop',
  'atc-2': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&h=400&fit=crop',
  'atc-3': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
  'gpc-1': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  'gpc-2': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
  'scm-1': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
  'scm-2': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
  'scm-3': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  'scm-4': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
  'scm-5': 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&h=400&fit=crop',
  'scm-6': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
  'taa-1': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
  'taa-2': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
  'taa-3': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  'taa-4': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  'taa-5': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  'taa-6': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
};

const ProductDetail = () => {
  const { category, productId } = useParams();
  const { t } = useTranslation();
  const { cart, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const categoryData = productsData[category];
  const product = categoryData?.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>{t('cart.empty')}</h2>
        <Link to="/planes" style={{ color: '#2563eb' }}>{t('cart.view_plans')}</Link>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id + (i > 0 ? '-' + i : ''),
        name: t(`products.${product.id}.name`, product.defaultName),
        price: product.price,
        emoji: iconMap[product.icon] || '📦',
        type: 'servicio'
      });
    }
  };

  const imageUrl = productImages[product.id] || categoryImages[category];

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '140px 20px 60px', textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white'
      }}>
        <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
          <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
          <span style={{ margin: '0 10px' }}>/</span>
          <Link to="/planes" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.plans')}</Link>
          <span style={{ margin: '0 10px' }}>/</span>
          <Link to={`/productos/${category}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
            {t(`categories.${category}`, categoryData.title)}
          </Link>
        </p>
      </section>

      {/* Product Detail */}
      <section style={{ padding: '40px 20px 80px', background: '#f8fafc', marginTop: '-30px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link to={`/productos/${category}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: '#2563eb', textDecoration: 'none', fontWeight: '500',
            marginBottom: '30px', fontSize: '0.95rem'
          }}>
            <FiArrowLeft /> {t('cart.continue')}
          </Link>

          <div style={{
            background: 'white', borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
            display: 'flex', flexWrap: 'wrap'
          }}>
            {/* Imagen a la izquierda */}
            <div style={{
              width: '350px', minHeight: '350px',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              flexShrink: 0
            }}></div>

            {/* Contenido a la derecha */}
            <div style={{ flex: 1, padding: '40px', minWidth: '300px' }}>
              <h1 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '10px' }}>
                {t(`products.${product.id}.name`, product.defaultName)}
              </h1>
              <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '20px', lineHeight: '1.8' }}>
                {t(`products.${product.id}.desc`, product.defaultDesc || '')}
              </p>

              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb', marginBottom: '5px' }}>
                ${product.price.toFixed(2)} MXN
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>
                +{t('cart.tax').replace(' (16%)', '')}
              </p>
              {product.id.startsWith('taa-') && (
  <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '25px' }}>
    {t('product_detail.hourly_service')} {t('cart.tax')}.
  </p>
)}
              {/* Cantidad */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <span style={{ fontWeight: '600', color: '#334155' }}>{t('cart.quantity')}:</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{
                    width: '40px', height: '40px', border: '2px solid #e2e8f0',
                    background: 'white', borderRadius: '10px 0 0 10px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', color: '#475569'
                  }}><FiMinus /></button>
                  <span style={{
                    width: '60px', height: '40px', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', borderTop: '2px solid #e2e8f0',
                    borderBottom: '2px solid #e2e8f0', fontWeight: '600', fontSize: '1rem'
                  }}>{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} style={{
                    width: '40px', height: '40px', border: '2px solid #e2e8f0',
                    background: 'white', borderRadius: '0 10px 10px 0', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', color: '#475569'
                  }}><FiPlus /></button>
                </div>
              </div>

              {/* Botón */}
              {isInCart ? (
                <Link to="/carrito" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 30px', background: '#10b981', color: 'white',
                  textDecoration: 'none', borderRadius: '12px', fontWeight: '600',
                  fontSize: '1rem', width: '100%', justifyContent: 'center', boxSizing: 'border-box'
                }}>
                  <FiCheck /> {t('cart.checkout')}
                </Link>
              ) : (
                <button onClick={handleAddToCart} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 30px', background: '#2563eb', color: 'white',
                  border: 'none', borderRadius: '12px', fontWeight: '600',
                  fontSize: '1rem', cursor: 'pointer', width: '100%',
                  justifyContent: 'center', fontFamily: 'inherit'
                }}>
                  <FiShoppingCart /> {t('cart.add_to_cart')}
                </button>
              )}

              {/* SKU y Categoría */}
              <div style={{ marginTop: '25px', paddingTop: '25px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '5px' }}>
                  <FiTag style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                  SKU: NUBTEK-{product.id.toUpperCase()}
                </p>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  {t('categories_label')}: {t(`categories.${category}`, categoryData.title)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;