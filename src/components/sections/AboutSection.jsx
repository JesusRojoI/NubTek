import { useLanguage } from '../../context/LanguageContext';
import { FiCheck } from 'react-icons/fi';
import './AboutSection.css';

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    'Gestión administrativa sin estrés',
    'Soporte en marketing y contenido',
    'Atención al cliente impecable',
    'Coordinación de proyectos y eventos',
    'Tareas administrativas avanzadas',
    'Servicios escalables y adaptables'
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              <div className="about-card">
                <span className="about-emoji">🚀</span>
                <p>+10 años de experiencia</p>
              </div>
              <div className="about-dots"></div>
            </div>
          </div>

          <div className="about-text">
            <span className="section-badge">{t.home.about.subtitle}</span>
            <h2 className="about-title">{t.home.about.title}</h2>
            <p className="about-description">{t.home.about.description}</p>
            
            <ul className="about-highlights">
              {highlights.map((item, index) => (
                <li key={index}>
                  <FiCheck className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;