import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Background from '../../assets/Background1.png';

gsap.registerPlugin(Draggable, ScrollTrigger);

const DEFAULT_SLIDES = [
  {
    type: "image",
    content: Background,
    background: Background,
    title: "Волшебный лес",
    text: "Погрузитесь в атмосферу природы и тишины",
  },
  {
    type: "text",
    title: "Моменты вдохновения",
    text: "Творчество рождается там, где есть покой и гармония с природой.",
    background: "transparent",
  },
  {
    type: "image",
    content: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    background: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Город в сумерках",
    text: "Ощути магию вечернего мегаполиса",
  },
  {
    type: "video",
    content: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Пламя огня",
    text: "Сила и энергия стихии",
  },
];

const ParallaxCardSlider = ({ customSlides = [] }) => {
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const backgroundRefs = useRef([]);
  const secondSlideRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const [isSecondSlideAnimated, setIsSecondSlideAnimated] = useState(false);

  const slides = customSlides.length > 0 ? customSlides : DEFAULT_SLIDES;

  const gap = 30;
  const panelWidth = dimensions.width * 0.7;

  // Обработка ресайза окна
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Инициализация анимации для второго слайда
  useEffect(() => {
    if (secondSlideRef.current) {
      gsap.set(secondSlideRef.current, {
        x: dimensions.width * 0.7 + gap,
        opacity: 1
      });
    }
  }, [dimensions.width]);

  // Анимация появления второго слайда при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (isSecondSlideAnimated || !secondSlideRef.current) return;

      const card = cardsRef.current[1];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (isVisible) {
        setIsSecondSlideAnimated(true);
        gsap.fromTo(secondSlideRef.current, 
          { x: dimensions.width * 0.7 + gap },
          { 
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(secondSlideRef.current, { clearProps: "x" });
            }
          }
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSecondSlideAnimated, dimensions.width]);

  // Draggable слайдера
  useEffect(() => {
    if (!sliderRef.current || slides.length === 0) return;

    const maxScroll = -(slides.length - 1) * (panelWidth + gap);

    const draggableInstance = Draggable.create(sliderRef.current, {
      type: "x",
      bounds: { minX: maxScroll, maxX: 0 },
      inertia: true,
      edgeResistance: 0.8,
      onDrag: function() {},
      onThrowUpdate: function() {},
      onDragEnd: function() {
        const snapToSlide = Math.round(-this.x / (panelWidth + gap));
        const targetX = -snapToSlide * (panelWidth + gap);
        
        gsap.to(this.target, {
          x: targetX,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => setActiveSlide(snapToSlide)
        });
      },
      snap: {
        x: function(value) {
          return Math.round(value / (panelWidth + gap)) * (panelWidth + gap);
        }
      }
    });

    return () => {
      if (draggableInstance && draggableInstance[0]) draggableInstance[0].kill();
    };
  }, [slides.length, panelWidth]);

  // Параллакс эффект для фона
  useEffect(() => {
    if (!cardsRef.current.length) return;

    backgroundRefs.current.forEach((bgRef, index) => {
      if (!bgRef || !cardsRef.current[index] || index === 1) return;

      gsap.fromTo(bgRef,
        { y: -100 },
        {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: cardsRef.current[index],
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [slides.length, dimensions]);

  const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return;
    
    const targetX = -index * (panelWidth + gap);
    gsap.to(sliderRef.current, {
      x: targetX,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => setActiveSlide(index)
    });
  };

  return (
    <div className="relative w-full min-h-screen py-20 overflow-hidden bg-[rgb(39,34,33)]">

      <div
        ref={sliderRef}
        className="relative flex items-center h-[85vh] cursor-grab active:cursor-grabbing"
        style={{
          width: `${slides.length * (panelWidth + gap)}px`,
          gap: `${gap}px`,
          paddingLeft: `calc(50vw - ${panelWidth / 2}px)`,
          marginTop: "7.5vh",
          marginBottom: "7.5vh",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={el => {
              cardsRef.current[index] = el;
              if (index === 1) secondSlideRef.current = el;
            }}
            className="relative h-full flex-shrink-0"
            style={{ width: `${panelWidth}px` }}
            onClick={() => goToSlide(index)}
          >
            <div className={`absolute inset-0 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl ${
              index === 1 ? "bg-transparent" : "bg-[rgb(39,34,33)] bg-opacity-90"
            }`}>

              {index !== 1 && (
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <img
                    ref={(el) => (backgroundRefs.current[index] = el)}
                    src={slide.background}
                    alt=""
                    className="card-background w-full h-full object-cover"
                    style={{ transform: 'translateY(0px) scale(1.05)' }}
                    draggable={false}
                  />
                </div>
              )}

              {index === 1 ? (
                <div className="absolute inset-0 flex flex-col items-start justify-start p-10 text-white">
                  <div className="text-right max-w-[55%]">
                    <h2 className="text-6xl font-bold mb-4 leading-tight tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg opacity-80 leading-relaxed">
                      {slide.text}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] h-[65%] bg-black rounded-xl overflow-hidden flex items-center justify-center">
                  {slide.type === "image" ? (
                    <img
                      src={slide.content}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : slide.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={slide.content} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="p-6 text-white text-center">
                      <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-lg leading-relaxed">{slide.text}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-blue-500 scale-125"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxCardSlider;