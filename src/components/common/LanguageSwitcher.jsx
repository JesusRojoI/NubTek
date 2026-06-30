import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    // Guardar para los correos
    localStorage.setItem('language', lang);
  };

  const currentLang = i18n.language;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      background: 'transparent',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '4px 8px',
      fontSize: '0.85rem',
      fontWeight: '600'
    }}>
      <button
        onClick={() => changeLanguage('es')}
        style={{
          padding: '2px 6px',
          borderRadius: '4px',
          border: 'none',
          background: currentLang === 'es' ? '#2563eb' : 'transparent',
          color: currentLang === 'es' ? 'white' : '#64748b',
          cursor: 'pointer',
          fontWeight: '600',
          fontFamily: 'inherit'
        }}
      >
        ES
      </button>
      <span style={{ color: '#94a3b8' }}>|</span>
      <button
        onClick={() => changeLanguage('en')}
        style={{
          padding: '2px 6px',
          borderRadius: '4px',
          border: 'none',
          background: currentLang === 'en' ? '#2563eb' : 'transparent',
          color: currentLang === 'en' ? 'white' : '#64748b',
          cursor: 'pointer',
          fontWeight: '600',
          fontFamily: 'inherit'
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;