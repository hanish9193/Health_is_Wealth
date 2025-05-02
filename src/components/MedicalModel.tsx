
import React from 'react';
import Spline from '@splinetool/react-spline';

const MedicalModel = () => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-lg border border-white/20">
      {/* Container with relative positioning to maintain aspect ratio */}
      <div className="w-full h-full aspect-auto relative">
        {/* Spline component with absolute positioning to fill the container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Spline 
            scene="https://prod.spline.design/jFawxWvd7fUbd4Ln/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        {/* Enhanced watermark cover with larger size */}
        <div 
          className="absolute bottom-0 right-0 w-40 h-16 bg-white rounded-tl-xl z-10"
          style={{ 
            boxShadow: '0 -2px 10px rgba(255,255,255,0.8)'
          }}
        ></div>

        {/* Add a custom label instead */}
        <div className="absolute bottom-3 right-0 w-full text-center text-xs text-gray-500 z-20">
          Interactive 3D Health Model
        </div>
      </div>
    </div>
  );
};

export default MedicalModel;
