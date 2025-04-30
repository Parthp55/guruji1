import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const planetColors = [
  '#5D87E1', // Blue
  '#9D8AC0', // Purple
  '#F0C987', // Gold
  '#5EAAA8', // Teal
  '#E88D67', // Orange
];

interface FloatingPlanetsProps {
  count?: number;
  scale?: number;
}

const FloatingPlanets: React.FC<FloatingPlanetsProps> = ({
  count = 5,
  scale = 1
}) => {
  const planetsRef = useRef<THREE.Group>(null);
  
  // Float the planets with different speeds
  useFrame(({ clock }) => {
    if (planetsRef.current) {
      planetsRef.current.children.forEach((planet, index) => {
        const time = clock.getElapsedTime();
        const offset = index * 0.5;
        
        // Different vertical floating patterns for each planet
        planet.position.y = Math.sin(time * 0.3 + offset) * 0.2;
        
        // Slight horizontal movement
        planet.position.x += Math.sin(time * 0.2 + offset) * 0.001;
        planet.position.z += Math.cos(time * 0.2 + offset) * 0.001;
        
        // Keep planets within bounds
        if (Math.abs(planet.position.x) > 3) {
          planet.position.x *= -0.9;
        }
        if (Math.abs(planet.position.z) > 3) {
          planet.position.z *= -0.9;
        }
        
        // Rotate planets
        planet.rotation.y += 0.002 * (index % 2 === 0 ? 1 : -1);
      });
    }
  });

  // Generate random positions for planets
  const generatePlanetPositions = () => {
    return Array.from({ length: count }).map(() => {
      const x = (Math.random() - 0.5) * 5;
      const y = (Math.random() - 0.5) * 2;
      const z = (Math.random() - 0.5) * 3 - 2; // Mostly behind the camera
      const size = 0.1 + Math.random() * 0.3;
      const colorIndex = Math.floor(Math.random() * planetColors.length);
      
      return { position: [x, y, z], size, color: planetColors[colorIndex] };
    });
  };
  
  const planets = generatePlanetPositions();

  return (
    <group ref={planetsRef} scale={scale}>
      {planets.map((planet, index) => (
        <Sphere
          key={index}
          args={[planet.size, 32, 32]}
          position={new THREE.Vector3(...planet.position as [number, number, number])}
        >
          <meshStandardMaterial
            color={planet.color}
            emissive={planet.color}
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.7}
          />
        </Sphere>
      ))}
      
      {/* Add stars in the background */}
      {Array.from({ length: 50 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 5 - 5; // Behind the planets
        const starSize = 0.01 + Math.random() * 0.03;
        
        return (
          <Sphere key={`star-${i}`} args={[starSize, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial color="#ffffff" />
          </Sphere>
        );
      })}
    </group>
  );
};

export default FloatingPlanets;