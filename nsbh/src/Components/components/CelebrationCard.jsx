const CelebrationCard = () => {
  return (
    <div 
      className="min-h-screen bg-[rgb(51,65,85)] text-[rgb(3,28,68)] grid place-content-center font-['Alatsi']"
      style={{
        animation: 'hue-rotate 10s linear infinite'
      }}
    >
      <style>
        {`
          @keyframes hue-rotate {
            to {
              filter: hue-rotate(360deg);
            }
          }
        `}
      </style>

      <div 
        className="relative grid [grid-template-areas:'stack'] place-items-center bg-[rgb(198,230,248)] w-[360px] h-[200px] leading-none rounded-[15px] [filter:drop-shadow(4px_4px_0_rgb(231,139,139))_hue-rotate(180deg)]"
      >
        {/* Radial gradient background */}
        <div 
          className="absolute inset-x-[-300px] bottom-auto h-6 [background:radial-gradient(circle,rgb(3,28,68)_0%,transparent_75%)] z-[-1] translate-y-[0.35rem]"
          aria-hidden="true"
        />

        <h1 
          className="relative [grid-area:stack] z-[1] text-[10rem] font-bold [filter:drop-shadow(4px_4px_0_rgb(231,139,139))_hue-rotate(180deg)]"
        >
          100
        </h1>

        <h2 
          className="relative [grid-area:stack] z-[2] text-base tracking-[0.9rem] bg-[rgb(198,230,248)] left-0 py-[0.85rem] pl-4 uppercase flex justify-center text-center w-full"
        >
          Followers
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute [grid-area:stack] text-[rgb(3,28,68)] top-[-1.9rem] w-16 bg-[rgb(198,230,248)] rounded-full p-[0.6rem] [box-shadow:0_0_0_8px_rgba(255,255,255,0.05)]"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
          <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
          <path d="M3 9l0 6" />
          <path d="M21 9l0 6" />
          <path d="M12 3l0 6" />
          <path d="M12 15l0 6" />
        </svg>
      </div>

      <p className="mt-3 mr-1 text-right text-[rgb(198,230,248)] text-[0.9rem] font-light">
        #thanks
      </p>
    </div>
  );
};

export default CelebrationCard;