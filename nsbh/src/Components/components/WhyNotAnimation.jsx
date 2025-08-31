import '../../index.css';
import { useState } from 'react';

const WhyNotAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      style={{
        width: '300px',
        height: '300px',
        background: 'rgb(8,51,68)',
        padding: '8px',
        boxSizing: 'border-box',
      }}
    >
      <svg
        viewBox="0 0 560 300"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-full h-full"
        style={{
          fontFamily: "'Gemunu Libre', sans-serif",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WHY */}
        <g
          style={{
            clipPath:
              'polygon(0 0, 100% 0, 100% 57%, 70.11% 73.64%, 0px 100%)',
            opacity: isHovered ? 0 : 1,
            transition: 'opacity 300ms ease-in-out',
            transitionDelay: isHovered ? '0ms' : '300ms',
          }}
        >
          <text
            fill="rgb(8,51,68)"
            style={{ transform: 'translate(-7rem, 18.5rem)', fontSize: '30rem', fontWeight: 800 }}
          >
            W
          </text>
          <text
            fill="rgb(8,51,68)"
            style={{ transform: 'translate(14.7rem, 15.8rem)', fontSize: '25rem', fontWeight: 800 }}
          >
            H
          </text>
          <text
            fill="rgb(8,51,68)"
            style={{
              transform: 'translate(27.4rem, 8.6rem)',
              fontSize: '13.87rem',
              fontWeight: 800,
              paintOrder: 'stroke',
              stroke: 'white',
              strokeWidth: '15px',
            }}
          >
            Y
          </text>
        </g>

        {/* NOT */}
        <g
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 300ms ease-in-out',
            transitionDelay: isHovered ? '300ms' : '0ms',
          }}
        >
          <text
            fill="rgb(8,51,68)"
            style={{ transform: 'translate(-2rem, 19rem)', fontSize: '33rem', fontWeight: 800 }}
          >
            N
          </text>
          <text
            fill="rgb(8,51,68)"
            style={{ transform: 'translate(27.4rem, 12.7rem)', fontSize: '20rem', fontWeight: 800 }}
          >
            T
          </text>
          <text
            fill="rgb(8,51,68)"
            style={{
              transform: 'translate(15.1rem, 16rem)',
              fontSize: '25rem',
              fontWeight: 800,
              paintOrder: 'stroke',
              stroke: 'white',
              strokeWidth: '15px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
            }}
          >
            O
          </text>
        </g>

        {/* ? */}
        <g>
          <text
            fill="rgb(127,29,29)"
            style={{
              transform: 'translate(8.5rem, 16.8rem) rotate(67deg)',
              fontSize: '45rem',
              fontWeight: 800,
              paintOrder: 'stroke',
              stroke: 'white',
              strokeWidth: '20px',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
            }}
          >
            ?
          </text>
        </g>
      </svg>
    </div>
  );
};

export default WhyNotAnimation;
