
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SymptomChecker from '@/components/SymptomChecker';
import FeaturesSection from '@/components/FeaturesSection';
import TelemedicineSection from '@/components/TelemedicineSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SymptomChecker />
        <FeaturesSection />
        <TelemedicineSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
