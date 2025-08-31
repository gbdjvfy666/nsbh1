import React from "react";

const HoverLink = ({ children, href = "#" }) => (
  <a href={href} className="relative inline-block px-1 py-1 font-medium text-gray-600 group overflow-hidden dark:text-gray-400">
    <span className="absolute inset-0 bg-gray-200 dark:bg-gray-700 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out z-0" />
    <span className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
      {children}
    </span>
  </a>
);
export default HoverLink;