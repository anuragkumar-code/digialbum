import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex space-x-6">
        <Link to="/homepage" className="text-primary-sea-green hover:text-hover-forest-green transition">
          <i className="fas fa-home text-2xl"></i>
        </Link>
        <Link to="/explore" className="text-primary-sea-green hover:text-hover-forest-green transition">
          <i className="fas fa-compass text-2xl"></i>
        </Link>
        <Link to="/profile" className="text-primary-sea-green hover:text-hover-forest-green transition">
          <i className="fas fa-user text-2xl"></i>
        </Link>
      </div>

      <Link
        to="/add-album"
        className="bg-primary-sea-green text-secondary-light-mint px-4 py-2 rounded-lg hover:bg-hover-forest-green transition whitespace-nowrap"
      >
        <i className="fas fa-plus mr-2"></i> Add Album
      </Link>
    </nav>
  );
};

export default HeaderNav;
