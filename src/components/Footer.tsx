import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-yellow-900/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              BlockchainX
            </h3>
            <p className="text-gray-400">
              Building the future of decentralized finance, one block at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#technology" className="text-gray-400 hover:text-yellow-400 transition-colors">Technology</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-yellow-400 transition-colors">Solutions</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-yellow-400 transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-yellow-900/30 text-center text-gray-400">
          <p>&copy; 2024 BlockchainX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;