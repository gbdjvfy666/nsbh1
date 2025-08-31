import React, { useMemo } from 'react';

const StarBackground = () => {
  const generateStars = (count) => {
    let stars = '';
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 2000;
      const y = Math.random() * 2000;
      stars += `${x}px ${y}px #FFF${i < count - 1 ? ',' : ''}`;
    }
    return stars;
  };

  const stars = useMemo(() => ({
    small: generateStars(700),
    medium: generateStars(200),
    large: generateStars(100)
  }), []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Фон с градиентом и звёздами */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80">
        <div 
          className="absolute w-[1px] h-[1px] bg-transparent"
          style={{
            boxShadow: stars.small,
            animation: 'animStar 50s linear infinite',
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute w-[2px] h-[2px] bg-transparent"
          style={{
            boxShadow: stars.medium,
            animation: 'animStar 100s linear infinite',
            willChange: 'transform'
          }}
        />
        <div 
          className="absolute w-[3px] h-[3px] bg-transparent"
          style={{
            boxShadow: stars.large,
            animation: 'animStar 150s linear infinite',
            willChange: 'transform'
          }}
        />
      </div>

      {/* Контент с прозрачной карточкой */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-white">
        <article
          className="max-w-4xl mx-auto rounded-xl p-8 shadow-lg border transition-all duration-300"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">
              DIGITAL DESIGN
            </h1>
            <div className="w-24 h-px bg-white/30 mx-auto mb-4"></div>
            <p className="text-xl text-white/70 tracking-widest">
              WHERE CREATIVITY MEETS TECHNOLOGY
            </p>
          </header>

          <section className="space-y-12">
            <div className="bg-transparent p-4">
              <h2 className="text-2xl font-medium mb-4 text-white">
                ESSENCE OF DIGITAL ART
              </h2>
              <p className="text-white/80 leading-relaxed">
                Modern design exists in the intersection of aesthetics and functionality. 
                The true mastery lies in creating interfaces that feel alive, responsive, 
                and deeply human despite their digital nature.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-transparent p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium mb-3 text-white">
                  DESIGN PRINCIPLES
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-white mr-2">→</span>
                    Clarity over decoration
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">→</span>
                    Intentional white space
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">→</span>
                    Consistent visual language
                  </li>
                </ul>
              </div>

              <div className="bg-transparent p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-medium mb-3 text-white">
                  DIGITAL TOOLS
                </h3>
                <p className="text-white/80">
                  From Figma to Blender, modern tools empower designers to 
                  prototype 3D interfaces, animate micro-interactions, and 
                  craft immersive experiences that were impossible yesterday.
                </p>
              </div>
            </div>

            <div className="bg-transparent p-4">
              <h2 className="text-2xl font-medium mb-4 text-white">
                FUTURE FRONTIERS
              </h2>
              <p className="text-white/80 leading-relaxed">
                As we enter the era of spatial computing, designers must 
                rethink fundamentals. Typography exists in 3D space, 
                interfaces respond to gaze and gesture, and AI becomes 
                a collaborative partner in the creative process.
              </p>
            </div>
          </section>

          <footer className="mt-16 text-center text-white/50 text-sm">
            <p>© DIGITAL FRONTIERS {new Date().getFullYear()}</p>
          </footer>
        </article>
      </div>

      <style>{`
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
