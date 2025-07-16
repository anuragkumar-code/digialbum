import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validateForm = () => {
    if (!firstName || !surname || !dobDay || !dobMonth || !dobYear || !gender || !mobile || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields.');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    // Mobile validation (10 digits for simplicity)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return false;
    }

    // DOB validation
    const day = parseInt(dobDay, 10);
    const month = parseInt(dobMonth, 10);
    const year = parseInt(dobYear, 10);
    const currentYear = new Date().getFullYear();
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year < 1900 || year > currentYear) {
      toast.error(`Year must be between 1900 and ${currentYear}.`);
      return false;
    }
    if (month < 1 || month > 12) {
      toast.error('Month must be between 1 and 12.');
      return false;
    }
    if (day < 1 || day > daysInMonth[month - 1]) {
      toast.error(`Day must be valid for the selected month.`);
      return false;
    }

    // Age validation (must be at least 13 years old)
    const dob = new Date(year, month - 1, day);
    const ageDiff = new Date(Date.now() - dob.getTime());
    const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
    if (age < 13) {
      toast.error('You must be at least 13 years old to register.');
      return false;
    }

    // Password validation
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long.');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post('/api/register', {
        firstName,
        surname,
        dob: `${dobYear}-${dobMonth.padStart(2, '0')}-${dobDay.padStart(2, '0')}`,
        gender,
        mobile,
        email,
        password,
      });
      login(response.data);
      toast.success('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue to-secondary-indigo flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-album-pattern opacity-20 bg-cover bg-center" />
      {/* Form Card */}
      <div className="glass-card rounded-2xl p-8 w-full max-w-lg animate-fade-in">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-poppins">Create Your Account</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-white text-sm font-poppins mb-2">First Name</label>
              <div className="flex items-center">
                <i className="fas fa-user text-primary-blue absolute left-3 text-lg" />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                  placeholder="Enter first name"
                  required
                  aria-label="First Name"
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-white text-sm font-poppins mb-2">Surname</label>
              <div className="flex items-center">
                <i className="fas fa-user text-primary-blue absolute left-3 text-lg" />
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                  placeholder="Enter surname"
                  required
                  aria-label="Surname"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-white text-sm font-poppins mb-2">Day</label>
              <input
                type="number"
                value={dobDay}
                onChange={(e) => setDobDay(e.target.value)}
                className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="DD"
                min="1"
                max="31"
                required
                aria-label="Day of Birth"
              />
            </div>
            <div className="relative">
              <label className="block text-white text-sm font-poppins mb-2">Month</label>
              <input
                type="number"
                value={dobMonth}
                onChange={(e) => setDobMonth(e.target.value)}
                className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="MM"
                min="1"
                max="12"
                required
                aria-label="Month of Birth"
              />
            </div>
            <div className="relative">
              <label className="block text-white text-sm font-poppins mb-2">Year</label>
              <input
                type="number"
                value={dobYear}
                onChange={(e) => setDobYear(e.target.value)}
                className="w-full p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="YYYY"
                min="1900"
                max={new Date().getFullYear()}
                required
                aria-label="Year of Birth"
              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-white text-sm font-poppins mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                  required
                  aria-label="Male"
                />
                Male
              </label>
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                  required
                  aria-label="Female"
                />
                Female
              </label>
              <label className="flex items-center text-white">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                  required
                  aria-label="Other"
                />
                Other
              </label>
            </div>
          </div>
          <div className="relative">
            <label className="block text-white text-sm font-poppins mb-2">Mobile</label>
            <div className="flex items-center">
              <i className="fas fa-phone text-primary-blue absolute left-3 text-lg" />
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="Enter mobile number"
                required
                aria-label="Mobile Number"
              />
            </div>
          </div>
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
          <div className="relative">
            <label className="block text-white text-sm font-poppins mb-2">Confirm Password</label>
            <div className="flex items-center">
              <i className="fas fa-lock text-primary-blue absolute left-3 text-lg" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 p-3 bg-white bg-opacity-20 text-white placeholder-gray-300 border border-gray-200 border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition"
                placeholder="Confirm your password"
                required
                aria-label="Confirm Password"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link
              to="/login"
              className="text-sm text-primary-blue hover:text-blue-400 transition"
            >
              Already have an account? Login
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
              <i className="fas fa-user-plus mr-2"></i>
            )}
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;