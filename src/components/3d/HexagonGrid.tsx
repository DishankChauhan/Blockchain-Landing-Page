import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const HexagonGrid: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const gridSize = 4;
  const hexRadius = 0.3;
  const spacing = hexRadius * 2;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  const createHexagonPositions = () => {
    const positions: [number, number, number][] = [];
    for (let q = -gridSize; q <= gridSize; q++) {
      for (let r = -gridSize; r <= gridSize; r++) {
        if (Math.abs(q + r) <= gridSize) {
          const x = spacing * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r);
          const z = spacing * (3 / 2 * r);
          positions.push([x, 0, z]);
        }
      }
    }
    return positions;
  };

  return (
    <group ref={groupRef}>
      {createHexagonPositions().map((position, i) => (
        <Cylinder
          key={i}
          args={[hexRadius, hexRadius, 0.1, 6]}
          position={position}
        >
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </Cylinder>
      ))}
    </group>
  );
};

export default HexagonGrid;