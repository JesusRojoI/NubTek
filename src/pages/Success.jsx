import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiHome, FiSearch, FiMail } from 'react-icons/fi';

const Success = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 20px',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'
    }}>
      <div style={{
        textAlign: 'center',
        background: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        maxWidth: '550px'
      }}>
        {/* Icono de éxito */}
        <div style={{
          width: '100px',
          height: '100px',
          margin: '0 auto 30px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem'
        }}>
          ✅
        </div>
        
        <h1 style={{ 
          fontSize: '2rem', 
          color: '#0f172a', 
          marginBottom: '15px',
          fontWeight: '700'
        }}>
          {t('success.title')}
        </h1>
        
        <p style={{ 
          color: '#64748b', 
          fontSize: '1.1rem', 
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          {t('success.message')}
        </p>

        {/* Aviso de correo */}
        <div style={{
          background: '#f0fdf4',
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          justifyContent: 'center',
          border: '1px solid #bbf7d0'
        }}>
          <FiMail size={22} style={{ color: '#059669' }} />
          <span style={{ color: '#065f46', fontWeight: '500', fontSize: '0.95rem' }}>
            {t('success.email_notice')}
          </span>
        </div>

        {/* Botones de acción */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 30px',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            transition: 'all 0.3s',
            boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.2)';
          }}>
            <FiHome /> {t('success.home')}
          </Link>
          
          <Link to="/servicios" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 30px',
            background: 'white',
            color: '#2563eb',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            border: '2px solid #2563eb',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#2563eb';
          }}>
            <FiSearch /> {t('success.services')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;