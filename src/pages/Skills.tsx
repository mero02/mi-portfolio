import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  Code2,
  Database,
  Globe,
  Server,
  Palette,
  GitBranch,
  Zap
} from 'lucide-react';
import SEO from '../components/SEO';

const Skills = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: t('skills.categories.backend'),
      icon: Server,
      skills: [
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 70 }
      ]
    },
    {
      title: t('skills.categories.frontend'),
      icon: Globe,
      skills: [
        { name: 'React', level: 80 },
        { name: 'Chakra UI', level: 75 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Bootstrap', level: 75 }
      ]
    },
    {
      title: t('skills.categories.databases'),
      icon: Database,
      skills: [
        { name: 'SQLite', level: 80 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'GitLab', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Google Colab', level: 75 },
        { name: 'Jupyter Notebook', level: 75 }
      ]
    }
  ];

  const competencies = [
    { icon: Code2, label: t('skills.competencies.requirementsAnalysis') },
    { icon: Database, label: t('skills.competencies.apiDesign') },
    { icon: Palette, label: t('skills.competencies.problemSolving') },
    { icon: Zap, label: t('skills.competencies.teamwork') }
  ];

  return (
    <>
      <SEO page="skills" />
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('skills.title')}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {t('skills.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                  category.title === t('skills.categories.frontend')
                    ? theme === 'dark'
                      ? 'bg-red-900/20 border border-red-800/50'
                      : 'bg-blue-50/80 border border-blue-200/50'
                    : category.title === t('skills.categories.backend')
                    ? theme === 'dark'
                      ? 'bg-red-800/20 border border-red-700/50'
                      : 'bg-green-50/80 border border-green-200/50'
                    : category.title === t('skills.categories.databases')
                    ? theme === 'dark'
                      ? 'bg-red-700/20 border border-red-600/50'
                      : 'bg-purple-50/80 border border-purple-200/50'
                    : theme === 'dark'
                    ? 'bg-red-600/20 border border-red-500/50'
                    : 'bg-yellow-50/80 border border-yellow-200/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <category.icon className={`w-8 h-8 mr-3 ${
                    theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                  }`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${
                            theme === 'dark' ? 'bg-red-600' : 'bg-blue-600'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {competencies.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    theme === 'dark' ? 'bg-red-900' : 'bg-blue-100 dark:bg-blue-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 mr-2 ${
                    theme === 'dark' ? 'text-red-400' : 'text-blue-600'
                  }`} />
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-red-300' : 'text-white'
                  }`}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;