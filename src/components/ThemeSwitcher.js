import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'; // Import ThemeContext
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="theme-switcher">
      {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
    </div>
  );
};

export default ThemeSwitcher;
