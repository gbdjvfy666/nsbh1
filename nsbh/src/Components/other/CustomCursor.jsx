import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothedMousePosition = useRef({ x: 0, y: 0 });
  
  // Добавляем новый useEffect для обработки текста
  useEffect(() => {
    const textElements = document.querySelectorAll('.cursor-text');
    if (!textElements) return;

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('on-text');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('on-text');
      }
    };

    textElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleScroll = () => {
      mousePosition.current = {
        x: mousePosition.current.x,
        y: mousePosition.current.y,
      };
    };

    const animate = () => {
      const targetX = mousePosition.current.x + window.scrollX;
      const targetY = mousePosition.current.y + window.scrollY;

      smoothedMousePosition.current.x += (targetX - smoothedMousePosition.current.x) * 0.1;
      smoothedMousePosition.current.y += (targetY - smoothedMousePosition.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothedMousePosition.current.x}px, ${smoothedMousePosition.current.y}px)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;