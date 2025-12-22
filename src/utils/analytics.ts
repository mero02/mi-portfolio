import ReactGA from 'react-ga4';

// Función para obtener el ID de forma segura
const getGAId = (): string | undefined => {
  // 1. Intenta obtenerlo de Vite (funciona en desarrollo y producción con Vercel)
  const viteId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  // 2. Si es un string válido que empieza con G-, lo usamos
  if (typeof viteId === 'string' && viteId.startsWith('G-')) {
    return viteId;
  }
  
  // 3. Si no, mostramos advertencia
  console.warn(' ID de Google Analytics no encontrado o inválido en variables de entorno:', viteId);
  return undefined;
};

const GA_MEASUREMENT_ID = getGAId();

// Inicializar Google Analytics
export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    try {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      
      // Envía la primera vista de página
      ReactGA.send('pageview');
    } catch (error) {
      console.error('Error al inicializar Google Analytics:', error);
    }
  } else {
  }
};

// Función para trackear vistas de página
export const trackPageView = (path: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

// Función para trackear descargas de CV
export const trackCVDownload = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category: 'engagement',
      action: 'download',
      label: 'CV_PDF'
    });
  }
};

// Función genérica para otros eventos
export const trackEvent = (category: string, action: string, label?: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label
    });
  }
};