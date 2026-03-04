import { useTheme } from '../../contexts/ThemeContext';
import './DarkModeToggle.css';

function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark-mode-toggle"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default DarkModeToggle;
