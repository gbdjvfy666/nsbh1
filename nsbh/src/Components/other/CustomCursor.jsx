import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothedMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // Проверяем, какой элемент находится под курсором
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

      // Проверяем, есть ли у этого элемента класс .cursor-text
      if (elementUnderCursor && elementUnderCursor.closest('.cursor-text')) {
        // Если да, добавляем класс для зеленого цвета
        if (cursorRef.current) {
          cursorRef.current.classList.add('on-text');
        }
      } else {
        // Если нет, удаляем класс
        if (cursorRef.current) {
          cursorRef.current.classList.remove('on-text');
        }
      }
    };

    const animate = () => {
      const targetX = mousePosition.current.x;
      const targetY = mousePosition.current.y;

      // Сглаживаем движение курсора
      smoothedMousePosition.current.x += (targetX - smoothedMousePosition.current.x) * 0.1;
      smoothedMousePosition.current.y += (targetY - smoothedMousePosition.current.y) * 0.1;
      
      // Применяем transform для перемещения
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothedMousePosition.current.x}px, ${smoothedMousePosition.current.y}px)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    // Добавляем слушатели событий
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      // Удаляем слушатели событий при размонтировании компонента
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;