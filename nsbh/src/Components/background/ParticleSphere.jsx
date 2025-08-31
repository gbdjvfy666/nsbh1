import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ParticleSphere = () => {
  const mountRef = useRef(null);
  const animationIdRef = useRef(null);
  
  // Основные ссылки на Three.js объекты
  const scene = useRef(new THREE.Scene());
  const renderer = useRef(null);
  const camera = useRef(null);
  const controls = useRef(null);
  const coreSphere = useRef(null);
  const orbitRings = useRef(null);

  useEffect(() => {
    // Инициализация сцены
    const width = 300;
    const height = 300;
    
    // Камера
    camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.current.position.z = 15;
    camera.current.position.y = 5;

    // Рендерер
    renderer.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.current.setSize(width, height);
    renderer.current.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.current.domElement);

    // Управление
    controls.current = new OrbitControls(camera.current, renderer.current.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.05;
    controls.current.rotateSpeed = 0.5;
    controls.current.minDistance = 10;
    controls.current.maxDistance = 30;
    controls.current.target.set(0, 0, 0);
    controls.current.update();

    // Шейдерный материал для частиц
    const pointMaterialShader = {
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        uniform float time;
        
        void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vDistance = -mvPosition.z;
            float pulse = sin(time * 2.0 + length(position)) * 0.15 + 1.0;
            vec3 pos = position;
            pos.x += sin(time + position.z * 0.5) * 0.05;
            pos.y += cos(time + position.x * 0.5) * 0.05;
            pos.z += sin(time + position.y * 0.5) * 0.05;
            mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z) * pulse;
            gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDistance;
        uniform float time;
        
        void main() {
            vec2 cxy = 2.0 * gl_PointCoord - 1.0;
            float r = dot(cxy, cxy);
            if (r > 1.0) discard;
            float glow = exp(-r * 2.5);
            float outerGlow = exp(-r * 1.5) * 0.3;
            vec3 finalColor = vColor * (1.2 + sin(time * 0.5) * 0.1);
            finalColor += vec3(0.2, 0.4, 0.6) * outerGlow;
            float distanceFade = 1.0 - smoothstep(0.0, 50.0, vDistance);
            float intensity = mix(0.7, 1.0, distanceFade);
            gl_FragColor = vec4(finalColor * intensity, (glow + outerGlow) * distanceFade);
        }
      `
    };

    // Создание спиральной сферы
    const createSpiralSphere = (radius, particleCount, colors) => {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const particleColors = [];
      const sizes = [];
      
      for (let i = 0; i < particleCount; i++) {
          const phi = Math.acos(-1 + (2 * i) / particleCount);
          const theta = Math.sqrt(particleCount * Math.PI) * phi;
          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.sin(phi) * Math.sin(theta);
          const z = radius * Math.cos(phi);
          positions.push(x, y, z);
          
          const colorPos = i / particleCount;
          const color1 = colors[Math.floor(colorPos * (colors.length - 1))];
          const color2 = colors[Math.ceil(colorPos * (colors.length - 1))];
          const mixRatio = (colorPos * (colors.length - 1)) % 1;
          const finalColor = new THREE.Color().lerpColors(color1, color2, mixRatio);
          particleColors.push(finalColor.r, finalColor.g, finalColor.b);
          sizes.push(Math.random() * 0.15 + 0.08);
      }
      
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(particleColors, 3));
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
      
      const material = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 } },
          vertexShader: pointMaterialShader.vertexShader,
          fragmentShader: pointMaterialShader.fragmentShader,
          vertexColors: true,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending
      });
      
      return new THREE.Points(geometry, material);
    };

    // Создание орбитальных колец
    const createOrbitRings = (radius, count, thickness) => {
      const group = new THREE.Group();
      
      for (let i = 0; i < count; i++) {
          const ringGeometry = new THREE.BufferGeometry();
          const positions = [];
          const colors = [];
          const sizes = [];
          const particleCount = 1500;
          
          for (let j = 0; j < particleCount; j++) {
              const angle = (j / particleCount) * Math.PI * 2;
              const radiusVariation = radius + (Math.random() - 0.5) * thickness;
              const x = Math.cos(angle) * radiusVariation;
              const y = (Math.random() - 0.5) * thickness;
              const z = Math.sin(angle) * radiusVariation;
              positions.push(x, y, z);
              const hue = (i / count) * 0.7 + (j / particleCount) * 0.3;
              const color = new THREE.Color().setHSL(hue, 1, 0.6);
              color.multiplyScalar(1.2);
              colors.push(color.r, color.g, color.b);
              sizes.push(Math.random() * 0.12 + 0.06);
          }
          
          ringGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
          ringGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
          ringGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
          
          const material = new THREE.ShaderMaterial({
              uniforms: { time: { value: 0 } },
              vertexShader: pointMaterialShader.vertexShader,
              fragmentShader: pointMaterialShader.fragmentShader,
              vertexColors: true,
              transparent: true,
              depthWrite: false,
              blending: THREE.AdditiveBlending
          });
          
          const ring = new THREE.Points(ringGeometry, material);
          ring.rotation.x = Math.random() * Math.PI;
          ring.rotation.y = Math.random() * Math.PI;
          group.add(ring);
      }
      
      return group;
    };

    // Цвета для сферы
    const sphereColors = [
      new THREE.Color(0x00ffff).multiplyScalar(1.2),
      new THREE.Color(0xff1493).multiplyScalar(1.1),
      new THREE.Color(0x4169e1).multiplyScalar(1.2),
      new THREE.Color(0xff69b4).multiplyScalar(1.1),
      new THREE.Color(0x00bfff).multiplyScalar(1.2)
    ];

    // Создаем объекты
    coreSphere.current = createSpiralSphere(4, 8000, sphereColors);
    orbitRings.current = createOrbitRings(5.8, 6, 0.4);

    const mainGroup = new THREE.Group();
    mainGroup.scale.set(1.2, 1.2, 1.2);
    mainGroup.add(coreSphere.current);
    mainGroup.add(orbitRings.current);
    scene.current.add(mainGroup);

    // Анимация
    let time = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.01;
      
      // Анимация сферы
      if (coreSphere.current) {
        coreSphere.current.material.uniforms.time.value = time;
        coreSphere.current.rotation.y += 0.005;
        coreSphere.current.rotation.x = Math.sin(time * 0.5) * 0.15;
        const breathe = 1 + Math.sin(time * 1.5) * 0.1;
        coreSphere.current.scale.set(breathe, breathe, breathe);
      }
      
      // Анимация колец
      if (orbitRings.current) {
        orbitRings.current.children.forEach((ring, index) => {
          const dynamicSpeed = 0.001 * (Math.sin(time * 0.2) + 2.0) * (index + 1);
          ring.rotation.z += dynamicSpeed;
          ring.rotation.x += dynamicSpeed * 0.6;
          ring.rotation.y += dynamicSpeed * 0.4;
          ring.material.uniforms.time.value = time;
        });
      }
      
      if (controls.current) controls.current.update();
      if (renderer.current && camera.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };

    animate();

    // Очистка
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      if (mountRef.current && renderer.current?.domElement) {
        mountRef.current.removeChild(renderer.current.domElement);
      }
      renderer.current?.dispose();
      controls.current?.dispose();
      
      // Очистка геометрии и материалов
      [coreSphere.current, ...(orbitRings.current?.children || [])].forEach(obj => {
        if (obj) {
          obj.geometry?.dispose();
          obj.material?.dispose();
        }
      });
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden border border-purple-500/20 shadow-xl">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default ParticleSphere;