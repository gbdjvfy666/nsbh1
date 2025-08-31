import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ThreeCubeAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Инициализация Three.js
    const backgroundColor = 0x222831;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(backgroundColor, 30, 300);

    const frustumSize = 3;
    const aspect = 1;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      2000
    );
    camera.position.set(10, 10, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(300, 300);
    renderer.setClearColor(backgroundColor);

    containerRef.current.appendChild(renderer.domElement);

    // Функция для создания текстуры
    const createAlphaMap = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 128;
      canvas.height = 128;

      ctx.fillStyle = '#FFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = '#000';
      ctx.fillRect(1, 1, canvas.width - 2, canvas.height - 2);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const tex = createAlphaMap();
    tex.magFilter = THREE.NearestFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.anisotropy = 2;

    // Создаем кубы
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      alphaMap: tex,
      opacity: 0.95,
      side: THREE.DoubleSide,
      color: '#E23E57'
    });

    const cube = new THREE.Mesh(geometry, material);
    const cubes = new THREE.Group();

    for (let i = 0, total = 8; i < total; i++) {
      const clone = cube.clone();
      clone.material = clone.material.clone();
      const hue = 0.15 * (i / total);
      const lightness = 0.15 * (i / total);
      clone.material.color.offsetHSL(hue, 0, lightness);
      clone.scale.set(
        1 - 0.9 * (i/total),
        1,
        1 - 0.9 * (i/total)
      );
      cubes.add(clone);
    }

    scene.add(cubes);

    // Анимация с GSAP
    const tl = gsap.timeline({
      repeat: -1,
      delay: 0.9,
      repeatDelay: 0.2,
      yoyo: true
    });

    tl.timeScale(0.8);

    cubes.children.forEach((cube, i, arr) => {
      const ratio = i / arr.length;
      
      tl.to(cube.rotation, {
        z: Math.PI * 2,
        x: Math.PI * -2,
        duration: 5,
        ease: "expo.inOut"
      }, 0.75 * (1 - ratio));
      
      tl.to(cube.scale, {
        y: 1 - 0.9 * ratio,
        duration: 1.25,
        ease: "expo.inOut"
      }, 0.75 * (1 - ratio));
      
      tl.to(cube.scale, {
        y: 1,
        duration: 1.25,
        ease: "expo.inOut"
      }, 3 + (0.75 * ratio));
    });

    tl.to(tex.offset, {
      x: 1,
      y: 1,
      duration: 1.25,
      ease: "power2.in"
    }, 2.25);

    tl.to(cubes.rotation, {
      x: Math.PI * 2,
      z: Math.PI * -2,
      duration: 5.75,
      ease: "expo.inOut"
    }, 0.25);

    // Анимационный цикл
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Очистка
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] bg-black overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default ThreeCubeAnimation;