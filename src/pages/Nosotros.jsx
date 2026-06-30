import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FiGlobe, FiAward, FiSmile, FiUsers, 
  FiArrowRight, FiTarget, FiTrendingUp, FiShield 
} from 'react-icons/fi';

const Nosotros = () => {
  const { t } = useTranslation();

  const features = [
    { icon: FiGlobe, key: 0 },
    { icon: FiAward, key: 1 },
    { icon: FiTrendingUp, key: 2 },
    { icon: FiUsers, key: 3 }
  ];

  const featureTitles = ['global', 'experience', 'efficiency', 'team'];
  const featureDescriptions = ['global_desc', 'experience_desc', 'efficiency_desc', 'team_desc'];

  const values = [
    { icon: FiTarget, titleKey: 'mission', descKey: 'mission_desc' },
    { icon: FiShield, titleKey: 'vision', descKey: 'vision_desc' },
    { icon: FiSmile, titleKey: 'values', descKey: 'values_desc' }
  ];

  return (
    <div>
      {/* Hero con imagen de fondo */}
      <section style={{
        padding: '160px 20px 100px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 58, 95, 0.85) 100%), url("/image1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('about.title')}
          </p>

          <span style={{
            display: 'inline-block', padding: '8px 20px',
            background: 'rgba(37, 99, 235, 0.25)', color: '#93c5fd',
            borderRadius: '25px', fontWeight: '600', fontSize: '0.85rem',
            letterSpacing: '2px', marginBottom: '25px'
          }}>
            {t('about.badge')}
          </span>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff, #93c5fd)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            {t('about.title')}
          </h1>
          
          <p style={{ fontSize: '1.3rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontWeight: '500' }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '100px 20px', background: 'white',
        marginTop: '-30px', position: 'relative', zIndex: 2,
        borderRadius: '30px 30px 0 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block', padding: '8px 20px',
              background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb',
              borderRadius: '50px', fontWeight: '600', fontSize: '0.85rem',
              letterSpacing: '1px', marginBottom: '20px'
            }}>
              {t('about.why_us')}
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#0f172a', marginBottom: '15px' }}>
              {t('about.why_title')}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              {t('about.why_desc')}
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px', marginBottom: '80px'
          }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{
                background: 'white', padding: '35px 25px', borderRadius: '20px',
                textAlign: 'center', border: '1px solid #f1f5f9'
              }}>
                <div style={{
                  width: '70px', height: '70px', borderRadius: '18px',
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', color: 'white'
                }}>
                  <feature.icon size={30} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>
                  {t(`about.features.${featureTitles[idx]}.title`)}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {t(`about.features.${featureTitles[idx]}.desc`)}
                </p>
              </div>
            ))}
          </div>

          {/* Misión / Visión / Valores */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px', marginBottom: '60px'
          }}>
            {values.map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, #f8fafc, #f0f9ff)',
                padding: '35px 30px', borderRadius: '20px', border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{
                    width: '45px', height: '45px', borderRadius: '12px',
                    background: '#2563eb', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: 'white'
                  }}>
                    <item.icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>
                    {t(`about.${item.titleKey}`)}
                  </h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {t(`about.${item.descKey}`)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 30px', background: '#2563eb', color: 'white',
              textDecoration: 'none', borderRadius: '12px', fontWeight: '600',
              fontSize: '1rem', transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)'
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.2)'; }}
            >
              {t('about.cta')} <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;