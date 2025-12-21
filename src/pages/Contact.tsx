import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const schema = yup.object().shape({
    name: yup.string().required('El nombre es requerido'),
    email: yup.string().email('Email inválido').required('El email es requerido'),
    subject: yup.string().required('El asunto es requerido'),
    message: yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres').required('El mensaje es requerido')
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    // Aquí iría la lógica para enviar el email
    alert('Mensaje enviado exitosamente!');
    reset();
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className={`w-6 h-6 mr-4 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">mero2sp@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className={`w-6 h-6 mr-4 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-300">+5492804645445</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className={`w-6 h-6 mr-4 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-300">Argentina, Chubut</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  {...register('name')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <input
                  {...register('subject')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="Asunto del mensaje"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all resize-none ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="Tu mensaje..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center ${
                  theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;