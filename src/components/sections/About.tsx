import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <animated.div style={fadeIn} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Revolutionizing Digital Finance
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            We're building the future of decentralized finance, empowering individuals and businesses 
            with blockchain technology that's accessible, secure, and scalable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Security First', value: '100%', desc: 'Secure Transactions' },
              { title: 'Global Scale', value: '150+', desc: 'Countries Served' },
              { title: 'Community', value: '1M+', desc: 'Active Users' }
            ].map((stat) => (
              <div key={stat.title} className="p-6 rounded-2xl bg-black/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">{stat.value}</h3>
                <p className="text-yellow-100/80">{stat.desc}</p>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;