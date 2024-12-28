import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface ShapeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

const CryptoShape: React.FC<ShapeProps & { shape: React.FC<any> }> = ({ position, rotation, scale, shape: Shape }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Shape
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshStandardMaterial
        color="#FFD700"
        metalness={0.8}
        roughness={0.2}
      />
    </Shape>
  );
};

const CryptoShapes: React.FC = () => {
  const shapes = [
    { shape: Box, position: [-4, 2, -5], rotation: [0.5, 0.5, 0], scale: 0.5 },
    { shape: Sphere, position: [4, -2, -3], rotation: [0, 0, 0], scale: 0.4 },
    { shape: Torus, position: [-3, -1, -4], rotation: [0.5, 0, 0], scale: 0.3 },
    { shape: Box, position: [3, 3, -6], rotation: [0.3, 0.4, 0], scale: 0.6 },
  ] as const;

  return (
    <group>
      {shapes.map((props, i) => (
        <CryptoShape key={i} {...props} />
      ))}
    </group>
  );
};

export default CryptoShapes;