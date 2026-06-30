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
            Fetch<span style={{ color: '#2563eb' }}>Brand</span>
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
          
          <svg width="50" height="16" viewBox="0 0 1000 324" fill="none" style={{ opacity: 0.85 }}>
            <path d="M360.6 319.3L418.2 5.4H510.2L452.6 319.3H360.6Z" fill="white"/>
            <path d="M755.2 14.9C733.6 6.3 699.4 0 660.6 0C553.8 0 478.6 49.8 477.2 121C475.8 173.6 531.4 203 572.8 218.8C615.6 235 630 245.4 629.6 259.6C628.8 281.8 598.2 292 569.4 292C529.4 292 508.2 286.8 475.4 273.6L462 268L447.8 316.8C471.2 326.6 514.4 335.2 559.2 336C672.6 336 746 287.2 747.4 211.6C748.8 164.8 714.6 143 705.4 136.4C696.8 130.2 691.2 127 691.2 127L755.2 14.9ZM822.6 5.4H743.4C710.8 5.4 686.4 14.6 672 47.6L577.8 319.3H675.6L695.2 265.8H813.6L836.4 319.3H922.2L822.6 5.4ZM716.4 192.6L772.8 40.2L811.2 192.6H716.4Z" fill="white"/>
            <path d="M45.4 5.4L0 319.3H92.8L130.6 5.4H45.4Z" fill="white"/>
            <path d="M265.4 5.4L177.8 319.3H270.6L358.2 5.4H265.4Z" fill="white"/>
          </svg>

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