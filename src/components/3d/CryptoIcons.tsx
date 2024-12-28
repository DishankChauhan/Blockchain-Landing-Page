import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface CryptoIconProps {
  position: [number, number, number];
  color: string;
  Icon: React.FC<{ color: string }>;
}

const CryptoIcon: React.FC<CryptoIconProps> = ({ position, color, Icon }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + position[0]) * 0.5;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Icon color={color} />
    </mesh>
  );
};

const Bitcoin: React.FC<{ color: string }> = ({ color }) => (
  <Sphere args={[0.5, 32, 32]}>
    <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
  </Sphere>
);

const Ethereum: React.FC<{ color: string }> = ({ color }) => (
  <Box args={[0.8, 0.8, 0.8]}>
    <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
  </Box>
);

const CryptoIcons: React.FC = () => {
  const icons = [
    { Icon: Bitcoin, position: [-2, 0, 0] as [number, number, number], color: '#FFD700' },
    { Icon: Ethereum, position: [2, 0, 0] as [number, number, number], color: '#8A2BE2' },
  ];

  return (
    <group>
      {icons.map((icon, i) => (
        <CryptoIcon key={i} {...icon} />
      ))}
    </group>
  );
};

export default CryptoIcons;