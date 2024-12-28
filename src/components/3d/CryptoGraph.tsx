import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text } from '@react-three/drei';
import * as THREE from 'three';

const CryptoGraph: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const cryptoData = [
    { name: 'BTC', points: Array.from({ length: 10 }, (_, i) => [i * 0.5, Math.sin(i * 0.5) * 2, 0]) },
    { name: 'ETH', points: Array.from({ length: 10 }, (_, i) => [i * 0.5, Math.cos(i * 0.5) * 1.5, 0]) },
    { name: 'SOL', points: Array.from({ length: 10 }, (_, i) => [i * 0.5, Math.sin(i * 0.8) * 1.8, 0]) },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {cryptoData.map((crypto, index) => (
        <group key={crypto.name} position={[0, index * 2 - 2, 0]}>
          <Line
            points={crypto.points as [number, number, number][]}
            color={index === 0 ? "#FFD700" : index === 1 ? "#FFA500" : "#FF8C00"}
            lineWidth={2}
          />
          <Text
            position={[-1, 0, 0]}
            color="#FFD700"
            fontSize={0.5}
            anchorX="right"
          >
            {crypto.name}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default CryptoGraph;