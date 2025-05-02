import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, ArrowRight, Shield, Award, ThumbsUp, FileText, Clock, Truck } from 'lucide-react';

const LabTests = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      description: 'Measures different components of blood',
      price: 400,
      discountedPrice: 299,
      parameters: 25,
      reportTime: '24 hours',
      image: 'https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Diabetes Screening',
      description: 'Checks blood sugar levels',
      price: 800,
      discountedPrice: 599,
      parameters: 15,
      reportTime: '24 hours',
      image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Thyroid Profile',
      description: 'Comprehensive thyroid function test',
      price: 1200,
      discountedPrice: 899,
      parameters: 8,
      reportTime: '24 hours',
      image: 'https://images.pexels.com/photos/4226224/pexels-photo-4226224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Lipid Profile',
      description: 'Checks cholesterol levels',
      price: 600,
      discountedPrice: 449,
      parameters: 12,
      reportTime: '24 hours',
      image: 'https://images.pexels.com/photos/4226251/pexels-photo-4226251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const healthPackages = [
    {
      id: 1,
      name: 'Basic Health Checkup',
      tests: ['Complete Blood Count', 'Liver Function', 'Kidney Function', 'Lipid Profile'],
      price: 2500,
      discountedPrice: 1999,
      image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Comprehensive Health Package',
      tests: ['Complete Blood Count', 'Diabetes Screening', 'Thyroid Profile', 'Vitamin D', 'Vitamin B12'],
      price: 4000,
      discountedPrice: 2999,
      image: 'https://images.pexels.com/photos/4226269/pexels-photo-4226269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#14bef0] to-[#3590f3] rounded-xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Lab Tests & Health Checkups
              </h1>
              <p className="text-white text-lg mb-6 opacity-90">
                Get tested at NABL accredited labs with free home sample collection
              </p>
              
              {/* Search Box */}
              <div className="bg-white rounded-lg shadow-lg p-2">
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search for tests, packages..."
                      className="w-full bg-transparent border-none pl-10 pr-3 py-2 focus:outline-none text-gray-700"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <button className="bg-[#14bef0] text-white py-2 px-6 rounded-md hover:bg-[#0ea5d3] transition duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Lab Tests"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-[#14bef0]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">NABL Accredited Labs</h3>
                <p className="text-gray-600">100% accurate results</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <Truck className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Free Home Collection</h3>
                <p className="text-gray-600">Samples collected at your doorstep</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Timely Reports</h3>
                <p className="text-gray-600">Get reports within 24-48 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-50 p-3 rounded-full mr-4">
                <FileText className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Digital Reports</h3>
                <p className="text-gray-600">Access reports online anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tests */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Lab Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTests.map((test) => (
              <div key={test.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={test.image}
                    alt={test.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{test.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{test.description}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-4">
                      <FileText className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{test.parameters} Parameters</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{test.reportTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="font-bold text-gray-800 text-lg mr-2">₹{test.discountedPrice}</span>
                    <span className="text-gray-500 text-sm line-through">₹{test.price}</span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                      {Math.round((test.price - test.discountedPrice) / test.price * 100)}% off
                    </span>
                  </div>
                  <button className="w-full py-2 bg-[#14bef0] text-white rounded-md hover:bg-[#0ea5d3] transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health Packages */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img 
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="font-bold text-gray-800 text-xl mb-2">{pkg.name}</h3>
                    <ul className="text-gray-600 text-sm mb-4">
                      {pkg.tests.map((test, index) => (
                        <li key={index} className="mb-1">• {test}</li>
                      ))}
                    </ul>
                    <div className="flex items-center mb-4">
                      <span className="font-bold text-gray-800 text-lg mr-2">₹{pkg.discountedPrice}</span>
                      <span className="text-gray-500 text-sm line-through">₹{pkg.price}</span>
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                        {Math.round((pkg.price - pkg.discountedPrice) / pkg.price * 100)}% off
                      </span>
                    </div>
                    <button className="bg-[#14bef0] text-white px-6 py-2 rounded-md hover:bg-[#0ea5d3] transition duration-300">
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-[#14bef0]" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Book Test</h3>
              <p className="text-gray-600 text-sm">Select tests and choose your preferred slot</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Sample Collection</h3>
              <p className="text-gray-600 text-sm">Our phlebotomist will collect samples at your home</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Lab Processing</h3>
              <p className="text-gray-600 text-sm">Samples are processed at NABL accredited labs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">View Reports</h3>
              <p className="text-gray-600 text-sm">Download reports online or get them on email</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LabTests;