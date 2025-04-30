import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingMoonProps {
  position?: [number, number, number];
  scale?: number;
  phase?: number; // 0-1 representing moon phase
}

const FloatingMoon: React.FC<FloatingMoonProps> = ({
  position = [0, 0, 0],
  scale = 1,
  phase = 0.5
}) => {
  const moonRef = useRef<THREE.Mesh>(null);
  
  // Subtle floating animation
  useFrame(({ clock }) => {
    if (moonRef.current) {
      moonRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
      moonRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={new THREE.Vector3(...position)} scale={scale}>
      <Sphere
        ref={moonRef}
        args={[1, 32, 32]}
      >
        <meshStandardMaterial
          color="#E2D1C3"
          emissive="#F5E6D3"
          emissiveIntensity={0.2}
          metalness={0.1}
          roughness={0.8}
        />
      </Sphere>
      
      {/* Shadow to create moon phase */}
      <Sphere
        args={[0.99, 32, 32]}
        position={[Math.cos(phase * Math.PI * 2) * 0.1, 0, 0]}
      >
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.8}
        />
      </Sphere>
    </group>
  );
};

export default FloatingMoon;