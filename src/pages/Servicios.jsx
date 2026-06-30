import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FiBriefcase, FiHeadphones, FiMonitor, FiDollarSign, 
  FiTarget, FiTruck, FiArrowRight, FiStar, FiCheckCircle 
} from 'react-icons/fi';

const Servicios = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: FiBriefcase,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
      color: '#2563eb',
      key: 'admin'
    },
    {
      icon: FiHeadphones,
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=250&fit=crop',
      color: '#059669',
      key: 'support'
    },
    {
      icon: FiMonitor,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      color: '#7c3aed',
      key: 'digital'
    },
    {
      icon: FiDollarSign,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      color: '#ea580c',
      key: 'billing'
    },
    {
      icon: FiTarget,
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=250&fit=crop',
      color: '#0891b2',
      key: 'projects'
    },
    {
      icon: FiTruck,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
      color: '#be185d',
      key: 'logistics'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '140px 20px 80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.1)', pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute', bottom: '-50px', left: '-50px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'rgba(6, 182, 212, 0.08)', pointerEvents: 'none'
        }}></div>
        <div style={{ position: 'absolute', top: '50%', right: '10%', opacity: 0.05 }}>
          <FiStar size={200} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('services.title')}
          </p>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff, #93c5fd)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            {t('services.title')}
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.8' }}>
            {t('services.description')}
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/personalizado" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 30px', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white', textDecoration: 'none', borderRadius: '12px',
              fontWeight: '600', fontSize: '1rem', transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(37, 99, 235, 0.4)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)'; }}
            >
              <FiCheckCircle /> {t('services.cta_request')}
            </Link>
            
            <Link to="/planes" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 30px', background: 'transparent', color: 'white',
              textDecoration: 'none', borderRadius: '12px', fontWeight: '600',
              fontSize: '1rem', border: '2px solid rgba(255, 255, 255, 0.3)', transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.1)'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }}
            >
              <FiArrowRight /> {t('services.cta_plans')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid - ESTÁTICO, sin efectos hover */}
      <section style={{ padding: '80px 20px', background: '#f8fafc', marginTop: '-30px', position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white', borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid #f1f5f9',
              overflow: 'hidden'
            }}>
              {/* Imagen representativa */}
              <div style={{
                width: '100%', height: '180px',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: `linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.9) 100%)`
                }}></div>
                <div style={{
                  position: 'absolute', bottom: '-25px', left: '25px',
                  width: '55px', height: '55px', borderRadius: '14px',
                  background: service.color, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  <service.icon size={26} />
                </div>
              </div>

              {/* Contenido */}
              <div style={{ padding: '35px 25px 25px' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px', fontWeight: '700' }}>
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {t(`services.items.${service.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicios;