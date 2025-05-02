
import React from 'react';
import { ArrowDown } from 'lucide-react';
import HeroMedicalModel from './HeroMedicalModel';

const HeroSection = () => {
  const scrollToSymptomChecker = () => {
    document.getElementById('symptom-checker')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-16 pb-24 px-4 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-health-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-health-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-health-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col space-y-6 max-w-xl">
          <div className="glass inline-block self-start px-4 py-2 mb-4 animate-float">
            <span className="text-sm font-medium bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">AI-Powered Health</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Health Is Your 
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              {" "}Wealth
            </span>
          </h1>
          
          <p className="text-lg text-foreground/80">
            Describe your symptoms and get intelligent insights powered by advanced AI. Your personal health assistant is just a conversation away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              className="gradient-button group flex items-center justify-center gap-2 shadow-lg shadow-health-primary/20"
              onClick={scrollToSymptomChecker}
            >
              Get Started
              <ArrowDown size={18} className="group-hover:animate-bounce" />
            </button>
            <button className="subtle-button hover:bg-white/30 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          {/* Enhanced health metric badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="glass px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">98% Accuracy</span>
            </div>
            <div className="glass px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="glass px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Certified Doctors</span>
            </div>
          </div>
        </div>
        
        <div className="md:h-[500px] flex justify-center items-center z-0 p-6">
          <div className="w-full max-w-md aspect-square shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-health-primary/30 relative">
            {/* Animated decorative ring */}
            <div className="absolute -inset-3 border-2 border-dashed border-health-primary/20 rounded-full animate-spin-slow"></div>
            <HeroMedicalModel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
