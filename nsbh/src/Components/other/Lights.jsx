// Lights.js
import React, { useRef, useEffect } from 'react';
import { useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';

export function Lights() {
  const keyLightRef = useRef();
  const rimLightRef = useRef();

  useEffect(() => {
    if (keyLightRef.current) {
      keyLightRef.current.target.position.set(0, 0, 0);
      keyLightRef.current.target.updateMatrixWorld();
    }
    if (rimLightRef.current) {
      rimLightRef.current.target.position.set(0, 0, 0);
      rimLightRef.current.target.updateMatrixWorld();
    }
  }, []);

  return (
    <>
      {/* Мягкий амбиент */}
      <ambientLight intensity={0.7} color={'#f0f4ff'} />

      {/* Основной направленный свет */}
      <directionalLight
        ref={keyLightRef}
        position={[-5, 5, 5]}
        intensity={1.6}
        color={'#e6ecff'}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Контурный свет сзади */}
      <directionalLight
        ref={rimLightRef}
        position={[0, 3, -6]}
        intensity={1.2}
        color={'#cfd6ff'}
      />

      {/* Заполняющий справа → мягкий баланс */}
      <directionalLight
        position={[4, 2, 2]}
        intensity={0.6}
        color={'#f0f4ff'}
      />

      {/* Холодные акценты (точечные огни по краям) */}
      <pointLight position={[2.5, 1, -3]} intensity={1.4} color={'#dfe4ff'} />
      <pointLight position={[-2.5, 1, -3]} intensity={1.4} color={'#dfe4ff'} />

      {/* Мягкий spot-light сбоку сверху */}
      <spotLight
        position={[2, 6, 6]}     // сдвинутый вправо и вверх
        angle={0.25}
        penumbra={0.7}
        intensity={0.8}
        color={'#f6faff'}
        castShadow
      />
    </>
  );
}
