import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post('/api/login', { email, password });
      login(response.data);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue to-secondary-indigo flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-album-pattern opacity-20 bg-cover bg-center" />
      {/* Form Card */}
      <div className="glass-card rounded-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-poppins">Welcome Back</h2>
        <div className="space-y-6">
          <div className="relative">
            <label className="block text-white text-sm font-poppins mb-2">Email</label>
            <div className="flex items-center">
              <i className="fas fa-envelope text-primary-blue absolute left-3 text-lg" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="Enter your email"
                required
                aria-label="Email"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-white text-sm font-poppins mb-2">Password</label>
            <div className="flex items-center">
              <i className="fas fa-lock text-primary-blue absolute left-3 text-lg" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="Enter your password"
                required
                aria-label="Password"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/forgot-password"
              className="text-sm text-primary-blue hover:text-blue-400 transition"
            >
              Forgot Password?
            </Link>
            <Link
              to="/register"
              className="text-sm text-primary-blue hover:text-blue-400 transition"
            >
              Create an Account
            </Link>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-primary-blue to-secondary-indigo text-white p-3 rounded-lg font-poppins font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <i className="fas fa-spinner fa-spin mr-2"></i>
            ) : (
              <i className="fas fa-sign-in-alt mr-2"></i>
            )}
            {isLoading ? 'Logging In...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;