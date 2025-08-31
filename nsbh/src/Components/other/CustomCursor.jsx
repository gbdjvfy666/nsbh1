import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothedMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // К координатам курсора добавляем смещение прокрутки страницы
      mousePosition.current = {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      };
    };

    const animate = () => {
      smoothedMousePosition.current.x += (mousePosition.current.x - smoothedMousePosition.current.x) * 0.1;
      smoothedMousePosition.current.y += (mousePosition.current.y - smoothedMousePosition.current.y) * 0.1;

      if (cursorRef.current) {
        // Устанавливаем положение с учетом сглаживания
        cursorRef.current.style.transform = `translate(${smoothedMousePosition.current.x}px, ${smoothedMousePosition.current.y}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;