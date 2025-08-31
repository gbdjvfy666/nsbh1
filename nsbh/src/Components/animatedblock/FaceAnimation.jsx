import React, { useState } from 'react';

export default function GuyCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-[300px] h-[300px] bg-black rounded-xl flex items-center justify-center overflow-hidden">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[260px] h-[260px] bg-yellow-700 rounded-full cursor-grab overflow-hidden 
          before:absolute before:content-[''] before:w-5 before:h-5 before:bg-black before:top-1/2 before:left-[32%] before:rounded-full before:shadow-[80px_0_0_0_black] 
          after:absolute after:content-[''] after:w-[38px] after:h-[10px] after:top-[44%] after:left-[29%] after:rounded-[180px/125px] after:bg-black after:z-10 after:shadow-[80px_0_0_0_black]"
      >
        {/* Shine */}
        <div className="absolute w-[30px] h-[30px] top-[10%] left-[34%] rounded-full bg-white/40 shadow-[0_0_10px_10px_rgba(255,255,255,0.4)]"></div>

        {/* Nose */}
        <div className="absolute left-[calc(50%-12px)] top-1/2 w-[3px] h-[50px] bg-black rounded-[8px] rotate-[3deg]">
          <div className="absolute bottom-[-1px] w-[15px] h-[3px] bg-black rounded-[8px] rotate-[3deg]"></div>
        </div>

        {/* Mouth */}
        <div
          className={`absolute top-[75%] left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${
            isHovered
              ? 'w-10 h-10 rounded-full'
              : 'w-[26px] h-[6px] rounded-[8px]'
          } bg-black`}
        ></div>
      </div>
    </div>
  );
}
