import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mbldolvb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000); // Ocultar mensaje después de 5 segundos
      } else {
        alert('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      alert('Error al enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="text-xl text-gray-700 dark:text-gray-300">
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
                  <p className="text-gray-700 dark:text-gray-300">mero2sp@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className={`w-6 h-6 mr-4 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-700 dark:text-gray-300">+5492804645445</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className={`w-6 h-6 mr-4 ${
                  theme === 'dark' ? 'text-red-500' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-gray-700 dark:text-gray-300">Argentina, Chubut</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all resize-none ${
                    theme === 'dark'
                      ? 'border-red-600/50 focus:ring-red-500 bg-gray-800/50 hover:bg-gray-700/50'
                      : 'border-blue-300/50 focus:ring-blue-500 bg-white hover:bg-blue-50/30'
                  }`}
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === 'dark' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-green-900/20 border border-green-800' : 'bg-green-100 border border-green-200'
                  }`}
                >
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-green-300' : 'text-green-700'
                  }`}>
                    ¡Gracias por tu mensaje! Te responderé lo antes posible.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;