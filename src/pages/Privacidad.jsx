import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Privacidad = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet><title>{t('footer.privacy')} - NubTek</title></Helmet>

      <section style={{
        padding: '140px 20px 80px', textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white'
      }}>
        <div>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('footer.privacy')}
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: '800' }}>
            {t('footer.privacy')}
          </h1>
        </div>
      </section>

      <section style={{ padding: '60px 20px 80px', background: '#f8fafc', marginTop: '-30px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'white', padding: '40px', borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)', lineHeight: '1.8', color: '#334155'
          }}>
            <h2 style={{ color: '#0f172a', marginBottom: '25px', fontSize: '1.5rem' }}>
              {t('privacy.title')}
            </h2>
            <p>{t('privacy.intro')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>1.- {t('privacy.data')}</h3>
            <ul>
              <li>{t('privacy.data_1')}</li>
              <li>{t('privacy.data_2')}</li>
              <li>{t('privacy.data_3')}</li>
              <li>{t('privacy.data_4')}</li>
            </ul>
            <p><strong>{t('privacy.important')}</strong> {t('privacy.important_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>2.- {t('privacy.purposes')}</h3>
            <ul>
              <li>{t('privacy.purpose_1')}</li>
              <li>{t('privacy.purpose_2')}</li>
              <li>{t('privacy.purpose_3')}</li>
              <li>{t('privacy.purpose_4')}</li>
              <li>{t('privacy.purpose_5')}</li>
              <li>{t('privacy.purpose_6')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>3.- {t('privacy.legal_basis')}</h3>
            <ul>
              <li>{t('privacy.basis_1')}</li>
              <li>{t('privacy.basis_2')}</li>
              <li>{t('privacy.basis_3')}</li>
              <li>{t('privacy.basis_4')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>4.- {t('privacy.rights')}</h3>
            <ul>
              <li>{t('privacy.rights_1')}</li>
              <li>{t('privacy.rights_2')}</li>
              <li>{t('privacy.rights_3')}</li>
              <li>{t('privacy.rights_4')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>5.- {t('privacy.transfers')}</h3>
            <ul>
              <li>{t('privacy.transfers_1')}</li>
              <li>{t('privacy.transfers_2')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>6.- {t('privacy.security')}</h3>
            <ul>
              <li>{t('privacy.security_1')}</li>
              <li>{t('privacy.security_2')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>7.- {t('privacy.cookies')}</h3>
            <p>{t('privacy.cookies_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>8.- {t('privacy.minors')}</h3>
            <p>{t('privacy.minors_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>9.- {t('privacy.profeco_transfers')}</h3>
            <p>{t('privacy.profeco_transfers_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>10.- {t('privacy.changes')}</h3>
            <p>{t('privacy.changes_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>11.- {t('privacy.contact_privacy')}</h3>
            <p>{t('privacy.contact_privacy_email')}</p>
            <p>{t('privacy.contact_privacy_address')}</p>
            <p>{t('privacy.contact_privacy_channels')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacidad;