import React, { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import './BookComponent.css';

export default function BookComponent() {
  useEffect(() => {
    // Book animations code
    gsap.registerPlugin(CustomEase);
    CustomEase.create("bookEase", "0.25, 1, 0.5, 1");

    const books = document.querySelectorAll(".bc-books__item");
    books.forEach((book) => {
      const hitbox = book.querySelector(".bc-books__hitbox");
      const bookImage = book.querySelector(".bc-books__image");
      const bookEffect = book.querySelector(".bc-books__effect");
      const pages = book.querySelectorAll(".bc-books__page");
      const bookLight = book.querySelector(".bc-books__light");

      gsap.set(bookImage, {
        boxShadow: "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)"
      });

      gsap.set(bookLight, { opacity: 0.1, rotateY: 0 });
      gsap.set(pages, { x: 0 });

      const hoverIn = gsap.timeline({ paused: true });
      
      hoverIn.to(
        bookImage,
        {
          duration: 0.7,
          rotateY: -12,
          translateX: -6,
          scaleX: 0.96,
          boxShadow: "10px 10px 20px rgba(0,0,0,0.25), 20px 20px 40px rgba(0,0,0,0.2), 40px 40px 60px rgba(0,0,0,0.15)",
          ease: "bookEase"
        },
        0
      );

      hoverIn.to(bookEffect, { duration: 0.7, marginLeft: 10, ease: "bookEase" }, 0);
      hoverIn.to(bookLight, { duration: 0.7, opacity: 0.2, rotateY: -12, ease: "bookEase" }, 0);

      if (pages.length) {
        hoverIn.to(pages[0], { x: "4px", duration: 0.7, ease: "power1.inOut" }, 0);
        hoverIn.to(pages[1], { x: "2px", duration: 0.7, ease: "power1.inOut" }, 0);
        hoverIn.to(pages[2], { x: "0px", duration: 0.7, ease: "power1.inOut" }, 0);
      }

      const playAnimation = () => hoverIn.play();
      const reverseAnimation = () => hoverIn.reverse();
      
      hitbox.addEventListener("mouseenter", playAnimation);
      hitbox.addEventListener("mouseleave", reverseAnimation);

      return () => {
        hitbox.removeEventListener("mouseenter", playAnimation);
        hitbox.removeEventListener("mouseleave", reverseAnimation);
      };
    });
  }, []);

  return (
    <div className="bc-container">
      {/* Top Left Slogan */}
      <div className="bc-top-left">
        <h2 className="bc-heading">Books for Your Mental Health</h2>
      </div>

      {/* Top Right Decorative Circles */}
      <div className="bc-top-right">
        <div className="bc-circle bc-circle1"></div>
        <div className="bc-circle bc-circle2"></div>
      </div>

      {/* Main Content Row */}
      <div className="bc-main-content">
        {/* Left Creative Text Block */}
        <div className="bc-left-text">
          <h2 className="bc-heading">The Creative Spark</h2>
          <p className="bc-paragraph">
            Rick Rubin shows that creativity ignites from within. Every beat, every brushstroke, and every note is an invitation to explore your inner world.
          </p>
        </div>

        {/* Books Section (Centered) */}
        <div className="bc-books-wrapper">
          {/* Book 1 */}
          <div className="bc-books__item">
            <div className="bc-books__container">
              <div className="bc-books__cover">
                <div className="bc-books__back-cover"></div>
                <div className="bc-books__inside">
                  <div className="bc-books__page"></div>
                  <div className="bc-books__page"></div>
                  <div className="bc-books__page"></div>
                </div>
                <div className="bc-books__image">
                  <img
                    src="https://covers.shakespeareandcompany.com/97818388/9781838858636.jpg"
                    alt="Creative Act by Rick Rubin"
                  />
                  <div className="bc-books__effect"></div>
                  <div className="bc-books__light"></div>
                </div>
                <div className="bc-books__hitbox" data-book-index="0"></div>
              </div>
            </div>
            <div className="bc-books__title">
              Creative Act<br />
              Rick Rubin
            </div>
          </div>

          {/* Book 2 */}
          <div className="bc-books__item">
            <div className="bc-books__container">
              <div className="bc-books__cover">
                <div className="bc-books__back-cover"></div>
                <div className="bc-books__inside">
                  <div className="bc-books__page"></div>
                  <div className="bc-books__page"></div>
                  <div className="bc-books__page"></div>
                </div>
                <div className="bc-books__image">
                  <img
                    src="https://covers.shakespeareandcompany.com/97988885/9798888500002.jpg"
                    alt="Psychedelics and Mental Health by Irene de Caso"
                  />
                  <div className="bc-books__effect"></div>
                  <div className="bc-books__light"></div>
                </div>
                <div className="bc-books__hitbox" data-book-index="1"></div>
              </div>
            </div>
            <div className="bc-books__title">
              Psychedelics and Mental Health<br />
              Irene de Caso
            </div>
          </div>
        </div>

        {/* Right Creative Text Block */}
        <div className="bc-right-text">
          <h2 className="bc-heading">Mindful Transcendence</h2>
          <p className="bc-paragraph">
            In exploring the depths of consciousness, new dimensions of healing emerge. Every insight is a step toward transcending ordinary limits.
          </p>
        </div>
      </div>

      {/* Bottom Center Coordinates */}
      <div className="bc-bottom-center">
        <span className="bc-coordinates">Mountain Tara, Serbia (43.75° N, 19.67° E)</span>
      </div>
    </div>
  );
}