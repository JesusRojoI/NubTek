import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0f172a',
      color: '#cbd5e1',
      padding: '60px 20px 30px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px'
      }}>
        <div>
          <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>
            Nub<span style={{ color: '#2563eb' }}>Tek</span>
          </h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
            {t('footer.about')}
          </p>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '15px' }}>{t('footer.links')}</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/terminos-y-condiciones" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                {t('footer.terms')}
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/politica-privacidad" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                {t('footer.privacy')}
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/politica-de-devoluciones-y-reembolsos" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                {t('footer.refund')}
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/contacto" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                {t('footer.contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '15px' }}>{t('footer.contact_title')}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.8' }}>
            Avenida Homero, N° 203, Piso 8, Int. 804,<br />
            Colonia Polanco V Sección,<br />
            C.P. 11560, Alcaldía Miguel Hidalgo,<br />
            Ciudad de México
          </p>
          <p style={{ color: '#94a3b8', marginTop: '10px' }}>
            📞 +52 1 55 5920 2774
          </p>
          <p style={{ color: '#94a3b8' }}>
            ✉️ soluciones@nubtek.com.mx
          </p>
        </div>
      </div>

      <div style={{
        marginTop: '40px',
        paddingTop: '25px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
          © {currentYear} {t('footer.rights')}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{t('footer.accept')}</span>
          
          <img 
  src="/visa_logo.svg" 
  alt="VISA" 
  style={{
    height: '32px',
    width: 'auto',
    filter: 'brightness(0) invert(1)',
    opacity: 0.85
  }}
/>

          <svg width="35" height="22" viewBox="0 0 39 24" fill="none" style={{ opacity: 0.8 }}>
            <circle cx="14.5" cy="12" r="11.5" fill="white" fillOpacity="0.9"/>
            <circle cx="24.5" cy="12" r="11.5" fill="white" fillOpacity="0.6"/>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;