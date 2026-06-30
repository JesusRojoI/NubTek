import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const cartCount = getCartCount();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        height: '80px'
      }}>
        <Link to="/" style={{
          textDecoration: 'none',
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#0f172a'
        }}>
          Nub<span style={{ color: '#2563eb' }}>Tek</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: isActive('/') ? '#2563eb' : '#475569',
            fontWeight: '500',
            padding: '8px 0',
            borderBottom: isActive('/') ? '2px solid #2563eb' : '2px solid transparent'
          }}>{t('nav.home')}</Link>
          
          <Link to="/servicios" style={{
            textDecoration: 'none',
            color: isActive('/servicios') ? '#2563eb' : '#475569',
            fontWeight: '500',
            padding: '8px 0',
            borderBottom: isActive('/servicios') ? '2px solid #2563eb' : '2px solid transparent'
          }}>{t('nav.services')}</Link>
          
          <Link to="/planes" style={{
            textDecoration: 'none',
            color: isActive('/planes') ? '#2563eb' : '#475569',
            fontWeight: '500',
            padding: '8px 0',
            borderBottom: isActive('/planes') ? '2px solid #2563eb' : '2px solid transparent'
          }}>{t('nav.plans')}</Link>
          
          <Link to="/nosotros" style={{
            textDecoration: 'none',
            color: isActive('/nosotros') ? '#2563eb' : '#475569',
            fontWeight: '500',
            padding: '8px 0',
            borderBottom: isActive('/nosotros') ? '2px solid #2563eb' : '2px solid transparent'
          }}>{t('nav.about')}</Link>
          
          <LanguageSwitcher />
          
          <Link to="/carrito" style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: '#f1f5f9',
            color: '#475569',
            textDecoration: 'none',
            fontSize: '1.3rem',
            transition: 'all 0.2s'
          }}>
            🛒
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ef4444',
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: '700',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link to="/contacto" style={{
            padding: '10px 20px',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600'
          }}>{t('nav.contact')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;