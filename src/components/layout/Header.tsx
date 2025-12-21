import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 shadow-lg backdrop-blur-md ${
      theme === 'dark'
        ? 'bg-red-950/20 border-b border-red-800/50'
        : 'bg-white/95 border-b border-blue-200/30'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link
            to="/"
            className={`text-xl font-bold transition-colors ${
              theme === 'dark' ? 'text-red-400 hover:text-red-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            <span className={theme === 'dark' ? 'text-red-400' : 'text-blue-600'}>M</span>
            <span className={theme === 'dark' ? 'text-red-300' : 'text-blue-500'}>S</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? theme === 'dark'
                        ? 'text-red-400 bg-red-900/20'
                        : 'text-blue-600 bg-blue-50'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      theme === 'dark' ? 'bg-red-400' : 'bg-blue-600'
                    }`} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className={`hidden sm:flex rounded-lg p-1 ${
              theme === 'dark'
                ? 'bg-red-900/20 border border-red-800/30'
                : 'bg-blue-100/80 border border-blue-200/40'
            }`}>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'es'
                    ? theme === 'dark'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? theme === 'dark'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:bg-red-900/20 hover:text-red-400'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? theme === 'dark'
                          ? 'text-red-400 bg-red-900/20'
                          : 'text-blue-600 bg-blue-50'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-red-400 hover:bg-red-900/10'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Language Switcher */}
            <div className="mt-4 sm:hidden">
              <div className={`flex rounded-lg p-1 ${
                theme === 'dark'
                  ? 'bg-red-900/20 border border-red-800/30'
                  : 'bg-blue-100/80 border border-blue-200/40'
              }`}>
                <button
                  onClick={() => changeLanguage('es')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    language === 'es'
                      ? theme === 'dark'
                        ? 'bg-red-600 text-white'
                        : 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    language === 'en'
                      ? theme === 'dark'
                        ? 'bg-red-600 text-white'
                        : 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;