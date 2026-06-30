import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import { 
  FiBriefcase, FiHeadphones, FiMonitor, 
  FiFileText, FiTarget, FiTruck, FiArrowRight 
} from 'react-icons/fi';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: FiBriefcase, title: 'Gestión Administrativa', description: 'Organizamos agendas, correos electrónicos, archivos digitales y bases de datos para que todo fluya con precisión.' },
    { icon: FiHeadphones, title: 'Atención al Cliente', description: 'Respondemos mensajes, filtramos llamadas y gestionamos contactos con profesionalismo.' },
    { icon: FiMonitor, title: 'Soporte Digital', description: 'Gestionamos herramientas digitales y optimizamos procesos con eficiencia total.' },
    { icon: FiFileText, title: 'Facturación y Reportes', description: 'Facturación, conciliación y reportes financieros con precisión y orden.' },
    { icon: FiTarget, title: 'Coordinación de Proyectos', description: 'Supervisamos tareas y gestionamos herramientas como Trello o Asana.' },
    { icon: FiTruck, title: 'Logística y Reservaciones', description: 'Coordinación de viajes, reservaciones y logística compleja.' }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{t.home.services.title}</h2>
          <p className="section-description">{t.home.services.description}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon-wrapper">
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="section-actions text-center">
          <Link to="/contacto">
            <Button variant="primary" size="lg" icon={FiArrowRight}>
              {t.home.services.requestService}
            </Button>
          </Link>
          <Link to="/planes">
            <Button variant="outline" size="lg">
              {t.home.services.viewPlans}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;