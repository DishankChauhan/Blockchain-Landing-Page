import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Roadmap: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

  const milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Platform Launch',
      description: 'Initial release of core blockchain infrastructure',
      status: 'completed'
    },
    {
      quarter: 'Q2 2024',
      title: 'Smart Contracts',
      description: 'Advanced smart contract deployment system',
      status: 'in-progress'
    },
    {
      quarter: 'Q3 2024',
      title: 'Cross-Chain Bridge',
      description: 'Multi-chain integration and bridge deployment',
      status: 'upcoming'
    },
    {
      quarter: 'Q4 2024',
      title: 'Governance',
      description: 'Decentralized governance implementation',
      status: 'upcoming'
    }
  ];

  return (
    <section id="roadmap" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Roadmap
        </h2>
        <animated.div ref={ref} style={slideIn} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-yellow-500/20" />
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 p-6 rounded-2xl bg-black/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="text-yellow-400 font-bold mb-2">{milestone.quarter}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 relative z-10" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Roadmap;