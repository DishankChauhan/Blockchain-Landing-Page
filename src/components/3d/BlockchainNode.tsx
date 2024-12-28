import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import { Vector3 } from 'three';
import { useSpring, animated } from '@react-spring/three';

const BlockchainNode: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 36; // Increased node count
  const radius = 7; // Increased radius

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const angle = (i / nodeCount) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return new Vector3(x, y, 0);
  });

  const springs = useSpring({
    scale: [1, 1, 1],
    from: { scale: [0, 0, 0] },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <animated.group ref={groupRef} scale={springs.scale as any}>
      {nodes.map((pos, i) => (
        <React.Fragment key={i}>
          <Sphere position={[pos.x, pos.y, pos.z]} args={[0.2, 32, 32]}>
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.8}
              roughness={0.2}
              emissive="#B8860B"
              emissiveIntensity={0.5}
            />
          </Sphere>
          
          {nodes.map((endPos, j) => {
            if (j > i) {
              return (
                <Line
                  key={`${i}-${j}`}
                  points={[[pos.x, pos.y, pos.z], [endPos.x, endPos.y, endPos.z]]}
                  color="#B8860B"
                  lineWidth={1.5}
                  transparent
                  opacity={0.4}
                />
              );
            }
            return null;
          })}
        </React.Fragment>
      ))}
    </animated.group>
  );
};

export default BlockchainNode;