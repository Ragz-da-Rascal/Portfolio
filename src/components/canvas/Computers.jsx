import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense, useEffect, useState} from 'react';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  console.log(computer)

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15}
        groundColor="black"
      />    

      <pointLight 
        intensity={1}
      />

      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive 
        object={computer.scene}
        scale={0.45}
        position={[0, -1.35, -1.0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia(`(max-width: 500px)`);

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
  
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted

  }, [])
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera = {{position: [4.5, -4.5, 0], fov: 80}}
      gl={{preserveDrawingBuffer: true}}
      className='hidden sm:flex'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />

        <Computers />
      </Suspense>
      
      <Preload all />

    </Canvas>
  )
}
export default ComputersCanvas;