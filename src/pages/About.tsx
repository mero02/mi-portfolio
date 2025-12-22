import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, MapPin, Code, Briefcase } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const experiences = [
    {
      year: '2025',
      title: 'Taller experimental sobre herramientas de desarrollo frontend',
      company: 'Universidad Nacional de la Patagonia San Juan Bosco',
      description: 'Participé en un taller experimental probando una herramienta de desarrollo frontend construida por profesores universitarios, proporcionando feedback sobre la experiencia de uso.'
    },
    {
      year: '2025',
      title: 'Becario en Investigación y Desarrollo',
      company: 'Universidad Nacional de la Patagonia San Juan Bosco',
      description: 'Participé en proyectos de inteligencia artificial y análisis de datos en colaboración con el Banco del Chubut. Trabajé en entrenamiento y evaluación de modelos de lenguaje (LLM), segmentación y procesamiento de documentos, automatización de pruebas y desarrollo de herramientas en Google Colab.'
    },
    {
      year: '2025',
      title: 'Consultor en Tecnología y Soporte IT',
      company: 'Palacio Municipal de Gaiman',
      description: 'Brindé asesoramiento y soporte técnico a empleados en el uso de sistemas y equipos informáticos. Diagnóstico y resolución de problemas en hardware y software, mantenimiento preventivo y correctivo.'
    },
    {
      year: '2012-2023',
      title: 'Empleado de Comercio',
      company: 'S.A.I.E.P',
      description: 'Desempeñé funciones operativas y de atención al cliente en un entorno comercial de alta demanda, gestionando resolución de incidencias y situaciones imprevistas.'
    }
  ];

  return (
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
                <span className="text-gray-900 dark:text-gray-500">Argentina, Chubut</span>
              </div>
              <div className="flex items-center mb-4">
                <Code className={`w-6 h-6 mr-2 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <span className="text-gray-900 dark:text-gray-500">4+ años de experiencia</span>
              </div>
              <div className="flex items-center">
                <Briefcase className={`w-6 h-6 mr-2 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <span className="text-gray-900 dark:text-gray-500">Analista de Sistemas</span>
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
              Trabajo con FastAPI, Flask, React y bases de datos relacionales.
              Tengo experiencia en proyectos académicos, investigación aplicada y desarrollo personal.
            </p>
            <p className="text-gray-900 dark:text-gray-500">
              Actualmente curso la Licenciatura en Sistemas Informáticos y busco oportunidades
              para crecer en proyectos de software con impacto real.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
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
  );
};

export default About;