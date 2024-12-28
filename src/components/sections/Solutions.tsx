import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const Solutions = () => {
  const solutions = [
    {
      title: 'DeFi Platform',
      description: 'Decentralized financial services accessible to everyone'
    },
    {
      title: 'NFT Marketplace',
      description: 'Trade unique digital assets with complete ownership'
    },
    {
      title: 'Cross-Chain Bridge',
      description: 'Seamlessly transfer assets across different blockchains'
    }
  ];

  return (
    <section id="solutions" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Our Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="p-8 rounded-2xl bg-black/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300 relative z-10">
                <h3 className="text-2xl font-bold text-yellow-100 mb-4">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;