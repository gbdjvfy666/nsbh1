import React from 'react';

const ProductShowcase3D = () => {
  const products = [
    {
      color: 'white',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/aw-white.png',
      specs: [
        '38mm and 42mm Case',
        '7000 Series Silver Aluminum',
        'Ion-X Glass',
        'Retina Display',
        'Composite Back'
      ],
      band: 'White Fluoroelastomer\nStainless Steel Pin'
    },
    {
      color: 'blue',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/aw-blue.png',
      specs: [
        '38mm and 42mm Case',
        '7000 Series Silver Aluminum',
        'Ion-X Glass',
        'Retina Display',
        'Composite Back'
      ],
      band: 'Blue Fluoroelastomer\nStainless Steel Pin'
    },
    {
      color: 'green',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/aw-green.png',
      specs: [
        '38mm and 42mm Case',
        '7000 Series Silver Aluminum',
        'Ion-X Glass',
        'Retina Display',
        'Composite Back'
      ],
      band: 'Green Fluoroelastomer\nStainless Steel Pin'
    },
    {
      color: 'red',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/aw-red.png',
      specs: [
        '38mm and 42mm Case',
        '7000 Series Silver Aluminum',
        'Ion-X Glass',
        'Retina Display',
        'Composite Back'
      ],
      band: 'Pink Fluoroelastomer\nStainless Steel Pin'
    },
    {
      color: 'black',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/aw-black.png',
      specs: [
        '38mm and 42mm Case',
        '7000 Series Silver Aluminum',
        'Ion-X Glass',
        'Retina Display',
        'Composite Back'
      ],
      band: 'Black Fluoroelastomer\nStainless Steel Pin'
    }
  ];

  return (
    <section className="w-full h-screen pt-[5%] overflow-x-hidden overflow-y-scroll bg-gray-100 perspective-[150rem]">
      {products.map((product, index) => (
        <div 
          key={product.color} 
          className="relative w-full mb-[20%] pt-[10%] pb-[5%] transform-style-preserve-3d"
        >
          {/* Ground effect - теперь с правильным z-index */}
          <span className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <span className={`absolute top-0 left-1/2 h-full w-1/2 max-w-[50rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400/30 to-transparent bg-no-repeat transform -translate-x-1/2 ${
              index % 2 === 0 
                ? 'bg-[position:0_50%] animate-[floating-shadow-l_5s_-1s_infinite]' 
                : 'bg-[position:100%_50%] animate-[floating-shadow-r_5s_-1s_infinite]'
            }`} />
            <span className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-gray-300 to-gray-200 transform origin-top rotate-x-[-70deg] translate-y-full" />
          </span>

          {/* Product content - с повышенным z-index */}
          <figure className={`relative w-full max-w-[50rem] mx-auto flex items-center z-10 ${
            index % 2 === 0 ? '' : 'flex-row-reverse'
          }`}>
            <div className={`relative w-1/2 animate-[floating_5s_-1s_infinite]`}>
              <img 
                src={product.img} 
                alt={`Apple Watch ${product.color}`} 
                className="w-full h-auto transform -translate-z-12" 
              />
            </div>

            <figcaption className={`w-1/2 ${
              index % 2 === 0 
                ? 'pl-[10%] md:pl-[5%]' 
                : 'pr-[10%] md:pr-[5%] text-right'
            }`}>
              {/* ... содержимое описания ... */}
            </figcaption>
          </figure>
        </div>
      ))}

      <footer className="px-8 pb-[20%] text-center z-10">
        {/* ... футер ... */}
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
        @keyframes floating-shadow-l {
          0%, 100% { 
            background-size: 35% 80%;
            background-position: 10% 80%; 
          }
          50% { 
            background-size: 50% 80%;
            background-position: 0 80%; 
          }
        }
        @keyframes floating-shadow-r {
          0%, 100% { 
            background-size: 35% 80%;
            background-position: 90% 80%; 
          }
          50% { 
            background-size: 50% 80%;
            background-position: 100% 80%; 
          }
        }
        .perspective-150rem {
          perspective: 150rem;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .-translate-z-12 {
          transform: translateZ(-12px);
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase3D;
