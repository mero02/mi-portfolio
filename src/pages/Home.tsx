import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Briefcase, Code, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex flex-col items-center text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.h1
          className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
            theme === 'dark' ? 'from-red-500 to-red-700' : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mauro G. San Pedro
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-900 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Analista de Sistemas | Desarrollador Full Stack
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/projects">
            <button className={`px-8 py-3 ${
              theme === 'dark' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white rounded-lg transition-colors`}>
              Ver Proyectos
            </button>
          </Link>
          <Link to="/contact">
            <button className={`px-8 py-3 border ${
              theme === 'dark' ? 'border-red-600 text-red-400 hover:bg-red-600 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            } rounded-lg transition-colors`}>
              Contactar
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-900 dark:text-gray-500 leading-relaxed">
            Trabajo con FastAPI, Flask, React y bases de datos relacionales.
            Tengo experiencia en proyectos académicos, investigación aplicada y desarrollo personal.
            Actualmente curso la Licenciatura en Sistemas Informáticos y busco oportunidades
            para crecer en proyectos de software con impacto real.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${
              theme === 'dark' ? 'bg-red-900/20' : 'bg-blue-100'
            }`}>
              <Calendar className={`w-8 h-8 ${
                theme === 'dark' ? 'text-red-400' : 'text-blue-600'
              }`} />
            </div>
            <div className="text-2xl font-bold mb-1">4+</div>
            <div className="text-sm text-gray-700 dark:text-gray-400">Años de Experiencia</div>
          </div>

          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${
              theme === 'dark' ? 'bg-red-900/20' : 'bg-blue-100'
            }`}>
              <Briefcase className={`w-8 h-8 ${
                theme === 'dark' ? 'text-red-400' : 'text-blue-600'
              }`} />
            </div>
            <div className="text-2xl font-bold mb-1">6</div>
            <div className="text-sm text-gray-700 dark:text-gray-400">Proyectos Completados</div>
          </div>

          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${
              theme === 'dark' ? 'bg-red-900/20' : 'bg-blue-100'
            }`}>
              <Code className={`w-8 h-8 ${
                theme === 'dark' ? 'text-red-400' : 'text-blue-600'
              }`} />
            </div>
            <div className="text-2xl font-bold mb-1">15+</div>
            <div className="text-sm text-gray-700 dark:text-gray-400">Tecnologías</div>
          </div>

          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 ${
              theme === 'dark' ? 'bg-red-900/20' : 'bg-blue-100'
            }`}>
              <Award className={`w-8 h-8 ${
                theme === 'dark' ? 'text-red-400' : 'text-blue-600'
              }`} />
            </div>
            <div className="text-2xl font-bold mb-1">1</div>
            <div className="text-sm text-gray-700 dark:text-gray-400">Beca de Investigación</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>

      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
          theme === 'dark' ? 'bg-red-500' : 'bg-blue-500'
        } animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-red-400' : 'bg-blue-400'
        } animate-pulse animation-delay-2000`}></div>
      </div>
    </section>
  );
};

export default Home;