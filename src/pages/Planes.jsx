import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FiBriefcase, FiHeadphones, FiTarget, FiMonitor, FiDollarSign,
  FiArrowRight, FiCheck, FiStar
} from 'react-icons/fi';

const Planes = () => {
  const { t } = useTranslation();

  const categories = [
    { 
      id: 'administracion-tareas-basicas', 
      icon: FiBriefcase, 
      color: '#2563eb', 
      bg: '#dbeafe', 
      services: 4, 
      key: 'admin',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop'
    },
    { 
      id: 'atencion-al-cliente-comunicaciones', 
      icon: FiHeadphones, 
      color: '#059669', 
      bg: '#d1fae5', 
      services: 3, 
      key: 'support',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=250&fit=crop'
    },
    { 
      id: 'gestion-de-proyectos-coordinacion', 
      icon: FiTarget, 
      color: '#7c3aed', 
      bg: '#ede9fe', 
      services: 2, 
      key: 'projects',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=250&fit=crop'
    },
    { 
      id: 'soporte-para-contenido-y-marketing-digital', 
      icon: FiMonitor, 
      color: '#0891b2', 
      bg: '#cffafe', 
      services: 6, 
      key: 'digital',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    { 
      id: 'tareas-administrativas-avanzadas-costo-por-hora', 
      icon: FiDollarSign, 
      color: '#ea580c', 
      bg: '#ffedd5', 
      services: 6, 
      key: 'advanced',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div>
      <section style={{
        padding: '160px 20px 100px', textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.88) 0%, rgba(30, 58, 95, 0.88) 100%), url("/planes.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', color: 'white', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('plans.title')}
          </p>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff, #93c5fd)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            {t('plans.title')}
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
            {t('plans.subtitle')}
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#f8fafc', marginTop: '-30px', position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px'
        }}>
          {categories.map((category, idx) => (
            <Link to={`/productos/${category.id}`} key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                background: 'white', borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'all 0.4s',
                border: '1px solid #f1f5f9', cursor: 'pointer', height: '100%',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${category.color}20`;
                e.currentTarget.style.borderColor = category.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#f1f5f9';
              }}>
                {/* Imagen representativa */}
                <div style={{
                  width: '100%', height: '160px',
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute', bottom: '-25px', left: '25px',
                    width: '55px', height: '55px', borderRadius: '14px',
                    background: category.color, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}>
                    <category.icon size={26} />
                  </div>
                </div>

                {/* Contenido */}
                <div style={{ padding: '35px 25px 25px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '10px', fontWeight: '700' }}>
                    {t(`services.items.${category.key}.title`)}
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                    {t(`services.items.${category.key}.description`)}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: '15px', borderTop: '1px solid #f1f5f9'
                  }}>
                    <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FiCheck size={14} style={{ color: category.color }} />
                      {category.services} {t('home.stats.services')}
                    </span>
                    <span style={{ color: category.color, fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {t('nav.services')} <FiArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FiStar size={40} style={{ color: '#2563eb', marginBottom: '20px' }} />
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '15px' }}>{t('plans.need_custom')}</h2>
          <p style={{ color: '#64748b', marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {t('plans.need_custom_desc')}
          </p>
          <Link to="/personalizado" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 30px', background: '#2563eb', color: 'white',
            textDecoration: 'none', borderRadius: '12px', fontWeight: '600'
          }}>
            {t('plans.cta_custom')} <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Planes;