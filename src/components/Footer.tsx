import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Phone,
  Mail,
  MapPin,
  Heart,
  ArrowUpCircle,
  Award,
  Star,
  Users,
  Activity,
  Video
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  // For scroll to top functionality
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to a newsletter service
    setShowSuccessMessage(true);
    setEmail('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  // Stats for the counter
  const stats = [
    { icon: <Users size={24} />, label: 'Happy Users', value: '10K+' },
    { icon: <Activity size={24} />, label: 'Health Checks', value: '50K+' },
    { icon: <Video size={24} />, label: 'Telemedicine Calls', value: '5K+' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, color: 'hover:text-blue-500' },
    { icon: <Twitter size={20} />, color: 'hover:text-blue-400' },
    { icon: <Instagram size={20} />, color: 'hover:text-green-500' },
    { icon: <Youtube size={20} />, color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="relative overflow-hidden mt-24">
      {/* Animated background blobs - blue and green theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute right-0 top-0 w-72 h-72 bg-green-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 w-48 h-48 bg-blue-400/10 rounded-full filter blur-2xl"></div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-4 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="flex justify-center mb-2">
                  <div className={`${hoverIndex === index ? "text-green-500" : "text-blue-500"} transition-colors duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">{stat.value}</h4>
                <p className="text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main footer content - blue, white, green theme */}
      <div className="bg-blue-500/5 backdrop-blur-lg border-t border-blue-200/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-blue-200/20 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4">
                Health is Wealth
              </h3>
              <p className="text-foreground/80 mb-4">
                Your trusted AI-powered health companion, providing symptom checking and telemedicine services.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`text-foreground/70 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-blue-200/20 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'Features', 'Telemedicine', 'About Us', 'Blog'].map((link, index) => (
                  <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                    <a href={link === 'Features' ? '#features' : link === 'Telemedicine' ? '#telemedicine' : '#'} 
                       className="text-foreground/80 hover:text-blue-500 transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-blue-200/20 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
                Legal
              </h4>
              <ul className="space-y-2">
                {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'HIPAA Compliance'].map((link, index) => (
                  <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                    <a href="#" className="text-foreground/80 hover:text-blue-500 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Us */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-blue-200/20 shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
              <h4 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-green-500">
                Contact Us
              </h4>
              <div className="space-y-3">
                {[
                  { icon: <Phone size={16} />, text: '+91 9193369369' },
                  { icon: <Mail size={16} />, text: 'hanish.kumar9193@gmail.com' },
                  { icon: <MapPin size={16} />, text: 'Chennai' }
                ].map((contact, index) => (
                  <p key={index} className="flex items-center gap-2 text-foreground/80 group transition-all duration-200 hover:text-blue-500">
                    <span className="text-green-500 group-hover:scale-110 transition-transform duration-200">
                      {contact.icon}
                    </span>
                    <span>{contact.text}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Newsletter and Copyright */}
          <div className="border-t border-blue-200/10 pt-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="text-foreground/70 text-sm flex items-center">
                <span className="mr-2">© 2025 HealthAI. All rights reserved.</span>
                <Heart size={16} className="text-green-500 animate-pulse" />
              </div>
              
              <div className="max-w-md ml-auto">
                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-2 px-4 rounded-l-full bg-white/10 backdrop-blur-md border border-blue-200/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-foreground placeholder-foreground/50"
                    />
                    <button 
                      type="submit"
                      className="flex items-center justify-center py-2 px-4 rounded-r-full bg-gradient-to-r from-blue-600 to-green-500 text-white transition-transform hover:translate-x-1"
                      aria-label="Subscribe"
                    >
                      <span className="mr-2 hidden sm:inline">Subscribe</span>
                      <Send size={18} />
                    </button>
                  </div>
                  
                  {/* Success message */}
                  {showSuccessMessage && (
                    <div className="absolute top-full left-0 right-0 mt-2 py-2 px-4 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-md text-green-100 text-sm flex items-center">
                      <span className="mr-2">✓</span>
                      Thank you for subscribing to our newsletter!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button - blue and green theme */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 p-2 rounded-full bg-gradient-to-r from-blue-600/80 to-green-500/80 backdrop-blur-md border border-white/20 text-white hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;