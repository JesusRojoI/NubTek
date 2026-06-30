import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  // Traducciones básicas por si translations.js no existe
  const translations = {
    es: {
      nav: {
        home: 'Inicio',
        services: 'Servicios',
        plans: 'Planes',
        about: 'Nosotros',
        contact: 'Contactar'
      }
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        plans: 'Plans',
        about: 'About Us',
        contact: 'Contact'
      }
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};