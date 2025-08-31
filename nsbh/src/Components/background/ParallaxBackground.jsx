import React, { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    let lFollowX = 0;
    let lFollowY = 0;
    let x = 0;
    let y = 0;
    const friction = 1 / 30;

    const moveBackground = () => {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
      
      const translate = `translate(${x}px, ${y}px) scale(1.1)`;
      
      if (bgRef.current) {
        bgRef.current.style.transform = translate;
      }

      requestAnimationFrame(moveBackground);
    };

    const handleMouseMove = (e) => {
      const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
      const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100;
      lFollowY = (10 * lMouseY) / 100;
    };

    // Запускаем анимацию
    moveBackground();

    // Добавляем обработчики событий
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseMove);

    // Очистка
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden p-5">
    
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/167792/mountains_copy.jpg')] bg-center bg-cover bg-no-repeat scale-110"
      />
      
      {/* Текст */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7vmin text-center uppercase font-[Libre+Baskerville] m-0 p-0">
        Take a look around
      </h1>
    </div>
  );
};

export default ParallaxBackground;