import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Ethereum Foundation",
      role: "Blockchain Infrastructure",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Chainlink Labs",
      role: "Oracle Network",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Polygon Network",
      role: "Scaling Solution",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Avalanche",
      role: "Smart Contract Platform",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=300"
    },
    // Additional partners for smoother scrolling effect
    {
      name: "Solana",
      role: "High-Performance Blockchain",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Binance",
      role: "Exchange Platform",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=300"
    }
  ];

  const [{ x }, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: -50 },
    loop: true,
    config: {
      tension: 20,
      friction: 10,
      duration: 50000 // Slower, smoother animation
    }
  }));

  return (
    <section id="partners" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Trusted Partners
        </h2>
        <div className="relative">
          <animated.div 
            style={{ x }}
            className="flex space-x-8 mb-12"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="group relative min-w-[300px] overflow-hidden rounded-2xl aspect-square flex-shrink-0"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-yellow-400">{partner.name}</h3>
                  <p className="text-yellow-200/80">{partner.role}</p>
                </div>
              </div>
            ))}
          </animated.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { label: 'Partners', value: '50+' },
            { label: 'Countries', value: '30+' },
            { label: 'Projects', value: '200+' },
            { label: 'TVL', value: '$2B+' }
          ].map(stat => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-black/50 border border-yellow-900/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent absolute top-1/4" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent absolute top-2/4" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent absolute top-3/4" />
      </div>
    </section>
  );
};

export default Partners;