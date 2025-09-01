import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothedMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Находим все элементы с классом .hoverable
    const hoverables = document.querySelectorAll('.hoverable');

    // Функция для перемещения курсора
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Функции для наведения (hover)
    const handleMouseEnter = () => {
      if (cursor) {
        cursor.classList.add('on-text'); // Добавляем класс при наведении
      }
    };
    
    const handleMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove('on-text'); // Удаляем класс при уходе
      }
    };

    // Анимация движения курсора
    const animate = () => {
      const targetX = mousePosition.current.x + window.scrollX;
      const targetY = mousePosition.current.y + window.scrollY;
      smoothedMousePosition.current.x += (targetX - smoothedMousePosition.current.x) * 0.1;
      smoothedMousePosition.current.y += (targetY - smoothedMousePosition.current.y) * 0.1;
      
      if (cursor) {
        cursor.style.transform = `translate(${smoothedMousePosition.current.x}px, ${smoothedMousePosition.current.y}px)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    // Добавляем слушатели событий на весь экран для перемещения курсора
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    // Добавляем слушатели событий на элементы с классом .hoverable
    hoverables.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Функция очистки: удаляем все слушатели, когда компонент размонтируется
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      hoverables.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []); // Пустой массив зависимостей, чтобы слушатели добавились только один раз

  // JSX-разметка курсора
  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;