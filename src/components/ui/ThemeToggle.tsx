import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-3 py-1 rounded transition-colors ${
        theme === 'dark'
          ? 'bg-dark-accent text-white'
          : 'bg-light-accent text-white'
      }`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;