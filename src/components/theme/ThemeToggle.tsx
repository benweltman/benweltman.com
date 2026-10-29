import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg flex items-center justify-center transition-all cursor-pointer group"
      aria-label="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined block leading-none group-hover:text-primary transition-colors">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
