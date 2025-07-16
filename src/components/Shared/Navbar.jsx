import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
    setDropdownOpen(false);
  };

  const displayName = user ? user.email.split('@')[0] : 'Guest';

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary-sea-green/80 shadow-lg z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link to="/dashboard" className="text-secondary-light-mint text-xl font-merriweather font-bold hover:text-hover-forest-green">
          MemoryLane
        </Link>
        <div className="flex-grow mx-6 max-w-md">
          <div className="relative">
            <i className="fas fa-search text-secondary-light-mint absolute left-3 top-1/2 transform -translate-y-1/2 text-lg"></i>
            <input
              type="text"
              placeholder="Search memories..."
              className="search-bar w-full pl-10 p-2"
              aria-label="Search Memories"
            />
          </div>
        </div>
        <div className="relative">
          <button
            className="text-secondary-light-mint focus:outline-none hover:text-hover-forest-green"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            aria-label="User Menu"
          >
            <i className="fas fa-user-circle text-2xl"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-primary-sea-green rounded-lg shadow-lg animate-fade-in">
              <Link
                to="/profile"
                className="block px-4 py-2 text-secondary-light-mint hover:bg-hover-forest-green hover:text-text-dark-teal font-poppins flex items-center"
                onClick={() => setDropdownOpen(false)}
              >
                <i className="fas fa-user mr-2"></i> {displayName}
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-secondary-light-mint hover:bg-hover-forest-green hover:text-text-dark-teal font-poppins flex items-center"
                onClick={() => setDropdownOpen(false)}
              >
                <i className="fas fa-cog mr-2"></i> Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-secondary-light-mint hover:bg-hover-forest-green hover:text-text-dark-teal font-poppins flex items-center"
              >
                <i className="fas fa-sign-out-alt mr-2"></i> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;