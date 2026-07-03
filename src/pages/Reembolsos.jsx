import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Reembolsos = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet><title>{t('footer.refund')} - NubTek</title></Helmet>

      <section style={{
        padding: '140px 20px 80px', textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        color: 'white'
      }}>
        <div>
          <p style={{ color: '#94a3b8', marginBottom: '15px', fontSize: '0.95rem' }}>
            <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>{t('nav.home')}</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            {t('footer.refund')}
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: '800' }}>
            {t('footer.refund')}
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
              {t('refund.title')}
            </h2>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>1.- {t('refund.principles')}</h3>
            <p>{t('refund.principles_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>2.- {t('refund.scope')}</h3>
            <p>{t('refund.scope_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>3.- {t('refund.cancellations')}</h3>
            <p><strong>{t('refund.before')}</strong> {t('refund.before_text')}</p>
            <p><strong>{t('refund.after')}</strong> {t('refund.after_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>4.- {t('refund.process')}</h3>
            <ul>
              <li>{t('refund.process_1')}</li>
              <li>{t('refund.process_2')}</li>
              <li>{t('refund.process_3')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>5.- {t('refund.exclusions')}</h3>
            <ul>
              <li>{t('refund.exclusions_1')}</li>
              <li>{t('refund.exclusions_2')}</li>
            </ul>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>6.- {t('refund.how_to')}</h3>
            <p>{t('refund.how_to_text')}</p>
            <ul>
              <li>{t('refund.how_1')}</li>
              <li>{t('refund.how_2')}</li>
              <li>{t('refund.how_3')}</li>
              <li>{t('refund.how_4')}</li>
            </ul>
            <p>{t('refund.how_response')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>7.- {t('refund.profeco')}</h3>
            <p>{t('refund.profeco_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>8.- {t('refund.modifications')}</h3>
            <p>{t('refund.modifications_text')}</p>

            <h3 style={{ color: '#2563eb', marginTop: '25px' }}>9. {t('refund.contact_refund')}</h3>
            <p>{t('refund.contact_refund_email')}</p>
            <p>{t('refund.contact_refund_form')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reembolsos;