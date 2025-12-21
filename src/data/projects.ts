import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ecommerce de Productos para Piscinas',
    description: 'Desarrollo completo de un ecommerce para la venta de piscinas y productos relacionados',
    longDescription: 'Proyecto personal que incluye implementación de FastAPI (backend) y React (frontend), aplicando estilos con Chakra UI y Bootstrap. Incluye seguridad en el registro y autenticación de usuarios, panel administrativo para gestión de productos, categorías y reportes de ventas con gráficos. Uso de Jira para gestión de tareas.',
    images: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
      '/images/projects/ecommerce-3.jpg'
    ],
    technologies: ['React', 'FastAPI', 'Chakra UI', 'Bootstrap', 'Jira'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/ecommerce-piscinas',
    featured: true,
    year: 2025,
    status: 'in-progress'
  },
  {
    id: '2',
    title: 'Gestión de Finanzas Personales',
    description: 'Aplicación web para gestión de finanzas personales con React y FastAPI',
    longDescription: 'Desarrollé una aplicación web completa para gestión de finanzas personales utilizando React (frontend), FastAPI (backend) y SQLite. Incluye registro y login de usuarios con autenticación JWT, gestión de ingresos y gastos, y resúmenes mensuales con gráficos interactivos.',
    images: [
      '/images/projects/finanzas-1.jpg',
      '/images/projects/finanzas-2.jpg'
    ],
    technologies: ['React', 'FastAPI', 'SQLite', 'JWT', 'Chart.js'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/gestion-finanzas',
    featured: true,
    year: 2024,
    status: 'completed'
  },
  {
    id: '3',
    title: 'Sistema de Monitoreo Ambiental',
    description: 'Sistema de gestión para monitoreo de datos ambientales desarrollado en equipo',
    longDescription: 'Proyecto universitario desarrollado en equipo interdisciplinario para la materia Desarrollo de Software. Diseñé y desarrollé un sistema utilizando FastAPI (backend) y React (frontend) para visualización de datos ambientales. Implementé una API REST para automatización de alertas críticas a través de un bot de Telegram.',
    images: [
      '/images/projects/ambiental-1.jpg',
      '/images/projects/ambiental-2.jpg'
    ],
    technologies: ['React', 'FastAPI', 'Telegram Bot API', 'PostgreSQL'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/monitoreo-ambiental',
    featured: false,
    year: 2024,
    status: 'completed'
  },
  {
    id: '4',
    title: 'Sistema de Gestión Académica',
    description: 'Sistema de gestión académica con Flask y React',
    longDescription: 'Desarrollo de un sistema completo para gestión académica que incluye módulos para estudiantes, profesores y administradores. Implementa autenticación segura, gestión de cursos, calificaciones y reportes. Desarrollado con Flask (backend) y React (frontend).',
    images: [
      '/images/projects/academico-1.jpg',
      '/images/projects/academico-2.jpg'
    ],
    technologies: ['React', 'Flask', 'PostgreSQL', 'JWT', 'Bootstrap'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/sistema-academico',
    featured: false,
    year: 2023,
    status: 'completed'
  },
  {
    id: '5',
    title: 'API de Procesamiento de Documentos',
    description: 'API RESTful para procesamiento inteligente de documentos',
    longDescription: 'API desarrollada durante la beca de investigación que implementa procesamiento de documentos con técnicas de IA. Incluye segmentación de documentos, extracción de información y automatización de procesos. Utiliza FastAPI y técnicas de machine learning para procesamiento inteligente.',
    images: [
      '/images/projects/documentos-1.jpg'
    ],
    technologies: ['FastAPI', 'Python', 'Machine Learning', 'OpenAI API'],
    category: 'backend',
    repository: 'https://github.com/mero02/api-documentos',
    featured: false,
    year: 2025,
    status: 'in-progress'
  },
  {
    id: '6',
    title: 'Aplicación de Notas con React Native',
    description: 'Aplicación móvil para gestión de notas con sincronización en la nube',
    longDescription: 'Aplicación móvil desarrollada con React Native que permite crear, editar y organizar notas con sincronización en tiempo real. Incluye autenticación de usuarios, categorización de notas, búsqueda avanzada y modo offline.',
    images: [
      '/images/projects/notas-1.jpg',
      '/images/projects/notas-2.jpg'
    ],
    technologies: ['React Native', 'Firebase', 'AsyncStorage', 'Expo'],
    category: 'mobile',
    repository: 'https://github.com/mero02/app-notas',
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