import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Clock, Star, ThumbsUp, Search, Filter, ChevronDown } from 'lucide-react';
import DoctorCard from '../components/DoctorCard';
import FiltersSidebar from '../components/FiltersSidebar';

const DoctorsPage = () => {
  const [searchParams] = useSearchParams();
  const specialty = searchParams.get('specialty') || '';
  
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Dentist',
      experience: 12,
      location: 'Koramangala, Bangalore',
      clinicName: 'Sunshine Dental Clinic',
      rating: 4.8,
      reviewCount: 235,
      nextAvailable: 'Today, 02:00 PM',
      fees: 700,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ['Root Canal', 'Dental Cleaning', 'Braces'],
      stories: 43,
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Gynecologist',
      experience: 15,
      location: 'Indiranagar, Bangalore',
      clinicName: 'Women\'s Health Clinic',
      rating: 4.9,
      reviewCount: 317,
      nextAvailable: 'Tomorrow, 11:30 AM',
      fees: 1000,
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ['Women\'s Health', 'Pregnancy Care', 'Fertility Treatment'],
      stories: 67,
    },
    {
      id: 3,
      name: 'Dr. Arun Patel',
      specialty: 'Dermatologist',
      experience: 8,
      location: 'Whitefield, Bangalore',
      clinicName: 'Skin & Care Clinic',
      rating: 4.7,
      reviewCount: 178,
      nextAvailable: 'Today, 06:30 PM',
      fees: 850,
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ['Skin Treatments', 'Hair Loss Treatment', 'Acne Treatment'],
      stories: 29,
    },
    {
      id: 4,
      name: 'Dr. Sanjay Mehta',
      specialty: 'Pediatrician',
      experience: 20,
      location: 'HSR Layout, Bangalore',
      clinicName: 'Little Angels Children\'s Clinic',
      rating: 4.9,
      reviewCount: 412,
      nextAvailable: 'Tomorrow, 09:00 AM',
      fees: 900,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      services: ['Child Health', 'Vaccinations', 'Growth Monitoring'],
      stories: 91,
    },
  ];

  // Filter doctors based on specialty if provided
  const filteredDoctors = specialty 
    ? doctors.filter(doctor => doctor.specialty.toLowerCase() === specialty.toLowerCase())
    : doctors;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {specialty 
              ? `${specialty.charAt(0).toUpperCase() + specialty.slice(1)} Doctors in Bangalore`
              : 'Best Doctors in Bangalore'}
          </h1>
          <p className="text-gray-600 mt-2">
            {filteredDoctors.length} doctors available in your area
          </p>
        </div>

        {/* Mobile Search and Filter */}
        <div className="md:hidden mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search doctors, clinics..."
                className="w-full py-2 pl-8 pr-3 border border-gray-300 rounded-md"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button 
              className="flex items-center justify-center bg-white border border-gray-300 rounded-md p-2"
              onClick={() => setShowFilters(true)}
            >
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FiltersSidebar />
          </div>

          {/* Doctors List */}
          <div className="flex-grow">
            {/* Sort Options */}
            <div className="bg-white p-4 rounded-lg mb-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Sort by</p>
                <div className="flex space-x-3">
                  <button className="px-3 py-1 text-sm font-medium text-[#14bef0] border-b-2 border-[#14bef0]">
                    Relevance
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-[#14bef0]">
                    Earliest Available
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-[#14bef0]">
                    Fees
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-[#14bef0]">
                    Experience
                  </button>
                </div>
              </div>
            </div>

            {/* Doctors */}
            <div className="space-y-5">
              {filteredDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {showFilters && (
          <div className="fixed inset-0 z-50 overflow-y-auto md:hidden">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div 
                  className="absolute inset-0 bg-gray-500 opacity-75"
                  onClick={() => setShowFilters(false)}
                ></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-t-xl text-left overflow-hidden shadow-xl transform transition-all w-full">
                <div className="bg-white px-4 pt-5 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close</span>
                      <span className="text-2xl">&times;</span>
                    </button>
                  </div>
                  <FiltersSidebar />
                </div>
                <div className="bg-gray-50 px-4 py-3 flex justify-between">
                  <button 
                    className="text-gray-700 font-medium"
                    onClick={() => setShowFilters(false)}
                  >
                    Clear All
                  </button>
                  <button 
                    className="bg-[#14bef0] text-white px-4 py-2 rounded-md"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;