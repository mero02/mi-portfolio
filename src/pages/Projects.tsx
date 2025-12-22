import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { projects, projectCategories, technologies } from '../data/projects';
import { Project } from '../types';
import ProjectCard from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';
import { Filter } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const uniqueStatuses = useMemo(() => {
    const statuses = Array.from(new Set(projects.map(p => p.status)));
    return statuses;
  }, []);

  const uniqueYears = useMemo(() => {
    const years = Array.from(new Set(projects.map(p => p.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a));
    return years;
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTechnologies = selectedTechnologies.length === 0 ||
                                  selectedTechnologies.every(tech => project.technologies.includes(tech));
      const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
      const matchesYear = selectedYear === 'all' || project.year.toString() === selectedYear;
      return matchesCategory && matchesSearch && matchesTechnologies && matchesStatus && matchesYear;
    });
  }, [selectedCategory, searchTerm, selectedTechnologies, selectedStatus, selectedYear]);

  const getStatusText = (status: string) => {
    return t(`projects.filters.statusOptions.${status}`);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('projects.title')}</h1>
          <p className="text-xl text-gray-900 dark:text-gray-500 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder={t('projects.filters.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-3 pl-12 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'border-red-600/50 bg-red-800/50 hover:bg-red-700/50 focus:ring-red-500 focus:border-red-500'
                    : 'border-blue-300/50 bg-white hover:bg-blue-50/30 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                theme === 'dark' ? 'text-red-400' : 'text-blue-500'
              }`}>
                
              </div>
            </div>

            {/* Filter toggle for mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`md:hidden flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-red-900/20 border border-red-800/50 text-red-400'
                  : 'bg-blue-100 border border-blue-200 text-blue-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              {t('projects.filters.filters')}
            </button>
          </div>

          {/* Category filters */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 justify-center">
                  {projectCategories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.value
                          ? theme === 'dark'
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'bg-blue-600 text-white shadow-lg'
                          : theme === 'dark'
                            ? 'bg-red-900/20 border border-red-800/50 text-red-300 hover:bg-red-900/30'
                            : 'bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Advanced filters */}
                <div className={`mt-6 p-4 rounded-lg border ${
                  theme === 'dark'
                    ? 'border-red-800/30 bg-red-900/5'
                    : 'border-blue-200/30 bg-blue-50/30'
                }`}>
                  <h3 className="text-lg font-semibold mb-4">{t('projects.filters.advancedFilters')}</h3>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">{t('projects.filters.technologies')}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {technologies.slice(0, 10).map((tech) => (
                          <label key={tech} className="flex items-center gap-2 cursor-pointer text-sm">
                            <input
                              type="checkbox"
                              checked={selectedTechnologies.includes(tech)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedTechnologies([...selectedTechnologies, tech]);
                                } else {
                                  setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
                                }
                              }}
                              className={`rounded border-gray-300 ${
                                theme === 'dark' ? 'bg-red-800/50 border-red-600/50' : ''
                              }`}
                            />
                            <span>{tech}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Status and Year */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">{t('projects.filters.status')}</label>
                        <select
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border text-sm ${
                            theme === 'dark'
                              ? 'border-red-600/50 bg-red-800/50 text-gray-200'
                              : 'border-blue-300/50 bg-white'
                          }`}
                        >
                          <option value="all">{t('projects.filters.all')}</option>
                          {uniqueStatuses.map((status) => (
                            <option key={status} value={status}>
                              {getStatusText(status)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">{t('projects.filters.year')}</label>
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border text-sm ${
                            theme === 'dark'
                              ? 'border-red-600/50 bg-red-800/50 text-gray-200'
                              : 'border-blue-300/50 bg-white'
                          }`}
                        >
                          <option value="all">{t('projects.filters.all')}</option>
                          {uniqueYears.map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Reset button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setSelectedTechnologies([]);
                          setSelectedStatus('all');
                          setSelectedYear('all');
                          setSearchTerm('');
                        }}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                          theme === 'dark'
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        {t('projects.filters.clearFilters')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 text-center"
        >
          <p className="text-gray-900 dark:text-gray-500">
            {t('projects.filters.results', { count: filteredProjects.length })}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${selectedTechnologies.join(',')}-${selectedStatus}-${selectedYear}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">{t('projects.filters.noResults')}</h3>
            <p className="text-gray-900 dark:text-gray-500">
              {t('projects.filters.tryAdjusting')}
            </p>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      </div>
    </section>
  );
};

export default Projects;