import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingPlanets from './FloatingPlanets';

interface FloatingPlanetsCanvasProps {
  className?: string;
}

const FloatingPlanetsCanvas: React.FC<FloatingPlanetsCanvasProps> = ({
  className = ''
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <FloatingPlanets count={7} scale={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingPlanetsCanvas;