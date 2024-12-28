import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Shield, Cpu, Globe } from 'lucide-react';

const Technology = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade encryption protecting your assets 24/7'
    },
    {
      icon: Cpu,
      title: 'Smart Contracts',
      description: 'Automated, trustless transactions with complete transparency'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Decentralized infrastructure spanning the globe'
    }
  ];

  return (
    <section id="technology" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Cutting-Edge Technology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl bg-black/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <feature.icon className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-yellow-100 mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;