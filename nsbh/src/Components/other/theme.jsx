// src/theme.jsx
export const applyTheme = () => {
  const theme = localStorage.getItem('theme');
  const html = document.documentElement;

  if (theme === 'light' || theme === 'dark') {
    html.setAttribute('data-theme', theme);
  } else {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }
};

// При необходимости — слушаем изменения системной темы
export const watchSystemTheme = () => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('theme') === null) {
      applyTheme();
    }
  });
};
