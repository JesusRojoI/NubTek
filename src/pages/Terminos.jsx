import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Terminos = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet><title>{t('footer.terms')} - FetchBrand</title></Helmet>

      <section style={{
        padding: '140px 20px 80px', textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white'
      }}>
        <div>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('footer.terms')}
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: '800' }}>
            {t('footer.terms')}
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
              {t('legal.terms_title')}
            </h2>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>1.- {t('legal.identity')}</h3>
            <p>{t('legal.identity_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>2.- {t('legal.services')}</h3>
            <p>{t('legal.services_text')}</p>
            <ul>
              <li>{t('legal.service_1')}</li>
              <li>{t('legal.service_2')}</li>
              <li>{t('legal.service_3')}</li>
              <li>{t('legal.service_4')}</li>
              <li>{t('legal.service_5')}</li>
              <li>{t('legal.service_6')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>3. {t('legal.usage')}</h3>
            <p>{t('legal.usage_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>4. {t('legal.registration')}</h3>
            <p>{t('legal.registration_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>5.- {t('legal.payment')}</h3>
            <p>{t('legal.payment_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>6. {t('legal.cancellation')}</h3>
            <p>{t('legal.cancellation_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>7. {t('legal.responsibility')}</h3>
            <p>{t('legal.responsibility_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>8. {t('legal.intellectual')}</h3>
            <p>{t('legal.intellectual_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>9. {t('legal.modifications')}</h3>
            <p>{t('legal.modifications_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>10. {t('legal.jurisdiction')}</h3>
            <p>{t('legal.jurisdiction_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>11. {t('legal.contact_legal')}</h3>
            <p>{t('legal.contact_legal_text')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terminos;