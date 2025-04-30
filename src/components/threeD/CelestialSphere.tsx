import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface CelestialSphereProps {
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
}

const CelestialSphere: React.FC<CelestialSphereProps> = ({
  position = [0, 0, 0],
  scale = 1,
  rotationSpeed = 0.001
}) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Rotate the sphere on each frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group position={new THREE.Vector3(...position)} scale={scale}>
      {/* Main celestial sphere */}
      <Sphere
        ref={sphereRef}
        args={[1, 64, 64]}
      >
        <meshStandardMaterial
          color="#5D87E1"
          emissive="#9D8AC0"
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
          metalness={0.3}
          roughness={0.7}
        />
      </Sphere>
      
      {/* Surrounding stars */}
      {Array.from({ length: 100 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 1.2 + Math.random() * 0.3;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        const starSize = 0.01 + Math.random() * 0.01;
        
        return (
          <Sphere key={i} args={[starSize, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color="#F0C987" />
          </Sphere>
        );
      })}
      
      {/* Zodiac constellations (simplified) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 1.1;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        
        return (
          <group key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <Sphere args={[0.02, 8, 8]}>
              <meshBasicMaterial color="#ffffff" />
            </Sphere>
            
            {/* Add a few more stars to form a mini constellation */}
            {Array.from({ length: 3 }).map((_, j) => {
              const offsetX = (j + 1) * 0.05;
              const offsetY = Math.sin(j * 2) * 0.05;
              
              return (
                <Sphere key={j} args={[0.01, 8, 8]} position={[offsetX, offsetY, 0]}>
                  <meshBasicMaterial color="#ffffff" />
                </Sphere>
              );
            })}
          </group>
        );
      })}
    </group>
  );
};

export default CelestialSphere;