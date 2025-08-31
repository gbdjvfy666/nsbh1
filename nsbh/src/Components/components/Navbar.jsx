import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-999999999 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative w-full">
        <div className="flex justify-between items-center h-15 px-8 md:px-16 lg:px-24">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Home"
              className="shrink-0 text-xl font-deutsch text-black dark:text-white transition-opacity hover:opacity-80"
            >
              NSBH
            </a>

            <div className="flex items-center gap-20 ml-50">
              <a className="text-base/6 text-gray-950 dark:text-white hover:text-amber-500 transition-colors" href="/web-development">
                Сайты
              </a>
              <a className="text-base/6 text-gray-950 dark:text-white hover:text-amber-500 transition-colors" href="/design">
                Дизайн
              </a>
              <a className="text-base/6 text-gray-950 dark:text-white hover:text-amber-500 transition-colors" href="/target">
                Таргет
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <a
              className="text-base/6 font-medium text-gray-950 dark:text-white hover:text-amber-500 transition-colors mr-8"
              href="/about"
            >
              О нас
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}