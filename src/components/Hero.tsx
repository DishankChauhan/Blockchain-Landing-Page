import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BlockchainNode from './3d/BlockchainNode';
import CryptoShapes from './3d/CryptoShapes';
import CryptoIcons from './3d/CryptoIcons';
import FloatingRings from './3d/FloatingRings';
import ParticleField from './3d/ParticleField';
import HexagonGrid from './3d/HexagonGrid';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <spotLight position={[-10, -10, -10]} intensity={0.5} />
          
          <group position={[0, 0, -5]}>
            <BlockchainNode />
            <CryptoShapes />
            <CryptoIcons />
            <FloatingRings />
            <ParticleField />
            <HexagonGrid />
          </group>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Decentralizing the Future
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the next generation of blockchain technology. Build, innovate, and transform the digital landscape with our cutting-edge Web3 solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black text-lg font-semibold hover:opacity-90 transition-opacity duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-yellow-500 rounded-full text-white text-lg font-semibold hover:bg-yellow-500/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-900/10 to-black pointer-events-none" />
    </div>
  );
};

export default Hero;