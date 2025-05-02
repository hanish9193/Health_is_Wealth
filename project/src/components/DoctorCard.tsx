import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ThumbsUp, MessageCircle } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  location: string;
  clinicName: string;
  rating: number;
  reviewCount: number;
  nextAvailable: string;
  fees: number;
  image: string;
  services: string[];
  stories: number;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Doctor Info Section */}
        <div className="md:w-2/3 p-5">
          <div className="flex items-start">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mr-4">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <Link to={`/doctor/${doctor.id}`} className="text-[#14bef0] hover:text-[#0ea5d3] font-bold text-lg">
                {doctor.name}
              </Link>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-gray-600 text-sm">{doctor.experience} years experience overall</p>
              <div className="flex items-center mt-1.5">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <p className="text-gray-600 text-sm">{doctor.location}</p>
              </div>
              <div className="flex items-center mt-1.5">
                <ThumbsUp className="h-4 w-4 text-[#14bef0] mr-1" />
                <p className="text-gray-700 text-sm">{doctor.clinicName}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 md:flex md:justify-between">
            <div>
              <div className="flex items-center">
                <div className="bg-green-100 text-green-800 flex items-center px-2 py-0.5 rounded text-sm">
                  <Star className="h-3 w-3 fill-green-800 mr-1" />
                  <span>{doctor.rating}</span>
                </div>
                <span className="text-gray-500 text-sm ml-2">{doctor.reviewCount} Patient Stories</span>
              </div>
              
              <div className="mt-3">
                <h4 className="text-gray-700 font-medium text-sm">Common Services</h4>
                <p className="text-gray-600 text-sm mt-1">{doctor.services.join(', ')}</p>
              </div>
            </div>
            
            {/* Price and Availability */}
            <div className="mt-4 md:mt-0 md:text-right">
              <div className="flex items-center md:justify-end">
                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-gray-600 text-sm">{doctor.nextAvailable}</span>
              </div>
              <p className="text-gray-700 font-medium mt-1">₹{doctor.fees} Consultation Fee</p>
            </div>
          </div>
        </div>
        
        {/* Actions Section */}
        <div className="bg-gray-50 md:w-1/3 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-3">
              <MessageCircle className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-gray-600 text-sm">{doctor.stories} Patient Stories</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <p className="text-green-600 text-sm">Available Today</p>
              </div>
              <p className="text-gray-600 text-sm">Max. wait time: 20 mins</p>
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <Link 
              to={`/book-appointment/${doctor.id}`}
              className="block w-full py-2 text-center bg-[#14bef0] text-white rounded-md hover:bg-[#0ea5d3] transition duration-300"
            >
              Book Appointment
            </Link>
            <Link 
              to={`/doctor/${doctor.id}`}
              className="block w-full py-2 text-center border border-[#14bef0] text-[#14bef0] rounded-md hover:bg-blue-50 transition duration-300"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;