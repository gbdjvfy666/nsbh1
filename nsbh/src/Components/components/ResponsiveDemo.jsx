import { useRef, useState, useEffect } from "react";
import houseone from '../../assets/houseone.jpg';
import housetwo from '../../assets/housetwo.jpg';
import housethree from '../../assets/housethree.jpg';
import housefour from '../../assets/housefour.jpg';
import housefive from '../../assets/housefive.jpg';
import housesix from '../../assets/housesix.jpg';

const breakpoints = {
  phone: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280
};

const images = [houseone, housetwo, housethree, housefour, housefive, housesix];

export default function ResponsiveDemo() {
  const [width, setWidth] = useState(breakpoints.desktop);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoints.tablet);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const getDisplayMode = () => {
    if (width < breakpoints.phone || isMobile) return 'mobile';
    if (width < breakpoints.tablet) return 'phone';
    if (width < breakpoints.laptop) return 'tablet';
    if (width < breakpoints.desktop) return 'laptop';
    return 'desktop';
  };

  const displayMode = getDisplayMode();

  useEffect(() => {
    const handleMove = (clientX) => {
      if (!isDragging.current) return;
      const dx = clientX - startX.current;
      const newWidth = Math.max(320, Math.min(startWidth.current + dx, 1500));
      setWidth(newWidth);
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    const handleEnd = () => {
      isDragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  const handleStartDrag = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
    startWidth.current = width;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  };

  useEffect(() => {
    if (isMobile) {
      setWidth(window.innerWidth - 32);
    }
  }, [isMobile]);

  const renderImages = () => {
    switch(displayMode) {
      case 'mobile':
        return (
          <div className="relative h-full">
            <img src={images[0]} alt="Дом у моря" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 rounded-lg">
              <p className="text-sm text-zinc-300">Целый дом</p>
              <h2 className="text-xl font-bold">Дом у озера Хурон</h2>
              <div className="text-pink-400 flex items-center gap-1 text-xs mt-1">
                <span>⭐ 2.66</span>
                <span className="text-zinc-300">(128 отзывов)</span>
              </div>
              <button className="bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-lg mt-3 w-full">
                Проверить доступность
              </button>
            </div>
          </div>
        );

      case 'phone':
        return (
          <div className="grid grid-cols-2 gap-2 h-full">
            {images.slice(0, 2).map((img, i) => (
              <img key={i} src={img} alt={`Дом ${i+1}`} className="w-full h-full object-cover rounded-lg" />
            ))}
          </div>
        );

      case 'tablet':
        return (
          <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
            <div className="row-span-2 col-span-2">
              <img src={images[0]} alt="Дом 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="row-span-1">
              <img src={images[1]} alt="Дом 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="row-span-1">
              <img src={images[2]} alt="Дом 3" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        );

      case 'laptop':
        return (
          <div className="grid grid-cols-2 gap-2 h-full">
            {images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Дом ${i+1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-3 gap-2 h-full">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Дом ${i+1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 px-4 py-8 sm:py-16 transition-colors duration-300">
      <div className="w-full max-w-[1700px] mx-auto bg-white dark:bg-zinc-950 rounded-2xl p-4 sm:p-8 shadow-lg border border-zinc-200/50 dark:border-zinc-700/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Адаптивный дизайн
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
          Посмотрите, как ваш контент будет выглядеть на разных устройствах. Перетаскивайте правую границу, чтобы изменить ширину.
        </p>

        <div className="w-full overflow-x-auto relative">
          {!isMobile && (
            <div className="absolute top-0 left-0 h-12 w-full z-20 pointer-events-none">
              {Object.entries(breakpoints).map(([name, bpWidth]) => (
                <div
                  key={name}
                  className="absolute flex items-center"
                  style={{ left: `${bpWidth}px`, transform: "translateX(-50%)" }}
                >
                  <div className="w-px h-4 bg-zinc-400 dark:bg-white/30" />
                  <div className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded">
                    {{
                      phone: "Телефон",
                      tablet: "Планшет",
                      laptop: "Ноутбук",
                      desktop: "Компьютер"
                    }[name]}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            ref={containerRef}
            className={`relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 sm:p-6 ${isMobile ? "w-full" : ""}`}
            style={{
              width: isMobile ? "100%" : `${width}px`,
              minWidth: isMobile ? "100%" : "320px",
              height: "650px"
            }}
          >
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-4 sm:p-8 rounded-lg h-full">
              {displayMode === 'mobile' ? (
                renderImages()
              ) : (
                <div className={`flex ${displayMode === 'phone' || displayMode === 'tablet' ? 'flex-col' : 'flex-row'} gap-6 h-full`}>
                  <div className={
                    displayMode === 'phone' || displayMode === 'tablet' 
                      ? "w-full h-2/3" 
                      : displayMode === 'laptop'
                      ? "w-1/2 h-full"
                      : "w-2/3 h-full"
                  }>
                    {renderImages()}
                  </div>

                  <div className={`
                    ${displayMode === 'phone' || displayMode === 'tablet' ? "w-full h-1/3" : ""}
                    ${displayMode === 'laptop' ? "w-1/2 pl-6 h-full" : ""}
                    ${displayMode === 'desktop' ? "w-1/3 pl-6 h-full" : ""}
                    flex flex-col justify-center
                  `}>
                    <p className="text-sm text-zinc-400">Целый дом</p>
                    <h2 className="text-xl sm:text-2xl font-bold mt-2">Дом у озера Хурон</h2>
                    <div className="text-pink-500 flex items-center gap-1 text-sm mt-1">
                      <span>⭐ 2.66</span>
                      <span className="text-zinc-400">(128 отзывов)</span>
                      {displayMode === 'desktop' && (
                        <span className="text-pink-500">· Бэйфилд, Канада</span>
                      )}
                    </div>
                    {displayMode !== 'phone' && (
                      <p className="text-zinc-400 text-sm mt-2">
                        Солнечная и просторная комната для тех, кто хочет уют и комфорт вдали от городской суеты...
                      </p>
                    )}
                    <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold px-4 py-2 rounded-lg mt-4 w-fit transition-colors duration-200">
                      Проверить доступность
                    </button>
                  </div>
                </div>
              )}
            </div>

            {!isMobile && (
              <div
                onMouseDown={handleStartDrag}
                onTouchStart={handleStartDrag}
                className="absolute top-0 right-0 w-2 h-full cursor-ew-resize flex justify-center items-center select-none group"
              >
                <div className="w-1 h-16 bg-gray-500 rounded-full group-hover:bg-pink-500 transition-colors duration-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}