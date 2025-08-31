import React, { useEffect } from 'react';


const TiltCard = () => {
  useEffect(() => {
    // Подключаем VanillaTilt после рендеринга компонента
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js';
    script.async = true;
    script.onload = () => {
      if (window.VanillaTilt) {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {});
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark">
        <div 
          className="relative w-full max-w-[380px] aspect-[9/15.5] max-h-[90vh] rounded-[1.75rem] overflow-hidden bg-cover bg-center shadow-[0_0_0_2px_rgba(255,214,102,0.4),0_0_25px_8px_rgba(255,214,102,0.15)] transition-all duration-600 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] cursor-grab will-change-transform"
          style={{ 
            backgroundImage: "url('https://static.wixstatic.com/media/3d9313_45b151504946477791c3add537ac398a~mv2.png')",
            transformStyle: 'preserve-3d'
          }}
          data-tilt 
          data-tilt-max="10" 
          data-tilt-speed="500" 
          data-tilt-perspective="1800" 
          data-tilt-glare 
          data-tilt-max-glare="0.1" 
          data-tilt-scale="1.03" 
          data-tilt-reset="true"
        >
          {/* Inner border overlay */}
          <div 
            className="absolute inset-[14px] rounded-[1.375rem] pointer-events-none z-10 shadow-[inset_0.5px_0.5px_1.5px_rgba(255,235,180,0.6),inset_-1px_-1px_1px_rgba(160,110,0,0.5),inset_3px_3px_6px_rgba(0,0,0,0.25)] [transform:translateZ(30px)] will-change-transform border border-[rgba(255,214,102,0.1)]"
            data-tilt-transform-element
          ></div>

          {/* Content area */}
          <div 
            className="absolute inset-[14px] rounded-[1.375rem] overflow-hidden flex flex-col justify-end z-5 [transform:translateZ(60px)] will-change-transform p-4 sm:p-5 lg:p-7"
            data-tilt-transform-element
          >
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-gradient-to-t from-[rgba(10,10,10,0.9)] via-[rgba(10,10,10,0.65)] to-transparent pointer-events-none z-15 [transform:translateZ(5px)] will-change-transform"></div>

            {/* Elevation badge */}
            <div 
              className="absolute top-4 right-4 bg-[rgba(250,204,21,0.85)] rounded-full px-4 py-2 text-[#422006] text-xs font-semibold tracking-wide flex items-center gap-2 shadow-md [transform:translateZ(70px)] border border-[rgba(255,255,255,0.3)] z-25 will-change-transform"
              data-tilt-transform-element
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path d="M12 2L6.5 12h11L12 2zm5.5 11l-5.5 9-5.5-9h11z"/>
              </svg>
              4,478 m
            </div>

            {/* Text block */}
            <div 
              className="relative z-20 text-[#f8fafc] text-center [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] [transform:translateZ(25px)] will-change-transform mb-4"
              data-tilt-transform-element
            >
              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-wide flex items-center justify-center gap-2">
                <svg 
                  className="w-6 h-6 fill-current opacity-80 align-middle -mb-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.344 6.219l-2.344-3.219-2.344 3.219-4.656 7.781h14l-4.656-7.781zm-7.344 9.781l-1 2h10l1.625-2.708-1.501-.292-1.124 1h-4l-1.125-1-1.875.001zm11.69-1l-.69.999 1.311 1.311 1.689.69-1.311-1.311-.689-.69z"/>
                </svg>
                Matterhorn
              </h1>
              <p className="text-sm sm:text-base lg:text-lg font-light text-[#cbd5e1]">
                Zermatt, Switzerland
              </p>
            </div>

            {/* Tour button */}
            <button 
              className="relative z-20 bg-gradient-to-br from-[#fde047] to-[#facc15] text-[#422006] font-semibold py-3 px-7 rounded-full text-center min-w-[190px] max-w-[85%] mx-auto transition-all duration-300 border-none shadow-[inset_2px_2px_4px_rgba(160,110,0,0.6),inset_-2px_-2px_4px_rgba(255,245,200,0.5),0_1px_2px_rgba(0,0,0,0.1)] [transform:translateZ(40px)] will-change-transform flex items-center justify-center gap-3 tracking-wide mt-4"
              data-tilt-transform-element
            >
              Take the tour
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5l7 7-7 7"></path>
                <path d="M5 12h14"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
        body {
          font-family: 'Inter', sans-serif;
          color-scheme: dark;
        }
        .card-container:hover {
          box-shadow: 0 0 0 3px rgba(255, 214, 102, 0.6),
                      0 0 35px 12px rgba(255, 214, 102, 0.25) !important;
        }
        .tour-button:hover {
          background: linear-gradient(145deg, #feec80, #fde047) !important;
          box-shadow: inset 2px 2px 5px rgba(160, 110, 0, 0.5),
                      inset -2px -2px 5px rgba(255, 245, 200, 0.6),
                      0 2px 4px rgba(0,0,0,0.15) !important;
          transform: translateZ(40px) translateY(-2px) !important;
          color: #3f2810 !important;
        }
        .tour-button:active {
          background: linear-gradient(145deg, #facc15, #eab308) !important;
          box-shadow: inset -2px -2px 4px rgba(160, 110, 0, 0.6),
                      inset 2px 2px 4px rgba(255, 245, 200, 0.5),
                      0 0 0 rgba(0,0,0,0) !important;
          transform: translateZ(40px) translateY(0px) !important;
        }
      `}</style>
    </>
  );
};

export default TiltCard;