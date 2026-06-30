import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  FiBriefcase, FiHeadphones, FiMonitor, FiDollarSign, 
  FiTarget, FiTruck, FiGlobe, FiAward, FiSmile, FiUsers,
  FiArrowRight, FiCheckCircle, FiStar, FiClock, FiZap,
  FiBarChart2, FiTrendingUp, FiShield, FiPhone
} from 'react-icons/fi';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '+10', icon: FiStar },
    { number: '+500', icon: FiUsers },
    { number: '24/7', icon: FiClock },
    { number: '+50', icon: FiZap }
  ];

  const services = [
    { icon: FiBriefcase, color: '#2563eb' },
    { icon: FiHeadphones, color: '#059669' },
    { icon: FiMonitor, color: '#7c3aed' },
    { icon: FiDollarSign, color: '#ea580c' },
    { icon: FiTarget, color: '#0891b2' },
    { icon: FiTruck, color: '#be185d' }
  ];

  const features = [
    { icon: FiGlobe },
    { icon: FiAward },
    { icon: FiSmile },
    { icon: FiUsers }
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #dbeafe 60%, #f0f9ff 100%)',
        padding: '120px 20px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '5%',
          right: '-8%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(37,99,235,0.1)',
              color: '#2563eb',
              padding: '8px 18px',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '25px'
            }}>
              <FiCheckCircle /> {t('home.hero.badge')}
            </div>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 4rem)',
              fontWeight: '800',
              color: '#0f172a',
              lineHeight: '1.1',
              marginBottom: '20px'
            }}>
              {t('home.hero.title')}
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: '#475569',
              lineHeight: '1.8',
              marginBottom: '35px',
              maxWidth: '500px'
            }}>
              {t('home.hero.subtitle')}
            </p>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '50px' }}>
              <Link to="/servicios" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 30px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(37,99,235,0.3)'
              }}>
                {t('home.hero.cta_services')} <FiArrowRight />
              </Link>

              <Link to="/contacto" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 30px',
                background: 'white',
                color: '#2563eb',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s',
                border: '2px solid #2563eb'
              }}>
                <FiPhone /> {t('home.hero.cta_contact')}
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              paddingTop: '30px',
              borderTop: '1px solid rgba(0,0,0,0.08)'
            }}>
              {stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <stat.icon style={{ fontSize: '1.3rem', color: '#2563eb', marginBottom: '8px' }} />
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {t(`home.stats.${['experience', 'clients', 'support', 'services'][idx]}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: '450px',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(37,99,235,0.3)'
            }}>
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '-20px',
                background: 'white',
                padding: '15px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2,
                animation: 'float 3s ease-in-out infinite'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563eb'
                }}>
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>{t('home.hero.cta_services')}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{t('home.hero.badge')}</div>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '-25px',
                background: 'white',
                padding: '15px 20px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2,
                animation: 'float 3s ease-in-out infinite 1s'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#d1fae5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#059669'
                }}>
                  <FiTrendingUp size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>+45%</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{t('home.hero.title')}</div>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                zIndex: 1
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '25px',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <FiShield size={50} />
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>NubTek</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{t('home.hero.subtitle')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#0f172a', marginBottom: '15px' }}>
              {t('home.services.title')}
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              {t('home.services.description')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}>
            {services.map((service, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '35px 30px',
                borderRadius: '20px',
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = service.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#f1f5f9';
              }}>
                <div style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '14px',
                  background: `${service.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: service.color,
                  fontSize: '1.5rem'
                }}>
                  <service.icon size={26} />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>
                  {t(`services.items.${['admin', 'support', 'digital', 'billing', 'projects', 'logistics'][idx]}.title`)}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {t(`services.items.${['admin', 'support', 'digital', 'billing', 'projects', 'logistics'][idx]}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '50px', flexWrap: 'wrap' }}>
            <Link to="/personalizado" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600'
            }}>
              {t('home.services.cta_request')} <FiArrowRight />
            </Link>
            <Link to="/planes" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: 'white',
              color: '#2563eb',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              border: '2px solid #2563eb'
            }}>
              {t('home.services.cta_plans')}
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(37,99,235,0.1)',
              color: '#2563eb',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              marginBottom: '20px'
            }}>
              {t('home.why_us.badge')}
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#0f172a', marginBottom: '15px' }}>
              {t('home.why_us.title')}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              {t('home.why_us.description')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '35px 25px',
                borderRadius: '20px',
                textAlign: 'center',
                transition: 'all 0.3s',
                border: '1px solid #f1f5f9'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white'
                }}>
                  <feature.icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '10px' }}>
                  {t(`home.why_us.features.${idx}.title`)}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                  {t(`home.why_us.features.${idx}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/contacto" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 30px',
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600'
            }}>
              {t('about.cta')} <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <FiBarChart2 size={50} style={{ marginBottom: '25px', opacity: 0.8 }} />
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', marginBottom: '15px' }}>
            {t('home.cta_section.title')}
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '35px', lineHeight: '1.8' }}>
            {t('home.cta_section.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/personalizado" style={{
              padding: '14px 30px',
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600'
            }}>
              {t('home.cta_section.cta')}
            </Link>
            <Link to="/planes" style={{
              padding: '14px 30px',
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              {t('home.cta_section.cta_plans')}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default Home;