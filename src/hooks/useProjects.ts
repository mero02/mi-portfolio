import { useTranslation } from 'react-i18next';
import { Project } from '../types';
import { projectsTranslations, projectCategoriesTranslations, technologiesTranslations } from '../data/projects-i18n';

// Datos base de proyectos (solo datos técnicos sin texto)
const baseProjects: Omit<Project, 'title' | 'description' | 'longDescription'>[] = [
  {
    id: '1',
    images: [
      '/images/projects/finanzas-1.png',
      '/images/projects/finanzas-2.png',
      '/images/projects/finanzas-3.png'
    ],
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'pytest'],
    category: 'fullstack',
    featured: true,
    year: 2025,
    status: 'in-progress'
  },
  {
    id: '2',
    images: [
      '/images/projects/turnos-1.png',
      '/images/projects/turnos-2.png',
      '/images/projects/turnos-3.png'
    ],
    technologies: ['React', 'FastAPI', 'Docker', 'PostgreSQL', 'JWT'],
    category: 'fullstack',
    featured: true,
    year: 2025,
    status: 'completed'
  },
  {
    id: '3',
    images: [
      '/images/projects/ambiental-1.png',
      '/images/projects/ambiental-2.png',
      '/images/projects/ambiental-3.png'
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
    images: [
      '/images/projects/ruleta-1.png',
      '/images/projects/ruleta-2.png'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML5 Canvas', 'FastAPI'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/rulestudio',
    featured: false,
    year: 2025,
    status: 'in-progress'
  },
  {
    id: '5',
    images: [
      '/images/projects/restobar-1.png',
      '/images/projects/restobar-2.png',
      '/images/projects/restobar-3.png'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Docker', 'TypeScript'],
    category: 'fullstack',
    repository: 'https://github.com/Bikutah/ingenieria-3-grupo-2',
    featured: false,
    year: 2025,
    status: 'completed'
  },
  {
    id: '6',
    images: [
      '/images/projects/tienda-1.png',
      '/images/projects/tienda-2.png',
      '/images/projects/tienda-3.png',
      '/images/projects/tienda-4.png'
    ],
    technologies: ['React', 'FastAPI', 'Chakra UI', 'PostgreSQL', 'JWT'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/app-tienda',
    featured: false,
    year: 2025,
    status: 'in-progress'
  },
  {
    id: '7',
    images: [
      '/images/projects/s3-1.png',
      '/images/projects/s3-2.png'
    ],
    technologies: ['Python', 'LocalStack', 'AWS CLI', 'Docker'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/proyecto-s3-local',
    featured: false,
    year: 2025,
    status: 'completed'
  },
  {
    id: '8',
    images: [
      '/images/projects/monitoreo-1.png',
      '/images/projects/monitoreo-2.png',
      '/images/projects/monitoreo-3.png'
    ],
    technologies: ['Flask', 'Docker', 'OpenTelemetry', 'Jaeger', 'SNMP', 'Python'],
    category: 'fullstack',
    repository: 'https://github.com/mero02/laboratorio',
    featured: false,
    year: 2025,
    status: 'completed'
  },
  {
    id: '9',
    images: [
      '/images/projects/patentes-1.png',
      '/images/projects/patentes-2.png',
      '/images/projects/patentes-3.png'
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
    images: [
      '/images/projects/chatbot-1.png',
      '/images/projects/chatbot-2.png'
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
    images: [
      '/images/projects/curvas-1.png',
      '/images/projects/curvas-2.png',
      '/images/projects/curvas-3.png',
      '/images/projects/curvas-4.png'
    ],
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS', 'L-systems', 'Fractal Geometry'],
    category: 'frontend',
    repository: 'https://github.com/ilugr/FTI_Curvas',
    featured: false,
    year: 2024,
    status: 'completed'
  }
];

/**
 * Hook personalizado para obtener datos de proyectos internacionalizados
 */
export const useProjects = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as 'es' | 'en';

  // Combinar datos base con traducciones
  const projects: Project[] = baseProjects.map((baseProject) => {
    const translations = (projectsTranslations as any)[currentLanguage][baseProject.id];
    return {
      ...baseProject,
      title: translations.title,
      description: translations.description,
      longDescription: translations.longDescription
    };
  });

  // Obtener categorías traducidas
  const projectCategories = projectCategoriesTranslations[currentLanguage];

  // Obtener tecnologías traducidas
  const technologies = technologiesTranslations[currentLanguage];

  return {
    projects,
    projectCategories,
    technologies
  };
};

export default useProjects;