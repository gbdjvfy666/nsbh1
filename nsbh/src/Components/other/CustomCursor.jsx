import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothedMousePosition = useRef({ x: 0, y: 0 });
  
  // Этот useEffect будет управлять движением и реакцией курсора
  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Находим все элементы, на которые курсор должен реагировать
    const hoverables = document.querySelectorAll('.hoverable');

    // Функция перемещения курсора по экрану
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Функция, которая сработает при наведении на элемент
    const handleMouseEnter = () => {
      if (cursor) {
        cursor.classList.add('on-text'); // Добавляем класс, который изменит цвет
      }
    };
    
    // Функция, которая сработает, когда мышь уйдёт с элемента
    const handleMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove('on-text'); // Удаляем класс, чтобы вернуть исходный цвет
      }
    };

    // Функция для плавной анимации курсора
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

    // Добавляем слушатели событий на весь экран
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    // Добавляем слушатели событий на найденные элементы
    hoverables.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Очищаем слушатели, когда компонент исчезает со страницы
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      hoverables.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;