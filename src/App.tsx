import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/sections/About';
import Technology from './components/sections/Technology';
import Solutions from './components/sections/Solutions';
import CryptoStats from './components/sections/CryptoStats';
import Reviews from './components/sections/Reviews';
import Partners from './components/sections/Partners';
import Roadmap from './components/sections/Roadmap';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-100'} text-white transition-colors duration-300`}>
      <Navigation />
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <Hero />
      <About />
      <Technology />
      <Solutions />
      <CryptoStats />
      <Reviews />
      <Partners />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;