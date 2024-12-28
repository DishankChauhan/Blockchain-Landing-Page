import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  const buttonProps = useSpring({
    scale: isSubmitted ? 1.2 : 1,
    config: { tension: 300, friction: 10 },
  });

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest updates on our blockchain technology and ecosystem
          </p>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-black/50 border border-yellow-900/30 focus:border-yellow-500/50 outline-none text-white placeholder-gray-500 transition-all duration-300"
              required
            />
            <animated.button
              style={buttonProps}
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-black hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
            >
              <span>Subscribe</span>
              <Send size={16} />
            </animated.button>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-green-400">Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;