import React from 'react';
import { Search, MapPin, Star, Calendar, ArrowRight, Shield, Award, ThumbsUp } from 'lucide-react';

const Surgeries = () => {
  const surgeryTypes = [
    {
      id: 1,
      name: 'General Surgery',
      image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      procedures: ['Appendectomy', 'Hernia Repair', 'Gallbladder Surgery'],
      startingPrice: 25000
    },
    {
      id: 2,
      name: 'Orthopedic Surgery',
      image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      procedures: ['Knee Replacement', 'Hip Replacement', 'Spine Surgery'],
      startingPrice: 150000
    },
    {
      id: 3,
      name: 'Cosmetic Surgery',
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      procedures: ['Rhinoplasty', 'Liposuction', 'Face Lift'],
      startingPrice: 75000
    },
    {
      id: 4,
      name: 'Eye Surgery',
      image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      procedures: ['LASIK', 'Cataract Surgery', 'Glaucoma Surgery'],
      startingPrice: 35000
    }
  ];

  const hospitals = [
    {
      id: 1,
      name: 'Apollo Hospitals',
      location: 'Bannerghatta Road, Bangalore',
      rating: 4.8,
      reviews: 1250,
      accreditations: ['NABH', 'JCI'],
      image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Fortis Hospital',
      location: 'Richmond Road, Bangalore',
      rating: 4.7,
      reviews: 980,
      accreditations: ['NABH', 'ISO'],
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                Book Surgeries with Top Hospitals
              </h1>
              <p className="text-white text-lg mb-6 opacity-90">
                Get treated by experienced surgeons at accredited hospitals
              </p>
              
              {/* Search Box */}
              <div className="bg-white rounded-lg shadow-lg p-2">
                <div className="flex items-center">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search for surgeries, hospitals..."
                      className="w-full bg-transparent border-none pl-10 pr-3 py-2 focus:outline-none text-gray-700"
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
                src="https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Surgery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-[#14bef0]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Safe & Trusted</h3>
                <p className="text-gray-600">NABH/JCI accredited hospitals</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Expert Surgeons</h3>
                <p className="text-gray-600">20+ years of experience</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-50 p-3 rounded-full mr-4">
                <ThumbsUp className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Affordable Pricing</h3>
                <p className="text-gray-600">Insurance & EMI options available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Surgery Types */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Surgeries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {surgeryTypes.map((surgery) => (
              <div key={surgery.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={surgery.image}
                    alt={surgery.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{surgery.name}</h3>
                  <ul className="text-gray-600 text-sm mb-4">
                    {surgery.procedures.map((procedure, index) => (
                      <li key={index} className="mb-1">• {procedure}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="font-bold text-gray-800">₹{surgery.startingPrice.toLocaleString()}</p>
                    </div>
                    <button className="text-[#14bef0] font-medium flex items-center hover:underline">
                      Know More <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Hospitals */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Hospitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img 
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="font-bold text-gray-800 text-xl mb-2">{hospital.name}</h3>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-gray-600 text-sm">{hospital.location}</p>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm mr-3">
                        <Star className="h-3 w-3 fill-green-800 mr-1" />
                        <span>{hospital.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{hospital.reviews} Reviews</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      {hospital.accreditations.map((accreditation, index) => (
                        <span key={index} className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-sm">
                          {accreditation}
                        </span>
                      ))}
                    </div>
                    <button className="bg-[#14bef0] text-white px-4 py-2 rounded-md hover:bg-[#0ea5d3] transition duration-300">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Insurance & Payment Options</h2>
              <p className="text-gray-600 mb-4">
                We accept all major insurance providers and offer flexible EMI options for your convenience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-800">Cashless</p>
                  <p className="text-sm text-gray-600">Insurance</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-800">No Cost</p>
                  <p className="text-sm text-gray-600">EMI</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-800">Zero Down</p>
                  <p className="text-sm text-gray-600">Payment</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/3943883/pexels-photo-3943883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Insurance"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Surgeries;