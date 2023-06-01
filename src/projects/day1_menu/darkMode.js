import React, { useState, useEffect } from 'react';




const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };


const DarkMode = () => {
    const [theme, setTheme] = useState(getStorageTheme());

    


  const toggleTheme = () => {
      if (theme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
    };


  useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
      }, [theme]);

  return (
    <button className="mode-btn" onClick={toggleTheme}></button>
  )
}

export default DarkMode