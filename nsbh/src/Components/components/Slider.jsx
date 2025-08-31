import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import MacbookWrapper from '../other/MacbookWrapper';

const ease = [0.4, 0, 0.2, 0.8];
const wordAnimation = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const slides = [
  {
    id: 1,
    image: '/images/1.jpg',
    component: ({ isActive }) => {
      if (!isActive) return null;

      return (
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 z-20 max-w-5xl">
          {/* Градиент для читаемости */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[-1]" />

          {/* Остальной контент без изменений */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white tracking-tight overflow-hidden mb-4"
            initial="hidden"
            animate="visible"
          >
            <motion.span className="inline-block mr-3" variants={wordAnimation} custom={0}>
              Побеждай в конкуренции
            </motion.span>
            <motion.span className="inline-block" variants={wordAnimation} custom={1}>
              с эффективным сайтом и рекламой.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/80 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.4}
          >
            Весь мир — в интернете. Почему твой бизнес ещё нет?
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.6}
          >
            Сайты под ключ · Таргет в ВКонтакте · Дизайн и брендинг
          </motion.p>
        </div>
      );
    },
  },

  {
    id: 2,
    image: '/images/2.png',
    title: 'САЙТ',
    subtitle: null,
    text: 'Один сайт — тысячи решений',
    link: '/web-development',
    titleClass: 'text-7xl font-dela tracking-tight',
    containerClass: 'absolute bottom-32 left-64 font-heading font-semibold left-1/2 transform -translate-x-1/2',
    buttonText: null,
    centered: true, // ✅ центрировать текст
    component: ({ isActive, isExiting, direction }) => (
      <MacbookWrapper isActive={isActive} isExiting={isExiting} direction={direction} />
    ),
  },
  {
    id: 3,
    image: '/images/3.jpg',
    title: 'Fear Nothing',
    subtitle: 'Nike National Team-Kollektionen 2025',
    text: 'Wenn es um alles geht.',
    link: '/target',
    titleClass: 'text-6xl font-black tracking-tight',
    containerClass: 'absolute bottom-16 left-1/2 transform -translate-x-1/2',
    buttonText: null,
    centered: true, // ✅ тоже центрировать
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = useRef(0);

  const handleSlideChange = (swiper) => {
    prevIndex.current = activeIndex;
    setActiveIndex(swiper.realIndex);
  };

  const direction = (() => {
    const totalSlides = slides.length;

    if (prevIndex.current === totalSlides - 1 && activeIndex === 0) return 1;
    if (prevIndex.current === 0 && activeIndex === totalSlides - 1) return -1;

    return activeIndex > prevIndex.current ? 1 : -1;
  })();

  const variants = {
    enter: (direction) => ({
      x: direction === 1 ? 600 : -600,
      opacity: 0,
      transition: { duration: 1, ease }, // очень быстрый въезд
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease }, // быстрое плавное появление
    },
    exit: (direction) => ({
      x: direction === 1 ? -600 : 600,
      opacity: 0,
      transition: { duration: 1, ease }, // быстрый выход
    }),
  };
  return (
    <div className="my-8 mx-4 md:mx-8 xl:mx-16 w-auto rounded-3xl overflow-hidden shadow-2xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        allowTouchMove={false}
        modules={[Autoplay, Navigation, Parallax, Pagination]}
        // autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          clickable: false,
          renderBullet: (index, className) =>
            `<span class="${className} w-2.5 h-2.5 rounded-full mx-1 transition-all bg-neutral-400 opacity-60"></span>`,
        }}
        parallax={true}
        speed={900}
        onSlideChange={handleSlideChange}
        className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-black "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link} className="relative block w-full h-full cursor-pointer">
              {slide.component && (
                <div className="absolute inset-0 w-full h-full z-0">
                  {slide.component({
                    isActive: slide.id === slides[activeIndex]?.id,
                    isExiting: slide.id === slides[prevIndex.current]?.id && slide.id !== slides[activeIndex]?.id,
                    direction,
                  })}
                  <div className="absolute inset-0 bg-black/50 z-10" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/30"></div>
              <AnimatePresence initial={false} custom={direction}>
                {slide.id === slides[activeIndex]?.id && (
                  <motion.div
                    key={slide.id}
                    className={`${slide.containerClass} text-white space-y-4 z-20`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{
                      textDecoration: 'none',
                      textAlign: slide.centered ? 'center' : 'left',
                    }}
                  >
                    {slide.subtitle && (
                      <motion.p className={`text-white/80 font-body text-lg md:text-xl ${slide.centered ? 'text-center' : ''}`}>
                        {slide.subtitle}
                      </motion.p>
                    )}

                    <motion.h2 className={`${slide.titleClass} ${slide.centered ? 'text-center' : ''}`}>
                      {slide.title}
                    </motion.h2>

                    {slide.text && (
                      <motion.p className={`text-lg ${slide.centered ? 'text-center' : ''}`}>
                        {slide.text}
                      </motion.p>
                    )}

                    {slide.buttonText && (
                      <div className="inline-block bg-white text-black px-6 py-3 font-semibold uppercase hover:bg-gray-100 transition cursor-pointer">
                        {slide.buttonText}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </SwiperSlide>
        ))}

        {/* Кастомные кнопки навигации внизу справа */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-50">
          <button
            className="custom-prev w-9 h-9 bg-neutral-200/80 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="custom-next w-9 h-9 bg-neutral-200/80 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="custom-pagination absolute bottom-6 left-6 flex gap-2 z-50"></div>
      </Swiper>
    </div>
  );
}