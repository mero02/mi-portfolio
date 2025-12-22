import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, MapPin, Code, Briefcase, Download } from 'lucide-react';
import { trackCVDownload } from '../utils/analytics';
import SEO from '../components/SEO';
import { useExperiences } from '../hooks/useExperiences';

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const CV_URL = "https://drive.google.com/uc?export=download&id=1avMF_FinV5zZBtuxSKGSQ7hG1izu-Axb";
  
  const experiences = useExperiences();

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault(); 
    trackCVDownload();
    window.open(CV_URL, '_blank');
  }; 

  return (
    <>
      <SEO page="about" />
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-900 dark:text-gray-500 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={CV_URL}
              download="Mauro-G-San-Pedro_CV.pdf"
              onClick={handleDownloadCV}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-3 px-6 py-3 rounded-lg font-medium 
                transition-all duration-300 transform hover:scale-105
                ${theme === 'dark' 
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                }
              `}
            >
              <Download size={20} />
              {t('about.downloadCV')}
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {t('aboutPage.cvInfo')}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`p-8 rounded-lg shadow-lg ${
                theme === 'dark'
                  ? 'bg-red-900/10 border border-red-800/30'
                  : 'bg-blue-50/60 border border-blue-200/40'
              }`}>
                <div className="flex items-center mb-4">
                  <MapPin className={`w-6 h-6 mr-2 ${
                    theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                  }`} />
                  <span className="text-gray-900 dark:text-gray-500">{t('aboutPage.location')}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Code className={`w-6 h-6 mr-2 ${
                    theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                  }`} />
                  <span className="text-gray-900 dark:text-gray-500">{t('aboutPage.experience')}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className={`w-6 h-6 mr-2 ${
                    theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                  }`} />
                  <span className="text-gray-900 dark:text-gray-500">{t('aboutPage.role')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-gray-900 dark:text-gray-500">
                {t('about.description')}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.experienceTitle')}</h2>
            <div className="relative">
              <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                theme === 'dark' ? 'bg-red-600' : 'bg-blue-600'
              }`}></div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start mb-8 ml-8"
                >
                  <div className={`absolute -left-12 w-6 h-6 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-red-600' : 'bg-blue-600'
                  }`}>
                    <Calendar className="w-3 h-3 text-white" />
                  </div>
                  <div className={`p-6 rounded-lg shadow-lg flex-1 ml-4 ${
                    theme === 'dark'
                      ? 'bg-red-900/5 border border-red-800/20'
                      : 'bg-blue-50/40 border border-blue-200/30'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                      }`}>{exp.year}</span>
                    </div>
                    <p className="text-gray-900 dark:text-gray-500 mb-2">{exp.company}</p>
                    <p className="text-gray-700 dark:text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;