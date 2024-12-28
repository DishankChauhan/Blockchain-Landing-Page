import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CryptoGraph from '../3d/CryptoGraph';

const CryptoStats: React.FC = () => {
  return (
    <section id="crypto-stats" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Live Crypto Trends
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[600px] rounded-2xl bg-black/50 border border-yellow-900/30 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 10] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <CryptoGraph />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-black/50 border border-yellow-900/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Market Overview</h3>
              <div className="space-y-4">
                {[
                  { name: 'Bitcoin', price: '$45,234', change: '+5.2%' },
                  { name: 'Ethereum', price: '$3,123', change: '+3.8%' },
                  { name: 'Solana', price: '$98.45', change: '+7.1%' },
                  { name: 'Avalanche', price: '$34.56', change: '+4.3%' }
                ].map(coin => (
                  <div key={coin.name} className="flex justify-between items-center p-3 rounded-lg bg-black/30">
                    <span className="text-white">{coin.name}</span>
                    <div className="text-right">
                      <div className="text-yellow-400">{coin.price}</div>
                      <div className="text-green-400 text-sm">{coin.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-black/50 border border-yellow-900/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Network Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/30">
                  <div className="text-sm text-gray-400">Total Transactions</div>
                  <div className="text-xl text-yellow-400">2.5M+</div>
                </div>
                <div className="p-4 rounded-lg bg-black/30">
                  <div className="text-sm text-gray-400">Active Wallets</div>
                  <div className="text-xl text-yellow-400">850K+</div>
                </div>
                <div className="p-4 rounded-lg bg-black/30">
                  <div className="text-sm text-gray-400">Gas Price</div>
                  <div className="text-xl text-yellow-400">25 Gwei</div>
                </div>
                <div className="p-4 rounded-lg bg-black/30">
                  <div className="text-sm text-gray-400">Block Time</div>
                  <div className="text-xl text-yellow-400">12.5s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent absolute left-1/4" />
        <div className="h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent absolute left-2/4" />
        <div className="h-full w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent absolute left-3/4" />
      </div>
    </section>
  );
};

export default CryptoStats;