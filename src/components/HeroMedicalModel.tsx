
import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroMedicalModel = () => {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-xl border border-white/30">
      {/* Container with relative positioning to maintain aspect ratio */}
      <div className="w-full h-full aspect-auto relative">
        {/* Spline component with absolute positioning to fill the container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Spline 
            scene="https://prod.spline.design/aCGC-XHftX9OAuty/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        {/* Enhanced watermark cover with new color */}
        <div 
          className="absolute bottom-0 right-0 w-48 h-20 rounded-tl-xl z-10"
          style={{ 
            backgroundColor: '#fff4fc',
            boxShadow: '0 -2px 10px rgba(255,244,252,0.5)'
          }}
        ></div>

        {/* Stylish decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-health-primary/10 to-transparent rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-health-secondary/10 to-transparent rounded-bl-full"></div>
      </div>
    </div>
  );
};

export default HeroMedicalModel;
