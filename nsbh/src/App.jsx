import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Design from './pages/Design';
import Target from './pages/Target';
import Works from './pages/Works';
import Test from './pages/test';
import WebDevelopment from './pages/WebDevelopment';
import gsap from 'gsap';

function AppContent() {
  const location = useLocation();
  const containerRef = useRef(null);
  const scrollPos = useRef(0);
  const targetPos = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    // Устанавливаем высоту body по высоте контента
    const setBodyHeight = () => {
      document.body.style.height = container.scrollHeight + 'px';
    };
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);

    const update = () => {
      // плавно приближаем позицию к целевой
      scrollPos.current += (targetPos.current - scrollPos.current) * 0.08;

      // сдвигаем контент с инерцией
      gsap.set(container, { y: -scrollPos.current });

      requestAnimationFrame(update);
    };

    const onScroll = () => {
      targetPos.current = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);
    update();

    return () => {
      window.removeEventListener('resize', setBodyHeight);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Сбрасываем позицию при смене страницы
  useEffect(() => {
    targetPos.current = 0;
    scrollPos.current = 0;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 w-full will-change-transform" ref={containerRef}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/target" element={<Target />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
