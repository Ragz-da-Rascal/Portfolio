import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Earth = () => {
  const meshRef = useRef();

  // Rotate the earth slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Main Earth Sphere with noise/distortion */}
      <Sphere ref={meshRef} args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#5A935E"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>

      {/* Outer atmosphere glow */}
      <Sphere args={[2.65, 32, 32]}>
        <meshBasicMaterial
          color="#D9DBBC"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Inner glow layer */}
      <Sphere args={[2.45, 32, 32]}>
        <meshBasicMaterial
          color="#81667A"
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 3, 5]}
        intensity={1.5}
        color="#D9DBBC"
      />
      <pointLight
        position={[-5, -3, -5]}
        intensity={0.8}
        color="#5A935E"
      />
      <pointLight
        position={[0, 5, 0]}
        intensity={0.5}
        color="#81667A"
      />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        alpha: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;