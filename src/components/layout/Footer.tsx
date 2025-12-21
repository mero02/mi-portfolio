import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className={`py-8 transition-colors ${
      theme === 'dark' ? 'bg-red-950/20 border-t border-red-800/50' : 'bg-gray-100 border-t border-blue-200/30'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* Email */}
            <a
              href="mailto:mero2sp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-red-900/20 text-red-400 hover:bg-red-900/30 hover:scale-110'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-110'
              }`}
              aria-label="Enviar correo"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mauro-san-pedro/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-red-900/20 text-red-400 hover:bg-red-900/30 hover:scale-110'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-110'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mero02"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-red-900/20 text-red-400 hover:bg-red-900/30 hover:scale-110'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-110'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className={`text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <p className="text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;