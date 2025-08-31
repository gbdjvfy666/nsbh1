import React from 'react';

const NoiseOverlay = ({ children, intensity = 0.5 }) => {
  // Ограничиваем интенсивность от 0 до 1
  const safeIntensity = Math.min(Math.max(intensity, 0), 1);
  
  return (
    <div className="relative w-full h-full" style={{ isolation: 'isolate' }}>
      {/* Шумовый слой - теперь с SVG фильтром вместо изображения */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{
          opacity: safeIntensity,
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")
          `,
          animation: 'noise-animation 0.4s steps(6) infinite'
        }}
      />
      
      {/* Дочерние элементы */}
      <div className="relative z-20 h-full">
        {children}
      </div>

      <style>{`
        @keyframes noise-animation {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(-4%, 2%); }
          30% { transform: translate(2%, -4%); }
          40% { transform: translate(-2%, 5%); }
          50% { transform: translate(-4%, 2%); }
          60% { transform: translate(3%, 0); }
          70% { transform: translate(0, 3%); }
          80% { transform: translate(-3%, 0); }
          90% { transform: translate(2%, 2%); }
          100% { transform: translate(1%, 0); }
        }
      `}</style>
    </div>
  );
};

export default NoiseOverlay;