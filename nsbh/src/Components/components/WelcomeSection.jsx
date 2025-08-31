import React from 'react';
import { motion } from 'framer-motion';
import FractalOrbComponent from '../animatedblock/ProfileCard/FractalOrbComponent.jsx';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const WelcomeSection = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* Фрактальный фон - теперь сверху, чтобы получать события мыши */}
      <div className="absolute inset-0 z-50">
        <FractalOrbComponent />
      </div>

      {/* Основной контент - теперь ниже, но все еще над фоном */}
      {/* Используем 'pointer-events-none' для всего блока, но возвращаем для ссылок */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen p-6 md:p-12 lg:p-20 pointer-events-none">
        
        {/* Левый блок с текстом */}
        <motion.div
          className="flex-1 flex flex-col justify-center max-w-full md:max-w-3xl px-4 md:px-0 mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight tracking-tighter"
            variants={childVariants}
          >
            <span className="text-gray-200">Создаем</span><br />
            <span className="text-white">премиальный</span><br />
            <span className="text-gray-400">Digital</span><br />
            <span className="text-gray-500">опыт</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl font-light max-w-xl text-neutral-400 mt-6"
            variants={childVariants}
          >
            Мы — digital-агентство, которое разрабатывает
            эффективные и эстетически безупречные решения
            для вашего бизнеса. Наша цель — не просто
            создать продукт, а сформировать будущее вашего
            бренда.
          </motion.p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default WelcomeSection;