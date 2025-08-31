import ThemeSwitcher from "./Switch.jsx";

export default function ThemeToggleCard() {
  return (
    <div className="max-w-6xl mx-auto p-0 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200/80 dark:border-zinc-700/50 transition-all duration-500 flex flex-col md:flex-row overflow-hidden group">
      
      {/* Левая часть — текст */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center space-y-4 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800">
        <span className="text-sm font-medium text-pink-500 dark:text-pink-400">
          Персонализация
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
          Выберите свой стиль
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Наше приложение адаптируется под ваши предпочтения. Переключайтесь между светлой и тёмной темой одним касанием — 
          сохраняйте зрение ночью и наслаждайтесь яркими красками днём.
        </p>
        
        <div className="mt-4 flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Автоматическое определение темы</span>
        </div>
        
        <div className="mt-2 flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Запоминание выбора</span>
        </div>
      </div>

      {/* Правая часть — интерактивный переключатель */}
      <div className="relative w-full pt-25 md:w-2/5 min-h-[280px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 dark:from-zinc-800 dark:to-zinc-700 transition-all duration-700 overflow-hidden">
        
        {/* Декоративные элементы */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-200 dark:bg-indigo-900 blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-amber-300 dark:bg-purple-900 blur-xl"></div>
        </div>
        
        {/* Фоновые иконки */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20">
          <svg className="w-48 h-48 text-amber-400 dark:text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Переключатель с анимацией */}
        <div className="relative z-10 p-6 bg-white/30 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-zinc-600/30 shadow-sm group-hover:shadow-md transition-shadow duration-500">
          <ThemeSwitcher />
          <div className="mt-3 text-center text-xs text-amber-800/80 dark:text-indigo-200/80 font-medium">
            {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Тёмный режим' : 'Светлый режим'}
          </div>
        </div>
      </div>
    </div>
  );
}