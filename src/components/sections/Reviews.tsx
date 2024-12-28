import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      review: "Revolutionary platform that made Web3 accessible to everyone.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Michael Rodriguez",
      role: "DeFi Developer",
      review: "Best-in-class security and performance for blockchain applications.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Emma Thompson",
      role: "NFT Artist",
      review: "The perfect platform for creating and trading digital assets.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  const slideAnimation = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(-100%)' },
    config: { duration: 20000 },
    loop: true,
  });

  return (
    <section id="reviews" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          Customer Reviews
        </h2>
        <animated.div style={slideAnimation} className="flex gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="min-w-[350px] p-6 rounded-2xl bg-black/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-100">{review.name}</h3>
                  <p className="text-sm text-yellow-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{review.review}</p>
              <div className="flex mt-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </animated.div>
      </div>
    </section>
  );
};

export default Reviews;