import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingRings: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ringsCount = 3;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: ringsCount }).map((_, i) => (
        <Torus
          key={i}
          args={[1.5 + i * 0.5, 0.1, 16, 100]}
          rotation={[Math.PI / 2, 0, i * (Math.PI / ringsCount)]}
        >
          <meshStandardMaterial
            color={i === 0 ? "#FFD700" : i === 1 ? "#FFA500" : "#FF8C00"}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
          />
        </Torus>
      ))}
    </group>
  );
};

export default FloatingRings;