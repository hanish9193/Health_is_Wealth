import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Health is Wealth</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-[#14bef0] text-sm">About</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-[#14bef0] text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-[#14bef0] text-sm">Press</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#14bef0] text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">For Patients</h4>
            <ul className="space-y-2">
              <li><Link to="/doctors" className="text-gray-600 hover:text-[#14bef0] text-sm">Search for Doctors</Link></li>
              <li><Link to="/articles" className="text-gray-600 hover:text-[#14bef0] text-sm">Health Articles</Link></li>
              <li><Link to="/medicines" className="text-gray-600 hover:text-[#14bef0] text-sm">Medicines</Link></li>
              <li><Link to="/lab-tests" className="text-gray-600 hover:text-[#14bef0] text-sm">Lab Tests</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">For Doctors</h4>
            <ul className="space-y-2">
              <li><Link to="/doctor-profile" className="text-gray-600 hover:text-[#14bef0] text-sm">Doctor Profile</Link></li>
              <li><Link to="/for-doctors" className="text-gray-600 hover:text-[#14bef0] text-sm">For Doctors</Link></li>
              <li><Link to="/medical-software" className="text-gray-600 hover:text-[#14bef0] text-sm">Medical Software</Link></li>
              <li><Link to="/health-feed" className="text-gray-600 hover:text-[#14bef0] text-sm">Health Feed</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">For Hospitals</h4>
            <ul className="space-y-2">
              <li><Link to="/hospital-solutions" className="text-gray-600 hover:text-[#14bef0] text-sm">Hospital Solutions</Link></li>
              <li><Link to="/health-plans" className="text-gray-600 hover:text-[#14bef0] text-sm">Health Plans</Link></li>
              <li><Link to="/health-reach" className="text-gray-600 hover:text-[#14bef0] text-sm">Health Reach</Link></li>
              <li><Link to="/health-pro" className="text-gray-600 hover:text-[#14bef0] text-sm">Health Pro</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">More</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-[#14bef0] text-sm">Help</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-[#14bef0] text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-[#14bef0] text-sm">Terms & Conditions</Link></li>
              <li><Link to="/healthcare-directory" className="text-gray-600 hover:text-[#14bef0] text-sm">Healthcare Directory</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">&copy; 2025 Health is Wealth. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#14bef0] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#14bef0] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#14bef0] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#14bef0] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#14bef0] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;