import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FiltersSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    availability: true,
    fees: true,
    gender: true,
    experience: true,
    sortBy: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-bold text-gray-800 mb-4">Filter Results</h3>
      
      {/* Availability Filter */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer mb-2"
          onClick={() => toggleSection('availability')}
        >
          <h4 className="font-medium text-gray-700">Availability</h4>
          {expandedSections.availability ? 
            <ChevronUp className="h-4 w-4 text-gray-500" /> : 
            <ChevronDown className="h-4 w-4 text-gray-500" />
          }
        </div>
        
        {expandedSections.availability && (
          <div className="space-y-2">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Available today
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Available tomorrow
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Available this weekend
            </label>
          </div>
        )}
      </div>
      
      {/* Consultation Fee Filter */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer mb-2"
          onClick={() => toggleSection('fees')}
        >
          <h4 className="font-medium text-gray-700">Consultation Fee</h4>
          {expandedSections.fees ? 
            <ChevronUp className="h-4 w-4 text-gray-500" /> : 
            <ChevronDown className="h-4 w-4 text-gray-500" />
          }
        </div>
        
        {expandedSections.fees && (
          <div className="space-y-2">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Free
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              1-500
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              501-1000
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              1000+
            </label>
          </div>
        )}
      </div>
      
      {/* Gender Filter */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer mb-2"
          onClick={() => toggleSection('gender')}
        >
          <h4 className="font-medium text-gray-700">Gender</h4>
          {expandedSections.gender ? 
            <ChevronUp className="h-4 w-4 text-gray-500" /> : 
            <ChevronDown className="h-4 w-4 text-gray-500" />
          }
        </div>
        
        {expandedSections.gender && (
          <div className="space-y-2">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Male Doctor
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Female Doctor
            </label>
          </div>
        )}
      </div>
      
      {/* Experience Filter */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer mb-2"
          onClick={() => toggleSection('experience')}
        >
          <h4 className="font-medium text-gray-700">Experience</h4>
          {expandedSections.experience ? 
            <ChevronUp className="h-4 w-4 text-gray-500" /> : 
            <ChevronDown className="h-4 w-4 text-gray-500" />
          }
        </div>
        
        {expandedSections.experience && (
          <div className="space-y-2">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              0-5 years
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              6-10 years
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              11-15 years
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2 h-4 w-4 text-[#14bef0]" />
              15+ years
            </label>
          </div>
        )}
      </div>
      
      {/* Sort By */}
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer mb-2"
          onClick={() => toggleSection('sortBy')}
        >
          <h4 className="font-medium text-gray-700">Sort By</h4>
          {expandedSections.sortBy ? 
            <ChevronUp className="h-4 w-4 text-gray-500" /> : 
            <ChevronDown className="h-4 w-4 text-gray-500" />
          }
        </div>
        
        {expandedSections.sortBy && (
          <div className="space-y-2">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="radio" name="sortBy" className="mr-2 h-4 w-4 text-[#14bef0]" defaultChecked />
              Relevance
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="radio" name="sortBy" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Rating
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="radio" name="sortBy" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Experience: High to Low
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="radio" name="sortBy" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Fees: Low to High
            </label>
            <label className="flex items-center text-gray-600 text-sm">
              <input type="radio" name="sortBy" className="mr-2 h-4 w-4 text-[#14bef0]" />
              Fees: High to Low
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersSidebar;