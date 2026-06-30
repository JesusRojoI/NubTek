import { useLanguage } from '../../context/LanguageContext';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, titleKey, descriptionKey, link }) => {
  const { t } = useLanguage();

  return (
    <div className="service-card">
      <div className="service-card-icon">
        <Icon />
      </div>
      <h3 className="service-card-title">{titleKey}</h3>
      <p className="service-card-description">{descriptionKey}</p>
      {link && (
        <Button variant="outline" size="sm" onClick={() => window.location.href = link}>
          Ver más <FiArrowRight />
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;