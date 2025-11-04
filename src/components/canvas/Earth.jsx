import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Sphere } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  return (
    <group>
      {/* Main Earth Sphere */}
      <Sphere args={[2.5, 64, 64]} scale={1}>
        <meshStandardMaterial
          color="#5A935E"
          metalness={0.4}
          roughness={0.6}
          emissive="#5A935E"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[2.6, 64, 64]} scale={1}>
        <meshBasicMaterial
          color="#D9DBBC"
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Inner Core Glow */}
      <Sphere args={[2.4, 32, 32]} scale={1}>
        <meshBasicMaterial
          color="#81667A"
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#D9DBBC" />
      <pointLight position={[-5, 0, -5]} intensity={0.5} color="#5A935E" />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
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
          autoRotateSpeed={0.5}
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