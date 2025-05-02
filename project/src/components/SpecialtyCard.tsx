import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SpecialtyCardProps {
  name: string;
  description: string;
  image: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ name, description, image }) => {
  return (
    <Link to={`/doctors?specialty=${name.toLowerCase()}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm mt-1 mb-3">{description}</p>
          <div className="flex items-center text-[#14bef0] font-medium">
            <span className="text-sm">Book Now</span>
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpecialtyCard;