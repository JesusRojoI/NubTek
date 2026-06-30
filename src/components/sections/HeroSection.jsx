import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">
            <FiCheckCircle /> {t.home.hero.subtitle}
          </span>
          
          <h1 className="hero-title">
            {t.home.hero.title}
          </h1>
          
          <p className="hero-description">
            {t.home.hero.description}
          </p>

          <div className="hero-actions">
            <Link to="/servicios">
              <Button variant="primary" size="lg" icon={FiArrowRight}>
                {t.home.hero.cta}
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" size="lg">
                {t.home.hero.contact}
              </Button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+10</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+500</span>
              <span className="stat-label">Clientes satisfechos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte disponible</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-card card-1">
              <span className="card-emoji">⚡</span>
              <p>Gestión eficiente</p>
            </div>
            <div className="hero-card card-2">
              <span className="card-emoji">🎯</span>
              <p>Resultados precisos</p>
            </div>
            <div className="hero-card card-3">
              <span className="card-emoji">💡</span>
              <p>Soluciones inteligentes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;