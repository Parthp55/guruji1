import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CelestialSphere from './CelestialSphere';

interface CelestialSphereCanvasProps {
  className?: string;
  controlsEnabled?: boolean;
  autoRotate?: boolean;
}

const CelestialSphereCanvas: React.FC<CelestialSphereCanvasProps> = ({
  className = '',
  controlsEnabled = false,
  autoRotate = true
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <CelestialSphere position={[0, 0, 0]} scale={1} />
        </Suspense>
        {controlsEnabled && (
          <OrbitControls 
            enableZoom={false} 
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
    </div>
  );
};

export default CelestialSphereCanvas;