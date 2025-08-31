import React, { useState, useRef, useEffect } from 'react';
import video1 from '../../assets/6973-197914400_small.mp4';
import video2 from '../../assets/1992-153555258_small.mp4';
import video3 from '../../assets/885-141277483_small.mp4';

const ServicesGrid = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const videoData = [
    { title: 'UX/UI', src: video1 },
    { title: 'Branding', src: video2 },
    { title: 'Development', src: video3 },
    { title: '3D', src: video1 },
    { title: 'Motion', src: video2 },
    { title: 'Web & App', src: video3 },
  ];

  // Создаём рефы для всех видео
  const videoRefs = useRef({});
  videoData.forEach((item) => {
    if (!videoRefs.current[item.title]) {
      videoRefs.current[item.title] = React.createRef();
    }
  });

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
    const video = videoRefs.current[title].current;
    if (video) video.play();
  };

  const handleMouseLeave = (title) => {
    setHoveredItem(null);
    const video = videoRefs.current[title].current;
    if (video) video.pause();
  };

  const getOpacity = (title) => (hoveredItem === title ? 1 : 0);

  return (
    <div className="w-full mt-10">
      {/* Первый ряд */}
      <div className="flex w-full min-w-full">
        {videoData.slice(0, 3).map((item) => (
          <div
            key={item.title}
            className="w-1/3 border border-gray-200 dark:border-white h-[400px] relative overflow-hidden"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseLeave(item.title)}
          >
            <button
              className={`absolute left-4 top-4 w-5 h-5 rounded-full transition-colors duration-300 z-20 ${
                hoveredItem === item.title
                  ? 'bg-white'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => alert(`Клик по ${item.title}`)}
            ></button>

            <video
              ref={videoRefs.current[item.title]}
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: getOpacity(item.title) }}
            >
              <source src={item.src} type="video/mp4" />
            </video>

            <div
              className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
              style={{ opacity: hoveredItem === item.title ? 0.3 : 1 }}
            ></div>

            <div className="absolute left-4 bottom-4 z-10">
              <h3
                className={`text-3xl font-bold transition-colors duration-300 ${
                  hoveredItem === item.title
                    ? 'text-white'
                    : 'text-gray-800 dark:text-white'
                }`}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Второй ряд */}
      <div className="flex w-full min-w-full">
        {videoData.slice(3, 5).map((item) => (
          <div
            key={item.title}
            className="w-1/4 border border-gray-200 dark:border-white h-[400px] relative overflow-hidden"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseLeave(item.title)}
          >
            <button
              className={`absolute left-4 top-4 w-5 h-5 rounded-full transition-colors duration-300 z-20 ${
                hoveredItem === item.title
                  ? 'bg-white'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => alert(`Клик по ${item.title}`)}
            ></button>

            <video
              ref={videoRefs.current[item.title]}
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: getOpacity(item.title) }}
            >
              <source src={item.src} type="video/mp4" />
            </video>

            <div
              className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
              style={{ opacity: hoveredItem === item.title ? 0.3 : 1 }}
            ></div>

            <div className="absolute left-4 bottom-4 z-10">
              <h3
                className={`text-3xl font-bold transition-colors duration-300 ${
                  hoveredItem === item.title
                    ? 'text-white'
                    : 'text-gray-800 dark:text-white'
                }`}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
        <div
          key={videoData[5].title}
          className="w-2/4 border border-gray-200 dark:border-white h-[400px] relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter(videoData[5].title)}
          onMouseLeave={() => handleMouseLeave(videoData[5].title)}
        >
          <button
            className={`absolute left-4 top-4 w-5 h-5 rounded-full transition-colors duration-300 z-20 ${
              hoveredItem === videoData[5].title
                ? 'bg-white'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            onClick={() => alert(`Клик по ${videoData[5].title}`)}
          ></button>

          <video
            ref={videoRefs.current[videoData[5].title]}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: getOpacity(videoData[5].title) }}
          >
            <source src={videoData[5].src} type="video/mp4" />
          </video>

          <div
            className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out"
            style={{ opacity: hoveredItem === videoData[5].title ? 0.3 : 1 }}
          ></div>

          <div className="absolute left-4 bottom-4 z-10">
            <h3
              className={`text-3xl font-bold transition-colors duration-300 ${
                hoveredItem === videoData[5].title
                  ? 'text-white'
                  : 'text-gray-800 dark:text-white'
              }`}
            >
              {videoData[5].title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
