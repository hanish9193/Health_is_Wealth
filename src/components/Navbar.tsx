
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "glass-navbar transition-all duration-300",
      isScrolled ? "py-3 bg-white/15" : "py-5 bg-white/5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
            Health is Wealth
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="nav-link">Home</Link>
          <a href="#features" className="nav-link">Features</a>
          <a href="#telemedicine" className="nav-link">Telemedicine</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="gradient-button px-6 py-2">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/home" className="nav-link">Home</Link>
            <a href="#features" className="nav-link">Features</a>
            <a href="#telemedicine" className="nav-link">Telemedicine</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="gradient-button w-full">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
