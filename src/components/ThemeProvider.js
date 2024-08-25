import React, { useState, createContext, useContext, useEffect } from 'react';
import './theme.css'; // Import your CSS variables

export const ThemeContext = createContext(); // Export ThemeContext

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark' // Load theme from localStorage
  );

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Apply the theme when the component mounts
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
