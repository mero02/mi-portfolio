import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Gestión Avanzada de Finanzas Personales',
    description: 'Aplicación completa para gestión financiera con reportes estadísticos avanzados',
    longDescription: 'Aplicación completa para gestión de finanzas personales que permite registrar ingresos, gastos, presupuestos, categorías, monedas y medios de pago con reportes estadísticos avanzados. Incluye soporte multi-moneda con conversión automática, análisis de tendencias, autenticación JWT, exportación/importación de datos, testing completo (23 unit tests, 305 E2E tests), CI/CD con GitHub Actions, y contenedorización con Docker.',
    images: [
      '/images/projects/finanzas-1.jpg',
      '/images/projects/finanzas-2.jpg',
      '/images/projects/finanzas-3.jpg'
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'pytest'],
    category: 'fullstack',
    featured: true,
    year: 2024,
    status: 'in-progress'
  },
  {
    id: '2',
    title: 'Sistema de Gestión de Turnos',
    description: 'Aplicación web completa para reserva y gestión de turnos con calendario interactivo',
    longDescription: 'Aplicación web desarrollada en React y FastAPI que permite gestionar turnos para servicios específicos. Incluye registro y autenticación de usuarios, reserva de turnos en fechas y horarios disponibles, visualización en calendario, cancelación de turnos, y orquestación completa con Docker para facilitar el despliegue.',
    images: [
      '/images/projects/turnos-1.jpg',
      '/images/projects/turnos-2.jpg',
      '/images/projects/turnos-3.jpg'
    ],
    technologies: ['React', 'FastAPI', 'Docker', 'PostgreSQL', 'JWT'],
    category: 'fullstack',
    featured: true,
    year: 2024,
    status: 'completed'
  },
  {
    id: '3',
    title: 'Sistema de Monitoreo Ambiental',
    description: 'Sistema de gestión para monitoreo de datos ambientales desarrollado en equipo universitario',
    longDescription: 'Proyecto universitario desarrollado en equipo interdisciplinario para la materia Desarrollo de Software. Diseñé y desarrollé un sistema utilizando FastAPI (backend) y React (frontend) para visualización de datos ambientales. Implementé una API REST para automatización de alertas críticas a través de un bot de Telegram.',
    images: [
      '/images/projects/ambiental-1.jpg',
      '/images/projects/ambiental-2.jpg'
    ],
    technologies: ['React', 'FastAPI', 'Telegram Bot API', 'SQLite'],
    category: 'fullstack',
    repository: 'https://github.com/UNPSJB/RMA-grupo-4',
    featured: true,
    year: 2024,
    status: 'completed'
  },
  {
    id: '4',
    title: 'Ruleta Interactiva para Eventos',
    description: 'Juego de ruleta web con dos modos: Clásico y Autoevaluación',
    longDescription: 'Aplicación web que implementa un juego de ruleta interactiva con dos modos de juego: Clásico (verdadero/falso) y Autoevaluación. Diseñada para eventos o clases donde se pueden cargar preguntas desde archivos CSV y jugar girando una ruleta para seleccionar preguntas al azar. Incluye interfaz intuitiva y soporte para múltiples categorías.',
    images: [
      '/images/projects/ruleta-1.jpg',
      '/images/projects/ruleta-2.jpg'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML5 Canvas', 'FastAPI'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/rulestudio',
    featured: false,
    year: 2024,
    status: 'in-progress'
  },
    {
    id: '5',
    title: 'Sistema de Gestión para Restobar',
    description: 'Sistema completo para gestión de operaciones de un restobar desarrollado en equipo',
    longDescription: 'Proyecto colaborativo para gestión integral de un restobar, incluyendo módulos para inventario, pedidos, mesas, empleados y reportes financieros. Desarrollado con enfoque en usabilidad y eficiencia operativa, implementando las mejores prácticas de desarrollo en equipo.',
    images: [
      '/images/projects/restobar-1.jpg',
      '/images/projects/restobar-2.jpg'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Docker'],
    category: 'fullstack',
    repository: 'https://github.com/Bikutah/ingenieria-3-grupo-2',
    featured: false,
    year: 2023,
    status: 'completed'
  },
  {
    id: '6',
    title: 'Ecommerce de Productos para Tienda',
    description: 'Plataforma completa de comercio electrónico con panel administrativo',
    longDescription: 'Proyecto personal que incluye implementación de FastAPI (backend) y React (frontend), aplicando estilos con Chakra UI y Bootstrap. Incluye seguridad en el registro y autenticación de usuarios, panel administrativo para gestión de productos, categorías y reportes de ventas con gráficos. Uso de Jira para gestión de tareas y metodologías ágiles.',
    images: [
      '/images/projects/tienda-1.jpg',
      '/images/projects/tienda-2.jpg',
      '/images/projects/tienda-3.jpg'
    ],
    technologies: ['React', 'FastAPI', 'Chakra UI', 'PostgreSQL', 'JWT'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/app-tienda',
    featured: false,
    year: 2024,
    status: 'in-progress'
  },
  {
    id: '7',
    title: 'Simulador Local de Amazon S3',
    description: 'Servicio de almacenamiento simulado usando LocalStack para laboratorio de sistemas distribuidos',
    longDescription: 'Proyecto que simula un servicio de almacenamiento Amazon S3 localmente utilizando LocalStack. Diseñado para el Laboratorio 3 de Sistemas Distribuidos, permite subir y listar archivos en un bucket simulado sin necesidad de AWS real. Incluye configuración completa de LocalStack y ejemplos de uso.',
    images: [
      '/images/projects/s3-1.jpg',
      '/images/projects/s3-2.jpg'
    ],
    technologies: ['Python', 'LocalStack', 'AWS CLI', 'Docker'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/proyecto-s3-local',
    featured: false,
    year: 2024,
    status: 'completed'
  },
  {
    id: '8',
    title: 'Sistema de Monitoreo con Observabilidad',
    description: 'Sistema de monitoreo distribuido con Docker, OpenTelemetry y Jaeger',
    longDescription: 'Proyecto que implementa un sistema de monitoreo básico utilizando Docker Compose, incluyendo un microservicio Flask instrumentado con OpenTelemetry para trazas distribuidas, cliente con servicios de logging y SNMP, servidor de monitoreo centralizado, y Jaeger para visualización de trazas. Demuestra aspectos del monitoreo y la observabilidad en sistemas distribuidos.',
    images: [
      '/images/projects/monitoreo-1.jpg',
      '/images/projects/monitoreo-2.jpg',
      '/images/projects/monitoreo-3.jpg'
    ],
    technologies: ['Flask', 'Docker', 'OpenTelemetry', 'Jaeger', 'SNMP', 'Python'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/laboratorio',
    featured: false,
    year: 2024,
    status: 'completed'
  },
  {
    id: '9',
    title: 'Extractor de Patentes de Vehículos',
    description: 'Aplicación web para extraer y validar patentes de vehículos según formatos oficiales argentinos',
    longDescription: 'Aplicación web desarrollada que permite extraer y validar patentes de vehículos a partir de texto de entrada, siguiendo los formatos oficiales de Argentina (ABC-1234 con guión y XYZ 567 sin guión). Utiliza expresiones regulares para identificar y validar las patentes encontradas en el texto proporcionado por el usuario.',
    images: [
      '/images/projects/patentes-1.jpg',
      '/images/projects/patentes-2.jpg'
    ],
    technologies: ['React', 'JavaScript', 'Regex', 'CSS'],
    category: 'frontend',
    repository: 'https://github.com/mero02/FTI-Extractor-Patentes',
    featured: true,
    year: 2024,
    status: 'completed'
  },
  {
    id: '10',
    title: 'Chatbot para Documentos PDF',
    description: 'Sistema de IA para crear chatbots capaces de responder preguntas basadas en PDFs',
    longDescription: 'Proyecto de investigación que explora diferentes enfoques de IA para chatbots que responden preguntas sobre contenido de documentos PDF. Implementa cinco casos principales: fine-tuning de modelos de lenguaje, Retrieval-Augmented Generation (RAG), Question Answering extractiva con BERT, y enfoque híbrido. Todos los experimentos se ejecutan en Google Colab con datos en Google Drive.',
    images: [
      '/images/projects/chatbot-1.jpg',
      '/images/projects/chatbot-2.jpg'
    ],
    technologies: ['Python', 'Google Colab', 'BERT', 'RAG', 'OpenAI API'],
    category: 'backend',
    repository: 'https://github.com/mero02/chatbot-pdf-app',
    featured: true,
    year: 2025,
    status: 'completed'
  },
  {
    id: '11',
    title: 'Generador de Curvas Fractales',
    description: 'Aplicación para generación de curvas fractales como Dragon Curve y Hilbert Curve',
    longDescription: 'Proyecto que implementa algoritmos para generar curvas fractales utilizando sistemas de Lindenmayer (L-systems). Incluye la implementación de Dragon Curve (ángulo 90°, reglas X→X+YF+, Y→−FX−Y) y Hilbert Curve (ángulo 90°, reglas más complejas), con visualización gráfica en canvas HTML5. Demuestra conceptos de geometría fractal y algoritmos recursivos.',
    images: [
      '/images/projects/curvas-1.jpg',
      '/images/projects/curvas-2.jpg'
    ],
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'L-systems', 'Fractal Geometry'],
    category: 'frontend',
    repository: 'https://github.com/ilugr/FTI_Curvas',
    featured: false,
    year: 2023,
    status: 'completed'
  }
];

export const projectCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'mobile', label: 'Mobile' }
];

export const technologies = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Vue.js', 'Laravel',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'TailwindCSS',
  'Express', 'Next.js', 'React Native', 'Flutter', 'GraphQL'
];