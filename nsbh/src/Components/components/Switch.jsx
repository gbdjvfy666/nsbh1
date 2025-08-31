import React from 'react';
import { applyTheme } from '../other/theme';

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = React.useState(() => localStorage.getItem('theme') || 'system');

  React.useEffect(() => {
    // При монтировании компонента сразу применяем сохранённую тему
    applyTheme(selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);  // вызываем с параметром, чтобы применить выбранную тему
  };

  const themeIndex = {
    system: 0,
    light: 1,
    dark: 2,
  }[selectedTheme];

  return (
    <div className="relative inline-grid grid-cols-3 rounded-full bg-gray-950/20 p-0.5 text-gray-950 dark:bg-white/20 dark:text-white" style={{ width: '96px', height: '32px' }}>

      {/* Индикатор активной темы */}
      <div
        className="absolute top-0 left-0 z-0 w-1/3 h-full transition-transform duration-300 flex items-center justify-center"
        style={{ transform: `translateX(${themeIndex * 100}%)` }}
      >
        <div className="w-8 h-8 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/60 dark:border-black/60 shadow-inner shadow-white/30 dark:shadow-black/40 pointer-events-none" />
      </div>



      {/* Кнопки */}
      <button
        onClick={() => handleThemeChange('system')}
        className="z-10 rounded-full flex items-center justify-center cursor-pointer"
        aria-label="System theme"
        aria-checked={selectedTheme === 'system'}
        role="radio"
        style={{ marginLeft: '-3px' }}
      >
        <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
          <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor" />
          <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={() => handleThemeChange('light')}
        className="z-10 rounded-full flex items-center justify-center cursor-pointer"
        aria-label="Light theme"
        aria-checked={selectedTheme === 'light'}
        role="radio"
      >
        <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
          <circle cx="14" cy="14" r="3.5" stroke="currentColor" />
          <path d="M14 8.5V6.5" stroke="currentColor" strokeLinecap="round" />
          <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" strokeLinecap="round" />
          <path d="M19.5 14L21.5 14" stroke="currentColor" strokeLinecap="round" />
          <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" strokeLinecap="round" />
          <path d="M14 21.5V19.5" stroke="currentColor" strokeLinecap="round" />
          <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" strokeLinecap="round" />
          <path d="M6.5 14L8.5 14" stroke="currentColor" strokeLinecap="round" />
          <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={() => handleThemeChange('dark')}
        className="z-10 rounded-full flex items-center justify-center cursor-pointer"
        aria-label="Dark theme"
        aria-checked={selectedTheme === 'dark'}
        role="radio"
        style={{ marginLeft: '3px' }}
      >
        <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
          <path d="M10.5 10C10.5 14.14 13.86 17.5 18 17.5C19.03 17.5 20.02 17.29 20.91 16.91C19.78 19.61 17.11 21.5 14 21.5C9.86 21.5 6.5 18.14 6.5 14C6.5 10.89 8.39 8.22 11.09 7.09C10.71 7.98 10.5 8.97 10.5 10Z" stroke="currentColor" strokeLinejoin="round" />
          <path d="M16.36 6.51L16.5 5.5L16.64 6.51C16.71 6.95 17.05 7.29 17.49 7.36L18.5 7.5L17.49 7.64C17.05 7.71 16.71 8.05 16.64 8.49L16.5 9.5L16.36 8.49C16.29 8.05 15.95 7.71 15.51 7.64L14.5 7.5L15.51 7.36C15.95 7.29 16.29 6.95 16.36 6.51Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.36 11.51L20.5 10.5L20.64 11.51C20.71 11.95 21.05 12.29 21.49 12.36L22.5 12.5L21.49 12.64C21.05 12.71 20.71 13.05 20.64 13.49L20.5 14.5L20.36 13.49C20.29 13.05 19.95 12.71 19.51 12.64L18.5 12.5L19.51 12.36C19.95 12.29 20.29 11.95 20.36 11.51Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};
export default ThemeSwitcher;