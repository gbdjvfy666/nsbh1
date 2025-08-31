import React, { useEffect, useRef, useState } from 'react';

const RollingText = () => {
  const textRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const innerText = element.textContent;
    element.innerHTML = '';

    const createTextBlock = () => {
      const textContainer = document.createElement('div');
      textContainer.className = 'block';

      for (let letter of innerText) {
        const span = document.createElement('span');
        span.textContent = letter.trim() === '' ? '\xa0' : letter;
        span.className = 'letter';
        textContainer.appendChild(span);
      }

      return textContainer;
    };

    const block1 = createTextBlock();
    const block2 = createTextBlock();
    
    element.appendChild(block1);
    element.appendChild(block2);

    // Демонстрационная анимация при первой загрузке
    setTimeout(() => {
      element.classList.add('play');
      setTimeout(() => element.classList.remove('play'), 1000);
    }, 600);
  }, []);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    if (isHovering) {
      element.classList.add('play');
    } else {
      // Сбрасываем анимацию, удаляя и снова добавляя классы
      element.classList.remove('play');
      void element.offsetWidth; // Триггер reflow
      element.classList.add('reset-animation');
      setTimeout(() => element.classList.remove('reset-animation'), 10);
    }
  }, [isHovering]);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
      
      <div className="w-full h-full bg-[#f5f6f3] flex flex-col items-center justify-center">
        <a 
          ref={textRef}
          href="#" 
          className="rolling-text inline-block font-['Playfair_Display'] text-[48px] leading-[72px] tracking-[24px] h-[72px] text-[#1a1a1a] no-underline overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          ROLLING TEXT.
        </a>
        
        <style>
          {`
            .rolling-text.play .letter {
              transform: translateY(-100%);
            }
            
            .rolling-text.reset-animation .letter {
              transition: none !important;
              transform: translateY(0) !important;
            }
            
            .rolling-text .block:last-child {
              color: #d3a13b;
            }
            
            .rolling-text .letter {
              display: inline-block;
              transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
              transform: translateY(0);
            }
            
            /* Анимационные задержки для каждой буквы */
            .rolling-text .letter:nth-child(1) { transition-delay: 0.015s; }
            .rolling-text .letter:nth-child(2) { transition-delay: 0.03s; }
            .rolling-text .letter:nth-child(3) { transition-delay: 0.045s; }
            .rolling-text .letter:nth-child(4) { transition-delay: 0.06s; }
            .rolling-text .letter:nth-child(5) { transition-delay: 0.075s; }
            .rolling-text .letter:nth-child(6) { transition-delay: 0.09s; }
            .rolling-text .letter:nth-child(7) { transition-delay: 0.105s; }
            .rolling-text .letter:nth-child(8) { transition-delay: 0.12s; }
            .rolling-text .letter:nth-child(9) { transition-delay: 0.135s; }
            .rolling-text .letter:nth-child(10) { transition-delay: 0.15s; }
            .rolling-text .letter:nth-child(11) { transition-delay: 0.165s; }
          `}
        </style>
      </div>
    </>
  );
};

export default RollingText;