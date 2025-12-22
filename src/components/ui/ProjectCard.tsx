import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Project } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = memo(({ project, onClick }: ProjectCardProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return theme === 'dark' ? 'text-green-400' : 'text-green-600';
      case 'in-progress':
        return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
      case 'planned':
        return theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
      default:
        return theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
    }
  };

  const getStatusText = (status: Project['status']) => {
    return t(`projects.filters.statusOptions.${status}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        theme === 'dark'
          ? 'bg-red-900/10 border border-red-800/30 hover:bg-red-900/20'
          : 'bg-blue-50/60 border border-blue-200/40 hover:bg-blue-100/80'
      }`}
      onClick={onClick}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
        }`}>
          <Star className="w-3 h-3" />
          {t('projects.ui.featured')}
        </div>
      )}

      {/* Image */}
      <div className={`relative h-48 overflow-hidden group/image ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <img
          src={project.images[0] || '/images/placeholder.jpg'}
          alt={project.title}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain transition-transform duration-300 group-hover/image:scale-105"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          theme === 'dark' ? 'from-black/60' : 'from-black/40'
        } to-transparent transition-opacity duration-300 group-hover/image:opacity-75`} />
        {/* Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark'
                  ? 'bg-red-900/30 text-red-300 border border-red-800/50'
                  : 'bg-blue-100 text-blue-700 border border-blue-200'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={`px-2 py-1 text-xs rounded-full ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300'
                : 'bg-gray-200 text-gray-600'
            }`}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {project.year}
          </div>

          <div className="flex gap-2">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                title={t('projects.ui.repository')}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-red-900/30 text-red-400'
                    : 'hover:bg-blue-100 text-blue-600'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                title={t('projects.ui.demo')}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-red-900/30 text-red-400'
                    : 'hover:bg-blue-100 text-blue-600'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;