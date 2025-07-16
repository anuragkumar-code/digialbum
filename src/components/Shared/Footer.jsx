import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-sea-green/80 text-text-dark-teal py-4 shadow-t-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm font-poppins mb-2 sm:mb-0 flex items-center gap-2">
          © {new Date().getFullYear()} MemoryLane. All rights reserved.
          <span className="hidden sm:inline-block text-red-500">❤️</span>
          <span className="hidden sm:inline-block">Built with love</span>
        </p>

        <div className="flex space-x-4">
          <Link to="/about" className="text-sm font-poppins hover:text-hover-forest-green transition">
            About
          </Link>
          <Link to="/contact" className="hidden text-sm font-poppins hover:text-hover-forest-green transition">
            Contact
          </Link>
          <Link to="/join-us" className="text-sm font-poppins hover:text-hover-forest-green transition">
            Join Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
