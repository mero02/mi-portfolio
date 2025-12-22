import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Project } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { X, ExternalLink, Github, Calendar, Star, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { theme } = useTheme();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPan, setLastPan] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setZoom(1); // Reset zoom when modal opens
      setPan({ x: 0, y: 0 });
      setLastPan({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

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
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En progreso';
      case 'planned':
        return 'Planificado';
      default:
        return status;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className={`w-full h-full rounded-lg shadow-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-black/90 border border-red-800/30' : 'bg-white'
            }`}>
              {/* Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                theme === 'dark' ? 'border-red-800/30' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  {project.featured && (
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      <Star className="w-3 h-3" />
                      Destacado
                    </div>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-full transition-colors ${
                    theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row h-[calc(100%-80px)]">
                {/* Image Carousel */}
                <div className="lg:w-1/2 p-6">
                  <div className="relative h-64 md:h-80 lg:h-full rounded-lg overflow-hidden">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                      }}
                      pagination={{ clickable: true }}
                      className="h-full"
                      onSlideChange={() => {
                        setZoom(1);
                        setPan({ x: 0, y: 0 });
                        setLastPan({ x: 0, y: 0 });
                      }}
                    >
                      {project.images.map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className={`relative overflow-hidden ${
                            theme === 'dark' ? 'bg-black/90' : 'bg-white'
                          }`}
                          onMouseDown={(e) => {
                            if (zoom > 1) {
                              setIsDragging(true);
                              setLastPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
                            }
                          }}
                          onMouseMove={(e) => {
                            if (isDragging && zoom > 1) {
                              setPan({
                                x: e.clientX - lastPan.x,
                                y: e.clientY - lastPan.y
                              });
                            }
                          }}
                          onMouseUp={() => setIsDragging(false)}
                          onMouseLeave={() => setIsDragging(false)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} - ${index + 1}`}
                            className="absolute top-1/2 left-1/2 max-w-full max-h-full object-contain select-none"
                            style={{
                              transform: `translate(-50%, -50%) translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                              transition: isDragging ? 'none' : 'transform 0.2s'
                            }}
                            draggable={false}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom navigation buttons */}
                    <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Zoom controls */}
                    <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                      <button
                        onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        disabled={zoom <= 0.5}
                      >
                        <ZoomOut className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setZoom(Math.min(3, zoom + 0.25))}
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        disabled={zoom >= 3}
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-6 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Status and Year */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {getStatusText(project.status)}
                      </span>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                      <p className="text-gray-900 dark:text-gray-500 leading-relaxed">
                        {project.longDescription || project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tecnologías</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-sm rounded-full ${
                              theme === 'dark'
                                ? 'bg-red-900/30 text-red-300 border border-red-800/50'
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {(project.repository || project.demo) && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Enlaces</h3>
                        <div className="flex gap-4">
                          {project.repository && (
                            <a
                              href={project.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                theme === 'dark'
                                  ? 'bg-red-900/20 border border-red-800/50 text-red-400 hover:bg-red-900/30'
                                  : 'bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100'
                              }`}
                            >
                              <Github className="w-4 h-4" />
                              Código
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                theme === 'dark'
                                  ? 'bg-red-900/20 border border-red-800/50 text-red-400 hover:bg-red-900/30'
                                  : 'bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100'
                              }`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;