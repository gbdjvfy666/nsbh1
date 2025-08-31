import React, { useEffect, useState } from 'react';

const ProjectsGallery = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Silence",
      year: "2021",
      image: "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg"
    },
    {
      id: 2,
      title: "Resonance",
      year: "2022",
      image: "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg"
    },
    {
      id: 3,
      title: "Essence",
      year: "2022",
      image: "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg"
    },
    {
      id: 4,
      title: "Void",
      year: "2023",
      image: "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg"
    },
    {
      id: 5,
      title: "Presence",
      year: "2023",
      image: "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg"
    },
    {
      id: 6,
      title: "Flow",
      year: "2024",
      image: "https://cdn.cosmos.so/cbee1ec5-01b6-4ffe-9f34-7da7980454cf?format=jpeg"
    },
    {
      id: 7,
      title: "Clarity",
      year: "2024",
      image: "https://cdn.cosmos.so/2e91a9d1-db85-4499-ad37-6222a6fea23b?format=jpeg"
    },
    {
      id: 8,
      title: "Breath",
      year: "2024",
      image: "https://cdn.cosmos.so/ff2ac3d3-fa94-4811-89f6-0d008b27e439?format=jpeg"
    },
    {
      id: 9,
      title: "Stillness",
      year: "2025",
      image: "https://cdn.cosmos.so/c39a4043-f489-4406-8018-a103a3f89802?format=jpeg"
    },
    {
      id: 10,
      title: "Surrender",
      year: "2025",
      image: "https://cdn.cosmos.so/e5e399f2-4050-463b-a781-4f5a1615f28e?format=jpeg"
    }
  ]);

  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [backgroundScale, setBackgroundScale] = useState(1.15);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    // Плавное появление элементов с задержкой
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
      item.style.transition = `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`;
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });

    // Предзагрузка изображений
    projects.forEach(project => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = project.image;
    });
  }, [projects]);

  const handleProjectHover = (project) => {
    setActiveProject(project.id);
    setBackgroundImage(project.image);
    setBackgroundOpacity(0);
    setBackgroundScale(1.15);
    
    // Плавное появление фона
    setTimeout(() => {
      setBackgroundOpacity(1);
      setBackgroundScale(1);
    }, 50);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
    // Плавное исчезновение фона
    setTimeout(() => {
      setBackgroundOpacity(0);
      setBackgroundScale(1.15);
    }, 200);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1a1917] text-[#f8f5f2] font-['PP_Neue_Montreal'] font-bold text-lg uppercase tracking-tight isolate">
      {/* Noise effect overlay */}
      <div 
        className="absolute inset-0 w-[200%] h-[200%] bg-[url('http://assets.iceable.com/img/noise-transparent.png')] bg-[length:300px_300px] opacity-90 pointer-events-none z-20"
        style={{
          animation: 'noise-animation 0.4s steps(6) infinite',
          top: '-50%',
          left: '-50%'
        }}
      />

      {/* Background image */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <img 
          src={backgroundImage}
          alt="Project background"
          crossOrigin="anonymous"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)]"
          style={{
            transform: `scale(${backgroundScale})`,
            opacity: backgroundOpacity,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-[1000px] h-full flex items-center justify-center">
          <div 
            className="w-full relative z-10 py-5 scrollbar-hide"
            onMouseLeave={handleMouseLeave}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-item relative flex justify-between py-4 border-b border-[rgba(248,245,242,0.1)] cursor-pointer group"
                onMouseEnter={() => handleProjectHover(project)}
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="project-title text-[1.8rem] relative z-20 mix-blend-exclusion">
                  {project.title}
                </div>
                <div className="project-year text-[1.8rem] relative z-20 mix-blend-exclusion">
                  {project.year}
                </div>
                
                {/* Highlight effect - теперь появляется снизу */}
                <div 
                  className={`absolute bottom-0 left-0 h-0 w-full bg-[#f8f5f2] z-10 
                    transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)]
                    ${activeProject === project.id ? 'h-full' : 'delay-100'}`}
                  style={{
                    transformOrigin: 'bottom center',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
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

export default ProjectsGallery;