import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { FiGlobe, FiAward, FiSmile, FiUsers, FiArrowRight } from 'react-icons/fi';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    { icon: FiGlobe, title: t.home.whyChooseUs.features[0].title, description: t.home.whyChooseUs.features[0].description },
    { icon: FiAward, title: t.home.whyChooseUs.features[1].title, description: t.home.whyChooseUs.features[1].description },
    { icon: FiSmile, title: t.home.whyChooseUs.features[2].title, description: t.home.whyChooseUs.features[2].description },
    { icon: FiUsers, title: t.home.whyChooseUs.features[3].title, description: t.home.whyChooseUs.features[3].description }
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="why-us-content">
          <div className="why-us-text">
            <span className="section-badge">POR QUÉ ELEGIRNOS</span>
            <h2 className="why-us-title">{t.home.whyChooseUs.title}</h2>
            <p className="why-us-description">{t.home.whyChooseUs.description}</p>
            
            <Link to="/contacto">
              <Button variant="primary" size="lg" icon={FiArrowRight}>
                {t.home.whyChooseUs.cta}
              </Button>
            </Link>
          </div>

          <div className="why-us-features">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;