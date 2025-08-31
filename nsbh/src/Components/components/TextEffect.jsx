import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Подключаем шрифт через CSS-in-JS
const fontStyles = `
  @font-face {
    font-family: 'MullerNextWide';
    src: url('/fonts/MullerNextWideTrial-Heavy.otf') format('opentype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
`;

// Регистрируем плагин GSAP
gsap.registerPlugin(ScrollTrigger);

const TextEffect = () => {
  useEffect(() => {
    // Добавляем стили шрифта в head документа
    const style = document.createElement('style');
    style.innerHTML = fontStyles;
    document.head.appendChild(style);

    // Инициализация GSAP анимаций
    const textElements = document.querySelectorAll('.text-effect');
    
    textElements.forEach(text => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });

    // Удаляем стили при размонтировании
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[#0D0D0D] p-[10%] font-muller">
      <style>{`
        :root {
          --font-muller: 'MullerNextWide', sans-serif;
        }
        .font-muller {
          font-family: var(--font-muller);
        }
      `}</style>
      
      <div className="flex flex-col justify-center items-start min-h-[200vh]">
        {/* Элемент 1 */}
        <h1 className="text-effect relative w-full text-[10vw] leading-none tracking-tight
                      text-[rgba(182,182,182,0.2)] bg-gradient-to-r from-[#b6b6b6] to-[#b6b6b6] 
                      bg-no-repeat bg-clip-text bg-[length:0%] transition-all duration-500 
                      [transition-timing-function:cubic-bezier(0.1,0.5,0.5,1)] border-b 
                      border-[#2F2B28] py-4 group">
          ТАРГЕТ
          <span className="absolute inset-0 w-full h-full bg-[#4246ce] text-[#0D0D0D] 
                         flex items-center [clip-path:polygon(0_50%,100%_50%,100%_50%,0_50%)]
                         [transition:all_0.4s_cubic-bezier(0.1,0.5,0.5,1)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            ВК
          </span>
        </h1>

        {/* Элемент 2 */}
        <h1 className="text-effect relative w-full text-[10vw] leading-none tracking-tight 
                      text-[rgba(182,182,182,0.2)] bg-gradient-to-r from-[#b6b6b6] to-[#b6b6b6] 
                      bg-no-repeat bg-clip-text bg-[length:0%] transition-all duration-500 
                      [transition-timing-function:cubic-bezier(0.1,0.5,0.5,1)] border-b 
                      border-[#2F2B28] py-4 group">
          ДИЗАЙН
          <span className="absolute inset-0 w-full h-full bg-[#4246ce] text-[#0D0D0D] 
                         flex items-center [clip-path:polygon(0_50%,100%_50%,100%_50%,0_50%)]
                         [transition:all_0.4s_cubic-bezier(0.1,0.5,0.5,1)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            ВСЕГО
          </span>
        </h1>

        {/* Элемент 3 */}
        <h1 className="text-effect relative w-full text-[10vw] leading-none tracking-tight 
                      text-[rgba(182,182,182,0.2)] bg-gradient-to-r from-[#b6b6b6] to-[#b6b6b6] 
                      bg-no-repeat bg-clip-text bg-[length:0%] transition-all duration-500 
                      [transition-timing-function:cubic-bezier(0.1,0.5,0.5,1)] border-b 
                      border-[#2F2B28] py-4 group">
          СОЗДАНИЕ
          <span className="absolute inset-0 w-full h-full bg-[#4246ce] text-[#0D0D0D] 
                         flex items-center [clip-path:polygon(0_50%,100%_50%,100%_50%,0_50%)]
                         [transition:all_0.4s_cubic-bezier(0.1,0.5,0.5,1)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            САЙТОВ
          </span>
        </h1>

        {/* Элемент 4 */}
        <h1 className="text-effect relative w-full text-[10vw] leading-none tracking-tight 
                      text-[rgba(182,182,182,0.2)] bg-gradient-to-r from-[#b6b6b6] to-[#b6b6b6] 
                      bg-no-repeat bg-clip-text bg-[length:0%] transition-all duration-500 
                      [transition-timing-function:cubic-bezier(0.1,0.5,0.5,1)] border-b 
                      border-[#2F2B28] py-4 group">
          СТИЛЬ
          <span className="absolute inset-0 w-full h-full bg-[#4246ce] text-[#0D0D0D] 
                         flex items-center [clip-path:polygon(0_50%,100%_50%,100%_50%,0_50%)]
                         [transition:all_0.4s_cubic-bezier(0.1,0.5,0.5,1)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a href="https://stacksorted.com/text-effects/minh-pham" target="_blank" rel="noopener noreferrer" className="no-underline text-current">
              ЛЮБОЙ
            </a>
          </span>
        </h1>

        {/* Элемент 5 */}
        <h1 className="text-effect relative w-full text-[10vw] leading-none tracking-tight 
                      text-[rgba(182,182,182,0.2)] bg-gradient-to-r from-[#b6b6b6] to-[#b6b6b6] 
                      bg-no-repeat bg-clip-text bg-[length:0%] transition-all duration-500 
                      [transition-timing-function:cubic-bezier(0.1,0.5,0.5,1)] border-b 
                      border-[#2F2B28] py-4 group">
          НРАВИТСЯ?
          <span className="absolute inset-0 w-full h-full bg-[#4246ce] text-[#0D0D0D] 
                         flex items-center [clip-path:polygon(0_50%,100%_50%,100%_50%,0_50%)]
                         [transition:all_0.4s_cubic-bezier(0.1,0.5,0.5,1)] group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
            <a href="https://twitter.com/juxtopposed" target="_blank" rel="noopener noreferrer" className="no-underline text-current">
              ПИШИ
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TextEffect;