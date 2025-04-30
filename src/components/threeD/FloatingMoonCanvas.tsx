import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingMoon from './FloatingMoon';

interface FloatingMoonCanvasProps {
  className?: string;
  phase?: number; // 0-1 representing moon phase
}

const FloatingMoonCanvas: React.FC<FloatingMoonCanvasProps> = ({
  className = '',
  phase = 0.5
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <FloatingMoon position={[0, 0, 0]} scale={0.8} phase={phase} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingMoonCanvas;