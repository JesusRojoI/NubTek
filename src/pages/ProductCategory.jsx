import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { productsData, iconMap } from '../data/products';
import { 
  FiShoppingCart, FiCheck, FiArrowLeft, FiFolder, FiMail, FiCalendar, 
  FiDatabase, FiMessageCircle, FiPhoneCall, FiMessageSquare, FiVideo,
  FiTrello, FiInstagram, FiEdit, FiImage, FiMap, FiFileText
} from 'react-icons/fi';

//const [notification, setNotification] = useState(null);

const reactIcons = {
  FiFolder, FiMail, FiCalendar, FiDatabase,
  FiMessageCircle, FiPhoneCall, FiMessageSquare,
  FiVideo, FiTrello, FiInstagram, FiEdit,
  FiImage, FiMap, FiFileText
};

const categoryImages = {
  'administracion-tareas-basicas': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
  'atencion-al-cliente-comunicaciones': 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=250&fit=crop',
  'gestion-de-proyectos-coordinacion': 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=250&fit=crop',
  'soporte-para-contenido-y-marketing-digital': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  'tareas-administrativas-avanzadas-costo-por-hora': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
};

const productImages = {
  'adm-1': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=250&fit=crop',
  'adm-2': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
  'adm-3': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop',
  'adm-4': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
  'atc-1': 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&h=250&fit=crop',
  'atc-2': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400&h=250&fit=crop',
  'atc-3': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
  'gpc-1': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
  'gpc-2': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
  'scm-1': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop',
  'scm-2': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop',
  'scm-3': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
  'scm-4': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop',
  'scm-5': 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&h=250&fit=crop',
  'scm-6': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
  'taa-1': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
  'taa-2': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
  'taa-3': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
  'taa-4': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
  'taa-5': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
  'taa-6': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
};

const ProductCategory = () => {
  const { category } = useParams();
  const { cart, addToCart } = useCart();
  const { t } = useTranslation();

  const categoryData = productsData[category];
  const categoryImage = categoryImages[category] || '';
  const [notification, setNotification] = useState(null);

  if (!categoryData) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>{t('cart.empty')}</h2>
        <Link to="/planes" style={{ color: '#2563eb' }}>{t('cart.view_plans')}</Link>
      </div>
    );
  }

  const isInCart = (productId) => cart.some(item => item.id === productId);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: t(`products.${product.id}.name`, product.defaultName),
      price: product.price,
      emoji: iconMap[product.icon] || '📦',
      type: 'servicio'
    });
    
    // Mostrar notificación
    setNotification(t('cart.added'));
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div>
      <section style={{
        padding: '140px 20px 80px', textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <Link to="/planes" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.plans')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t(`categories.${category}`, categoryData.title)}
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '15px' }}>
            {t(`categories.${category}`, categoryData.title)}
          </h1>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#f8fafc', marginTop: '-30px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link to="/planes" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: '#2563eb', textDecoration: 'none', fontWeight: '500',
            marginBottom: '30px', fontSize: '0.95rem'
          }}>
            <FiArrowLeft /> {t('cart.view_plans')}
          </Link>
          {notification && (
  <div style={{
    position: 'fixed', bottom: '30px', right: '30px',
    background: '#10b981', color: 'white', padding: '15px 25px',
    borderRadius: '12px', fontWeight: '600', zIndex: 9999,
    boxShadow: '0 4px 20px rgba(16,185,129,0.3)'
  }}>
    ✅ {notification}
  </div>
)}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
            {categoryData.products.map(product => {
              const IconComponent = reactIcons[product.icon] || FiFolder;
              const inCart = isInCart(product.id);

              return (
                <Link to={`/producto/${category}/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    background: 'white', borderRadius: '16px',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                    border: '1px solid #f1f5f9', transition: 'all 0.3s',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 15px rgba(0,0,0,0.06)'; }}>
                    
                    {/* Imagen de la categoría */}
                    <div style={{
                      width: '100%', height: '160px',
                      backgroundImage: `url(${productImages[product.id] || categoryImage})`,
                      backgroundSize: 'cover', backgroundPosition: 'center'
                    }}></div>

                    {/* Contenido */}
                    <div style={{ padding: '25px', width: '100%', boxSizing: 'border-box' }}>
                      <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px', fontWeight: '600', minHeight: '50px' }}>
                        {t(`products.${product.id}.name`, product.defaultName)}
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', flexGrow: 1 }}>
                        {t(`products.${product.id}.desc`, product.defaultDesc || '')}
                      </p>
                      <p style={{ fontSize: '1.6rem', fontWeight: '700', color: '#2563eb', marginBottom: '5px' }}>
                        ${product.price.toFixed(2)} MXN
                      </p>
                      <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '20px' }}>
                        {t('cart.tax').includes('VAT') ? '+VAT' : '+IVA'}
                      </p>
                      <button onClick={(e) => handleAddToCart(e, product)} style={{
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  padding: '10px 20px', background: inCart ? '#10b981' : '#2563eb', color: 'white',
  border: 'none', borderRadius: '10px', fontWeight: '600',
  fontSize: '0.9rem', cursor: 'pointer', width: '100%',
  justifyContent: 'center', fontFamily: 'inherit'
}}>
  {inCart ? <FiCheck /> : <FiShoppingCart />} {t('cart.add_to_cart')}
</button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;