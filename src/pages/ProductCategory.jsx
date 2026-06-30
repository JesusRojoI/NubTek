import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { productsData, iconMap } from '../data/products';
import { 
  FiShoppingCart, FiCheck, FiArrowLeft, FiFolder, FiMail, FiCalendar, 
  FiDatabase, FiMessageCircle, FiPhoneCall, FiMessageSquare, FiVideo,
  FiTrello, FiInstagram, FiEdit, FiImage, FiMap, FiFileText
} from 'react-icons/fi';

const reactIcons = {
  FiFolder, FiMail, FiCalendar, FiDatabase,
  FiMessageCircle, FiPhoneCall, FiMessageSquare,
  FiVideo, FiTrello, FiInstagram, FiEdit,
  FiImage, FiMap, FiFileText
};

const ProductCategory = () => {
  const { category } = useParams();
  const { cart, addToCart } = useCart();
  const { t } = useTranslation();

  const categoryData = productsData[category];

  if (!categoryData) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>{t('cart.empty')}</h2>
        <Link to="/planes" style={{ color: '#2563eb' }}>{t('cart.view_plans')}</Link>
      </div>
    );
  }

  const isInCart = (productId) => cart.some(item => item.id === productId);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: t(`products.${product.id}.name`, product.defaultName),
      price: product.price,
      emoji: iconMap[product.icon] || '📦',
      type: 'servicio'
    });
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
            {categoryData.products.map(product => {
              const IconComponent = reactIcons[product.icon] || FiFolder;
              const inCart = isInCart(product.id);

              return (
                <div key={product.id} style={{
                  background: 'white', borderRadius: '16px', padding: '30px',
                  boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                  border: '1px solid #f1f5f9', transition: 'all 0.3s',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 15px rgba(0,0,0,0.06)'; }}>
                  <div style={{
                    width: '65px', height: '65px', borderRadius: '16px',
                    background: '#f0f9ff', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#2563eb', marginBottom: '20px'
                  }}>
                    <IconComponent size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px', fontWeight: '600', minHeight: '50px' }}>
                    {t(`products.${product.id}.name`, product.defaultName)}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', flexGrow: 1 }}>
                    {t(`products.${product.id}.desc`, product.defaultDesc || '')}
                  </p>
                  <p style={{ fontSize: '1.6rem', fontWeight: '700', color: '#2563eb', marginBottom: '5px' }}>
                    ${product.price.toFixed(2)} MXN
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '20px' }}>+IVA</p>
                  {inCart ? (
                    <Link to="/carrito" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 20px', background: '#10b981', color: 'white',
                      textDecoration: 'none', borderRadius: '10px', fontWeight: '600',
                      fontSize: '0.9rem', width: '100%', justifyContent: 'center', boxSizing: 'border-box'
                    }}>
                      <FiCheck /> {t('cart.checkout')}
                    </Link>
                  ) : (
                    <button onClick={() => handleAddToCart(product)} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 20px', background: '#2563eb', color: 'white',
                      border: 'none', borderRadius: '10px', fontWeight: '600',
                      fontSize: '0.9rem', cursor: 'pointer', width: '100%',
                      justifyContent: 'center', fontFamily: 'inherit'
                    }}>
                      <FiShoppingCart /> {t('cart.checkout')}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;