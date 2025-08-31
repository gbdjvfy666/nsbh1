import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function initSpaceSwiper(menuBtn) {
  // Constants and DOM elements
  const pageContainer = document.querySelector(".page-container");
  const horizontalContainer = document.querySelector(".horizontal-container");
  const panelsContainer = document.querySelector(".panels-container");
  const panels = document.querySelectorAll(".panel");
  const progressFill = document.querySelector(".nav-progress-fill");
  const navText = document.querySelectorAll(".nav-text")[1];
  const parallaxElements = document.querySelectorAll(".parallax");
  const leftMenu = menuBtn.closest(".left-menu");
  const sectionNavItems = document.querySelectorAll(".section-nav-item");
  const videoBackground = document.querySelector(".video-background");
  const copyEmailBtn = document.querySelector(".copy-email");
  const copyTooltip = document.querySelector(".copy-tooltip");

  // State variables
  const SMOOTH_FACTOR = 0.065;
  const WHEEL_SENSITIVITY = 1.0;
  const PANEL_COUNT = panels.length;
  let targetX = 0;
  let currentX = 0;
  let currentProgress = 0;
  let targetProgress = 0;
  let panelWidth = window.innerWidth;
  let maxScroll = (PANEL_COUNT - 1) * panelWidth;
  let isAnimating = false;
  let currentPanel = 0;
  let lastPanel = -1;
  let menuExpanded = false;
  let isDragging = false;
  let startX = 0;
  let startScrollX = 0;
  let velocityX = 0;
  let lastTouchX = 0;
  let lastTouchTime = 0;

  // Helper functions
  const lerp = (start, end, factor) => start + (end - start) * factor;
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  // Event handlers
  const handleCopyEmail = () => {
    const email = document.querySelector(".email").textContent;
    navigator.clipboard.writeText(email).then(() => {
      copyTooltip.classList.add("active");
      setTimeout(() => {
        copyTooltip.classList.remove("active");
      }, 2000);
    });
  };
  const handleNavItemClick = (e) => {
    const item = e.currentTarget;
    const index = Number.parseInt(item.getAttribute("data-index"));
    targetX = index * panelWidth;
    sectionNavItems.forEach(navItem => navItem.classList.remove("active"));
    item.classList.add("active");
    startAnimation();
    if (window.innerWidth < 768 && menuExpanded) {
      menuExpanded = false;
      leftMenu.classList.remove("expanded");
      document.body.classList.remove("menu-expanded");
      animateMenuItems(false);
      setTimeout(() => updateDimensions(false), 400);
    }
  };
  const handleWheel = (e) => {
    e.preventDefault();
    targetX = clamp(targetX + e.deltaY * WHEEL_SENSITIVITY, 0, maxScroll);
    startAnimation();
  };
  const handleMouseDown = (e) => {
    if (e.target.closest(".left-menu") || e.target.closest(".copy-email")) return;
    isDragging = true;
    startX = e.clientX;
    startScrollX = currentX;
    lastTouchX = e.clientX;
    lastTouchTime = Date.now();
    document.body.style.cursor = "grabbing";
    e.preventDefault();
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    targetX = clamp(startScrollX - dx, 0, maxScroll);
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTouchTime;
    if (timeDelta > 0) {
      const touchDelta = lastTouchX - e.clientX;
      velocityX = (touchDelta / timeDelta) * 15;
    }
    lastTouchX = e.clientX;
    lastTouchTime = currentTime;
    startAnimation();
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.style.cursor = "grab";
    if (Math.abs(velocityX) > 0.5) {
      targetX = clamp(targetX + velocityX * 8, 0, maxScroll);
    }
    const nearestPanel = Math.round(targetX / panelWidth);
    targetX = nearestPanel * panelWidth;
    startAnimation();
  };
  const handleTouchStart = (e) => {
    if (e.target.closest(".left-menu") || e.target.closest(".copy-email")) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    startScrollX = currentX;
    lastTouchX = e.touches[0].clientX;
    lastTouchTime = Date.now();
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    targetX = clamp(startScrollX - dx, 0, maxScroll);
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTouchTime;
    if (timeDelta > 0) {
      const touchDelta = lastTouchX - e.touches[0].clientX;
      velocityX = (touchDelta / timeDelta) * 12;
    }
    lastTouchX = e.touches[0].clientX;
    lastTouchTime = currentTime;
    e.preventDefault();
    startAnimation();
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    if (Math.abs(velocityX) > 0.5) {
      targetX = clamp(targetX + velocityX * 6, 0, maxScroll);
    }
    const nearestPanel = Math.round(targetX / panelWidth);
    targetX = nearestPanel * panelWidth;
    startAnimation();
  };
  const handleResize = () => updateDimensions();

  // Menu animation
  const animateMenuItems = (show) => {
    sectionNavItems.forEach((item, index) => {
      if (show) {
        setTimeout(() => {
          item.classList.add("animate-in");
        }, 50 + index * 30);
      } else {
        item.classList.remove("animate-in");
      }
    });
  };

  // Improved parallax effect
  const updateParallax = () => {
    const PARALLAX_INTENSITY = 0.2;
    parallaxElements.forEach((element) => {
      if (!element) return;
      const speed = Number.parseFloat(element.dataset.speed) || 0.2;
      const moveX = -currentX * speed * PARALLAX_INTENSITY;
      element.style.transform = `translateX(${moveX}px)`;
    });
  };

  // Update dimensions on resize
  const updateDimensions = (animate = true) => {
    panelWidth = window.innerWidth;
    maxScroll = (PANEL_COUNT - 1) * panelWidth;
    targetX = currentPanel * panelWidth;
    currentX = targetX;
    panels.forEach(panel => panel.style.width = `${panelWidth}px`);
    if (animate) {
      panelsContainer.classList.add("transitioning");
      setTimeout(() => panelsContainer.classList.remove("transitioning"), 400);
    }
    panelsContainer.style.transform = `translateX(-${currentX}px)`;
    updateParallax();
  };

  // Update page counter
  const updatePageCount = () => {
    const currentPanelIndex = Math.round(currentX / panelWidth) + 1;
    const formattedIndex = currentPanelIndex.toString().padStart(2, "0");
    const totalPanels = PANEL_COUNT.toString().padStart(2, "0");
    if (navText) navText.textContent = `${formattedIndex} / ${totalPanels}`;
    sectionNavItems.forEach((item, index) => {
      if (index === currentPanelIndex - 1) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Update progress bar
  const updateProgress = () => {
    targetProgress = currentX / maxScroll;
    currentProgress = lerp(currentProgress, targetProgress, SMOOTH_FACTOR * 1.5);
    if (progressFill) progressFill.style.transform = `scaleX(${currentProgress})`;
  };

  // Update active panel
  const updateActivePanel = () => {
    currentPanel = Math.round(currentX / panelWidth);
    if (currentPanel !== lastPanel) {
      panels.forEach(panel => panel.classList.remove("was-active", "active"));
      if (panels[currentPanel]) {
        panels[currentPanel].classList.add("active");
      }
      for (let i = 0; i < panels.length; i++) {
        if (i < currentPanel) {
          panels[i].classList.add("visited");
        } else {
          panels[i].classList.remove("visited");
        }
      }
      lastPanel = currentPanel;
    }
  };

  // Animation loop
  const animate = () => {
    currentX = lerp(currentX, targetX, SMOOTH_FACTOR);
    panelsContainer.style.transform = `translateX(-${currentX}px)`;
    updateProgress();
    updatePageCount();
    updateActivePanel();
    updateParallax();
    if (Math.abs(targetX - currentX) > 0.1 || isAnimating) {
      requestAnimationFrame(animate);
    } else {
      isAnimating = false;
    }
  };
  const startAnimation = () => {
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animate);
    }
  };

  // Add event listeners
  if (copyEmailBtn) copyEmailBtn.addEventListener("click", handleCopyEmail);
  sectionNavItems.forEach(item => item.addEventListener("click", handleNavItemClick));
  if (horizontalContainer) {
    horizontalContainer.addEventListener("wheel", handleWheel, { passive: false });
    horizontalContainer.addEventListener("mousedown", handleMouseDown);
    horizontalContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
    horizontalContainer.addEventListener("touchmove", handleTouchMove, { passive: false });
    horizontalContainer.addEventListener("touchend", handleTouchEnd, { passive: true });
  }
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  window.addEventListener("resize", handleResize);

  // Initialize
  updateDimensions();
  updateActivePanel();
  updatePageCount();
  startAnimation();
  setTimeout(() => {
    panels[0]?.classList.add("active");
    sectionNavItems[0]?.classList.add("active");
  }, 100);
  setTimeout(() => updateParallax(), 200);

  // Return cleanup function to remove event listeners
  return () => {
    if (copyEmailBtn) copyEmailBtn.removeEventListener("click", handleCopyEmail);
    sectionNavItems.forEach(item => item.removeEventListener("click", handleNavItemClick));
    if (horizontalContainer) {
      horizontalContainer.removeEventListener("wheel", handleWheel);
      horizontalContainer.removeEventListener("mousedown", handleMouseDown);
      horizontalContainer.removeEventListener("touchstart", handleTouchStart);
      horizontalContainer.removeEventListener("touchmove", handleTouchMove);
      horizontalContainer.removeEventListener("touchend", handleTouchEnd);
    }
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("resize", handleResize);
  };
}