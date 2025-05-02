import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  User,
  ShoppingCart,
  Calendar,
  Stethoscope
} from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useState('Bangalore');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Stethoscope className="h-8 w-8 text-[#14bef0]" />
            <span className="ml-2 text-xl font-bold text-[#14bef0]">Health is Wealth</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#14bef0]">
                Find Doctors <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-top-left z-50">
                <Link to="/doctors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Specialties</Link>
                <Link to="/doctors?specialty=dentist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dentist</Link>
                <Link to="/doctors?specialty=gynecologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gynecologist</Link>
                <Link to="/doctors?specialty=dermatologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dermatologist</Link>
              </div>
            </div>
            <Link to="/video-consult" className="text-gray-700 hover:text-[#14bef0]">Video Consult</Link>
            <Link to="/medicines" className="text-gray-700 hover:text-[#14bef0]">Medicines</Link>
            <Link to="/lab-tests" className="text-gray-700 hover:text-[#14bef0]">Lab Tests</Link>
            <Link to="/surgeries" className="text-gray-700 hover:text-[#14bef0]">Surgeries</Link>
          </nav>

          {/* Location Selector */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center mr-6 text-gray-700">
              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent border-none text-sm focus:outline-none"
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-[#14bef0] flex items-center">
                <User className="h-4 w-4 mr-1" /> Login / Signup
              </button>
              <Link to="/cart" className="text-gray-700 hover:text-[#14bef0]">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 px-4 py-4">
          <div className="flex items-center mb-4">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none text-sm focus:outline-none"
            >
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
          <div className="space-y-3">
            <Link 
              to="/doctors" 
              className="block py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Find Doctors
              </div>
            </Link>
            <Link 
              to="/video-consult" 
              className="block py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Video Consult
              </div>
            </Link>
            <Link 
              to="/medicines" 
              className="block py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Medicines
              </div>
            </Link>
            <Link 
              to="/lab-tests" 
              className="block py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Lab Tests
            </Link>
            <Link 
              to="/surgeries" 
              className="block py-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Surgeries
            </Link>
            <button className="w-full py-2 mt-2 text-white bg-[#14bef0] rounded-md">
              Login / Signup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;