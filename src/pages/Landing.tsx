
import React from 'react';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full screen Spline model */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/FCD2kUK0rTK7TX08/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Blurred Watermark cover */}
      <div 
        className="absolute bottom-0 right-0 w-64 h-24 bg-white/20 backdrop-blur-lg rounded-tl-xl z-10"
        style={{ 
          boxShadow: '0 -2px 10px rgba(255,255,255,0.1)'
        }}
      ></div>

      {/* Navigation button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          onClick={goToHome}
          className="gradient-button group text-lg px-8 py-6"
        >
          Enter Health AI Experience
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Add an elegant backdrop for the button */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
    </div>
  );
};

export default Landing;
