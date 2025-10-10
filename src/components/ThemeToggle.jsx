import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg ${
        isDark 
          ? 'bg-neutral-900 hover:bg-neutral-800' 
          : 'bg-neutral-200 hover:bg-neutral-300'
      } transition-colors`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;