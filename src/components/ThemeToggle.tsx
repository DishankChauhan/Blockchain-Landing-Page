import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const properties = useSpring({
    transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.button
      style={properties}
      onClick={onToggle}
      className="fixed top-24 right-6 z-50 p-3 rounded-full bg-black/50 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-yellow-400" />
      )}
    </animated.button>
  );
};

export default ThemeToggle;