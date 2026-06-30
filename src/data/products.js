export const productsData = {
  'administracion-tareas-basicas': {
    title: 'Administración / Tareas Básicas',
    products: [
      { id: 'adm-1', defaultName: 'Organización de archivos digitales', price: 760, icon: 'FiFolder' },
      { id: 'adm-2', defaultName: 'Organización de correos electrónicos', price: 500, icon: 'FiMail' },
      { id: 'adm-3', defaultName: 'Gestión de agendas / citas / reuniones', price: 380, icon: 'FiCalendar' },
      { id: 'adm-4', defaultName: 'Entradas de datos / bases de datos', price: 310, icon: 'FiDatabase' }
    ]
  },
  'atencion-al-cliente-comunicaciones': {
    title: 'Atención al cliente / Comunicaciones',
    products: [
      { id: 'atc-1', defaultName: 'Atención de quejas / seguimientos', price: 450, icon: 'FiMessageCircle' },
      { id: 'atc-2', defaultName: 'Filtrar y reenviar llamadas', price: 250, icon: 'FiPhoneCall' },
      { id: 'atc-3', defaultName: 'Responder mensajes de clientes', price: 180, icon: 'FiMessageSquare' }
    ]
  },
  'gestion-de-proyectos-coordinacion': {
    title: 'Gestión de Proyectos / Coordinación',
    products: [
      { id: 'gpc-1', defaultName: 'Organización de eventos virtuales / webinars', price: 350, icon: 'FiVideo' },
      { id: 'gpc-2', defaultName: 'Supervisión de tareas / proyectos', price: 300, icon: 'FiTrello' }
    ]
  },
  'soporte-para-contenido-y-marketing-digital': {
    title: 'Soporte para Contenido y Marketing Digital',
    products: [
      { id: 'scm-1', defaultName: 'Gestión de redes sociales (Avanzado)', price: 700, icon: 'FiInstagram' },
      { id: 'scm-2', defaultName: 'Creación de contenido (Avanzado)', price: 600, icon: 'FiEdit' },
      { id: 'scm-3', defaultName: 'Diseño básico / edición (Avanzado)', price: 550, icon: 'FiImage' },
      { id: 'scm-4', defaultName: 'Gestión de redes sociales (Básico)', price: 350, icon: 'FiInstagram' },
      { id: 'scm-5', defaultName: 'Diseño básico / edición (Básico)', price: 280, icon: 'FiImage' },
      { id: 'scm-6', defaultName: 'Creación de contenido (Básico)', price: 160, icon: 'FiEdit' }
    ]
  },
  'tareas-administrativas-avanzadas-costo-por-hora': {
    title: 'Tareas Administrativas Avanzadas / Costo por Hora',
    products: [
      { id: 'taa-1', defaultName: 'Reservaciones y logística (Avanzado)', price: 1500, icon: 'FiMap' },
      { id: 'taa-2', defaultName: 'Facturación y reportes (Avanzado)', price: 1200, icon: 'FiFileText' },
      { id: 'taa-3', defaultName: 'Reservaciones y logística (Intermedio)', price: 920, icon: 'FiMap' },
      { id: 'taa-4', defaultName: 'Facturación y reportes (Intermedio)', price: 850, icon: 'FiFileText' },
      { id: 'taa-5', defaultName: 'Reservaciones y logística (Básico)', price: 600, icon: 'FiMap' },
      { id: 'taa-6', defaultName: 'Facturación y reportes (Básico)', price: 320, icon: 'FiFileText' }
    ]
  }
};

export const iconMap = {
  FiFolder: '📁', FiMail: '📧', FiCalendar: '📅', FiDatabase: '💾',
  FiMessageCircle: '💬', FiPhoneCall: '📞', FiMessageSquare: '💭',
  FiVideo: '🎥', FiTrello: '📊', FiInstagram: '📱', FiEdit: '✍️',
  FiImage: '🎨', FiMap: '✈️', FiFileText: '💰'
};