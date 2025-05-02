import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, ThumbsUp, Phone, Award, Calendar, Share2, Bookmark, MessageSquare } from 'lucide-react';

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data for a single doctor
  const doctor = {
    id: Number(id),
    name: 'Dr. Rajesh Kumar',
    specialty: 'Dentist',
    degrees: 'BDS, MDS - Orthodontics',
    experience: 12,
    location: 'Koramangala, Bangalore',
    clinicName: 'Sunshine Dental Clinic',
    clinicAddress: '123, 1st Main, 5th Block, Koramangala, Bangalore - 560034',
    rating: 4.8,
    reviewCount: 235,
    nextAvailable: 'Today, 02:00 PM',
    fees: 700,
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    services: ['Root Canal Treatment', 'Dental Cleaning', 'Braces/Orthodontic Treatment', 'Teeth Whitening', 'Dental Implants'],
    stories: [
      {
        id: 1,
        patientName: 'Rahul S',
        rating: 5,
        date: '15 Jun 2023',
        comment: 'Dr. Kumar is extremely professional and gentle. I had severe toothache and he treated it perfectly. Highly recommend!',
        treatmentType: 'Root Canal Treatment'
      },
      {
        id: 2,
        patientName: 'Anita P',
        rating: 4,
        date: '02 May 2023',
        comment: 'Very good experience. The clinic is clean and the staff is courteous. Dr. Kumar took time to explain the procedure thoroughly.',
        treatmentType: 'Dental Cleaning'
      }
    ],
    education: [
      { degree: 'BDS', college: 'Government Dental College, Bangalore', year: '2005' },
      { degree: 'MDS - Orthodontics', college: 'Manipal College of Dental Sciences', year: '2008' }
    ],
    registrations: [
      { council: 'Karnataka State Dental Council', year: '2008', number: 'KDC-1234' }
    ],
    awards: [
      { title: 'Best Dental Practitioner', organization: 'Bangalore Dental Association', year: '2019' }
    ]
  };

  // Available time slots
  const morningSlots = ['09:00 AM', '10:00 AM', '11:30 AM'];
  const afternoonSlots = ['02:00 PM', '03:30 PM', '05:00 PM'];
  const eveningSlots = ['06:30 PM', '07:45 PM'];

  return (
    <div className="pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Doctor Profile Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              {/* Doctor Info */}
              <div className="md:w-3/4">
                <div className="flex items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-5">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
                    <p className="text-gray-600 mb-1">{doctor.specialty} • {doctor.experience} years experience</p>
                    <p className="text-gray-600 text-sm mb-3">{doctor.degrees}</p>
                    
                    <div className="flex items-center mb-2">
                      <div className="bg-green-100 text-green-800 flex items-center px-2 py-0.5 rounded text-sm mr-3">
                        <Star className="h-3 w-3 fill-green-800 mr-1" />
                        <span>{doctor.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{doctor.reviewCount} Patient Reviews</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      <p className="text-gray-600 text-sm">{doctor.clinicName}, {doctor.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="md:w-1/4 mt-6 md:mt-0 flex flex-col justify-center">
                <p className="font-medium text-gray-800 mb-3">Consultation Fee: ₹{doctor.fees}</p>
                <div className="flex space-x-3">
                  <Link 
                    to={`/book-appointment/${doctor.id}`}
                    className="flex-grow py-2 text-center bg-[#14bef0] text-white rounded-md hover:bg-[#0ea5d3] transition duration-300"
                  >
                    Book Appointment
                  </Link>
                  <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="bg-gray-50 p-4 border-t border-gray-100">
            <div className="flex overflow-x-auto space-x-6 pb-2">
              <a href="#info" className="text-[#14bef0] font-medium whitespace-nowrap">Info</a>
              <a href="#services" className="text-gray-600 hover:text-[#14bef0] whitespace-nowrap">Services</a>
              <a href="#reviews" className="text-gray-600 hover:text-[#14bef0] whitespace-nowrap">Patient Reviews</a>
              <a href="#timings" className="text-gray-600 hover:text-[#14bef0] whitespace-nowrap">Timings</a>
              <a href="#location" className="text-gray-600 hover:text-[#14bef0] whitespace-nowrap">Location</a>
              <a href="#faqs" className="text-gray-600 hover:text-[#14bef0] whitespace-nowrap">FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Book Appointment Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Book Appointment</h2>
              
              {/* Calendar Placeholder */}
              <div className="mb-6 bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-600">Calendar Widget - Select Date</p>
              </div>
              
              {/* Time Slots */}
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-3">Morning</h3>
                <div className="flex flex-wrap gap-3">
                  {morningSlots.map((slot, index) => (
                    <button 
                      key={index}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-[#14bef0] hover:text-[#14bef0]"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-3">Afternoon</h3>
                <div className="flex flex-wrap gap-3">
                  {afternoonSlots.map((slot, index) => (
                    <button 
                      key={index}
                      className={`px-4 py-2 border rounded-md ${
                        slot === '02:00 PM' 
                          ? 'border-[#14bef0] bg-[#e8f7fc] text-[#14bef0]' 
                          : 'border-gray-300 text-gray-700 hover:border-[#14bef0] hover:text-[#14bef0]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-3">Evening</h3>
                <div className="flex flex-wrap gap-3">
                  {eveningSlots.map((slot, index) => (
                    <button 
                      key={index}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-[#14bef0] hover:text-[#14bef0]"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                className="w-full py-3 mt-4 bg-[#14bef0] text-white font-medium rounded-md hover:bg-[#0ea5d3] transition duration-300"
              >
                Book Appointment
              </button>
            </div>
            
            {/* Services Section */}
            <div id="services" className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctor.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#14bef0] rounded-full mr-3"></div>
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Patient Reviews Section */}
            <div id="reviews" className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Patient Reviews</h2>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 flex items-center px-2 py-0.5 rounded text-sm mr-2">
                    <Star className="h-3 w-3 fill-green-800 mr-1" />
                    <span>{doctor.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{doctor.reviewCount} Reviews</span>
                </div>
              </div>
              
              {/* Review Cards */}
              <div className="space-y-6">
                {doctor.stories.map((story) => (
                  <div key={story.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 font-medium mr-3">
                          {story.patientName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{story.patientName}</p>
                          <p className="text-gray-500 text-sm">Visited for {story.treatmentType}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{story.date}</div>
                    </div>
                    
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < story.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700">{story.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-[#14bef0] font-medium hover:underline">
                  View All {doctor.reviewCount} Reviews
                </button>
              </div>
            </div>
            
            {/* FAQs Section */}
            <div id="faqs" className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Q: What are the dental treatments available?</h3>
                  <p className="text-gray-600">Dr. Rajesh Kumar offers a wide range of dental treatments including root canal treatment, dental cleaning, braces/orthodontic treatment, teeth whitening, and dental implants.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Q: How can I book an appointment?</h3>
                  <p className="text-gray-600">You can book an appointment online through this profile page or by calling the clinic directly.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Q: Does Dr. Kumar accept insurance?</h3>
                  <p className="text-gray-600">Yes, Dr. Kumar accepts most major insurance plans. It's recommended to check with the clinic before your appointment.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Info Card */}
            <div id="info" className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Doctor Information</h2>
              
              <div className="space-y-4">
                {/* Practice Locations */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Practice Locations</h3>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">{doctor.clinicName}</p>
                      <p className="text-gray-600 text-sm">{doctor.clinicAddress}</p>
                    </div>
                  </div>
                </div>
                
                {/* Education */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Education</h3>
                  <div className="space-y-2">
                    {doctor.education.map((edu, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-700">{edu.degree}</p>
                          <p className="text-gray-600 text-sm">{edu.college}, {edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Registrations */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Registrations</h3>
                  <div className="space-y-2">
                    {doctor.registrations.map((reg, index) => (
                      <div key={index} className="flex items-start">
                        <Clipboard className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{reg.council}</p>
                          <p className="text-gray-600 text-sm">{reg.year} • {reg.number}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Awards */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Awards and Recognitions</h3>
                  <div className="space-y-2">
                    {doctor.awards.map((award, index) => (
                      <div key={index} className="flex items-start">
                        <ThumbsUp className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{award.title}</p>
                          <p className="text-gray-600 text-sm">{award.organization}, {award.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timings Card */}
            <div id="timings" className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Clinic Timings</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-700">Today</p>
                  <p className="text-green-600 font-medium">09:00 AM - 08:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Mon - Fri</p>
                  <p className="text-gray-700">09:00 AM - 08:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Saturday</p>
                  <p className="text-gray-700">09:00 AM - 05:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Sunday</p>
                  <p className="text-gray-700">Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact and Location */}
            <div id="location" className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact & Location</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-100 h-40 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-gray-500">Map Location</p>
              </div>
              
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">{doctor.clinicName}</p>
                  <p className="text-gray-600 text-sm">{doctor.clinicAddress}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-gray-500 mr-2" />
                <p className="text-gray-700">+91 9876543210</p>
              </div>
              
              <button className="w-full py-2 mt-2 bg-white border border-[#14bef0] text-[#14bef0] font-medium rounded-md hover:bg-blue-50 transition duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;