import React from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { Search, Video, Pill, TestTube, Clipboard, Star, MapPin, ChevronRight } from 'lucide-react';
import SpecialtyCard from '../components/SpecialtyCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const specialties = [
    { id: 1, name: 'Dentist', description: 'Teething troubles? Schedule a dental checkup', image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Gynecologist', description: 'Explore for women\'s health, pregnancy and infertility treatments', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Dermatologist', description: 'For skin, hair and nail ailments', image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Pediatrician', description: 'Child specialists and doctors for infant', image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Spline */}
      <section className="relative bg-gradient-to-r from-[#14b4e0] to-[#3590f3] py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative h-full">
            <Spline scene="https://prod.spline.design/iXemQMmqzyjYXxiy/scene.splinecode" />
            {/* Overlay to cover watermark */}
            <div className="absolute bottom-0 right-0 w-32 h-12 bg-black"></div>

          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="md:max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Health is Your Wealth
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 opacity-90">
              Find and book appointments with doctors, get online consultations, order medicines, and book lab tests.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <div className="flex items-center flex-grow">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-700">
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>
                <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search doctors, clinics, hospitals, etc."
                    className="w-full bg-transparent border-none focus:outline-none text-gray-700 pl-8"
                  />
                  <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <button className="bg-[#14bef0] text-white py-2 px-6 rounded-md hover:bg-[#0ea5d3] transition duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link to="/doctors" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Search className="h-6 w-6 text-[#14bef0]" />
              </div>
              <h3 className="font-medium text-gray-800">Find Doctors</h3>
              <p className="text-sm text-gray-500 mt-2">Book appointments with top doctors</p>
            </Link>
            
            <Link to="/video-consult" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-green-50 p-3 rounded-full mb-4">
                <Video className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-medium text-gray-800">Video Consult</h3>
              <p className="text-sm text-gray-500 mt-2">Consult with top doctors online</p>
            </Link>
            
            <Link to="/medicines" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-purple-50 p-3 rounded-full mb-4">
                <Pill className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-medium text-gray-800">Medicines</h3>
              <p className="text-sm text-gray-500 mt-2">Medicines delivered at your doorstep</p>
            </Link>
            
            <Link to="/lab-tests" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-yellow-50 p-3 rounded-full mb-4">
                <TestTube className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-medium text-gray-800">Lab Tests</h3>
              <p className="text-sm text-gray-500 mt-2">Book tests from top labs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Book an appointment for an in-clinic consultation</h2>
            <p className="text-gray-600">Find experienced doctors across all specialties</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <SpecialtyCard
                key={specialty.id}
                name={specialty.name}
                description={specialty.description}
                image={specialty.image}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/doctors" className="inline-flex items-center text-[#14bef0] hover:text-[#0ea5d3]">
              View all specialties <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">What our users have to say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Practo has touched the lives of millions of people, helping them make better healthcare decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Practo has revolutionized how I manage my family's healthcare. Booking appointments and ordering medicines has never been easier!"
              author="Rahul Sharma"
              location="Delhi"
              rating={5}
            />
            <TestimonialCard
              quote="The video consultation feature saved me so much time. Got expert medical advice without leaving my home during the pandemic."
              author="Priya Patel"
              location="Mumbai"
              rating={4}
            />
            <TestimonialCard
              quote="I was amazed by how quickly I could find the right specialist for my condition and book an appointment on the same day."
              author="Arun Kumar"
              location="Bangalore"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Download the Health is Wealth app</h2>
              <p className="text-gray-600 mb-6">Access video consultation with India's top doctors on the Health is Wealth app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition duration-300">
                  <img src="https://www.practo.com/nav/9.5.13/consumer/images/play_store.png" alt="Google Play" className="h-6 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">GET IT ON</p>
                    <p className="font-medium text-gray-800">Google Play</p>
                  </div>
                </a>
                <a href="#" className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition duration-300">
                  <img src="https://www.practo.com/nav/9.5.13/consumer/images/app_store.png" alt="App Store" className="h-6 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Download on the</p>
                    <p className="font-medium text-gray-800">App Store</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.pexels.com/photos/6483626/pexels-photo-6483626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Practo Mobile App" 
                className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;