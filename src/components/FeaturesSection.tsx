import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  FileText, 
  Clock, 
  Shield, 
  BellRing, 
  Stethoscope, 
  HeartPulse, 
  AreaChart, 
  Pill,
  Star,
  Trophy,
  Award,
  ThumbsUp
} from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('features');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Auto-rotating testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain size={24} />,
      title: "AI-Powered Symptom Analysis",
      description: "Our advanced neural networks analyze symptoms with 95% accuracy, providing personalized health insights based on your medical history and current conditions.",
      detail: "Leveraging cutting-edge machine learning models trained on millions of medical cases, our AI can recognize patterns that might be missed in traditional consultations. The system continuously improves through doctor-verified feedback loops."
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Virtual Consultations",
      description: "Connect with board-certified healthcare professionals through HD secure video calls within minutes, not days.",
      detail: "Our network includes specialists across 24 medical fields available for immediate or scheduled consultations. All healthcare professionals undergo rigorous verification and maintain exceptional patient satisfaction ratings."
    },
    {
      icon: <FileText size={24} />,
      title: "Comprehensive Health Reports",
      description: "Receive detailed clinical-grade reports with visualized health trends, risk assessments, and tailored recommendations.",
      detail: "Each report is structured for both patient readability and medical professional use, featuring standardized medical terminology compatible with electronic health record systems."
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Continuous Monitoring",
      description: "Round-the-clock AI monitoring and analysis ensures immediate alerts for concerning health developments.",
      detail: "Our system operates on a globally distributed infrastructure with 99.99% uptime reliability. Emergency situations trigger automatic escalation protocols to connect you with appropriate medical services."
    },
    {
      icon: <Shield size={24} />,
      title: "Military-Grade Security",
      description: "HIPAA-compliant platform with end-to-end encryption and zero-knowledge architecture protecting your sensitive health data.",
      detail: "We implement multi-layered security protocols including biometric authentication, regular security audits, and strict access controls. Your data remains your property, with full transparency on how it's used."
    },
    {
      icon: <BellRing size={24} />,
      title: "Smart Medication Management",
      description: "AI-optimized medication scheduling with drug interaction warnings and adherence tracking to maximize treatment effectiveness.",
      detail: "The system adapts reminder timing based on your behavior patterns for maximum adherence. It also monitors potential side effects and provides real-time guidance on managing them."
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Preventive Health Insights",
      description: "Proactive health monitoring identifies potential issues before they become serious through predictive analytics.",
      detail: "By analyzing subtle changes in your health patterns, our AI can detect early warning signs of various conditions with remarkable accuracy, potentially enabling earlier interventions."
    },
    {
      icon: <AreaChart size={24} />,
      title: "Personalized Health Dashboard",
      description: "Intuitive visualization of your health metrics with customizable goals and progress tracking.",
      detail: "The interactive dashboard adapts to focus on your specific health priorities, whether managing chronic conditions, optimizing fitness, or improving general wellness factors."
    },
    {
      icon: <Pill size={24} />,
      title: "Treatment Response Tracking",
      description: "Monitor how your body responds to treatments with objective measurements and subjective feedback analysis.",
      detail: "Our platform creates closed-loop feedback systems between treatments and outcomes, helping identify which approaches work best for your unique physiology and health profile."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      rating: 5,
      text: "This platform has revolutionized how I connect with patients. The AI analysis provides surprisingly accurate preliminary assessments, allowing me to focus on treatment rather than diagnosis."
    },
    {
      name: "Michael Chen",
      role: "Patient",
      rating: 5,
      text: "I was skeptical at first, but this app literally saved my life by identifying early warning signs of a cardiac issue that my regular checkup missed. The virtual consultation feature is incredibly convenient."
    },
    {
      name: "Emma Rodriguez",
      role: "Health IT Director",
      rating: 5,
      text: "From a technical standpoint, the security protocols exceed industry standards. Integration with our hospital systems was seamless, and the data insights are proving invaluable for patient care."
    },
    {
      name: "James Wilson",
      role: "Chronic Care Patient",
      rating: 4,
      text: "Managing my diabetes has become so much easier. The medication reminders and real-time glucose tracking have helped stabilize my condition in ways traditional care couldn't achieve alone."
    },
    {
      name: "Dr. Priya Patel",
      role: "Telemedicine Specialist",
      rating: 5,
      text: "As someone who pioneered telemedicine in my region, I'm impressed by how this platform enhances the virtual care experience with intuitive interfaces and comprehensive health data integration."
    },
    {
      name: "Robert Taylor",
      role: "Elderly Care Provider",
      rating: 5,
      text: "The ease of use for seniors has been remarkable. My patients who struggled with technology are now actively engaged with their health through this platform."
    }
  ];

  const awards = [
    {
      icon: <Trophy size={32} />,
      title: "Healthcare Innovation Award 2024",
      organization: "Digital Health Association"
    },
    {
      icon: <Award size={32} />,
      title: "Best AI Implementation",
      organization: "MedTech Summit"
    },
    {
      icon: <ThumbsUp size={32} />,
      title: "Patient Choice Award",
      organization: "National Patient Forum"
    },
  ];

  // Calculate which testimonials to display (current one and 2 on each side)
  const visibleTestimonials = [];
  const totalTestimonials = testimonials.length;
  
  for (let i = -2; i <= 2; i++) {
    let index = currentTestimonialIndex + i;
    
    // Handle wrapping
    if (index < 0) index = totalTestimonials + index;
    if (index >= totalTestimonials) index = index - totalTestimonials;
    
    visibleTestimonials.push({
      ...testimonials[index],
      position: i
    });
  }

  return (
    <section 
      id="features" 
      className={`py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'} overflow-hidden`}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-teal-400 opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100/80 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 inline-block mb-4 backdrop-blur-md">
            Revolutionary Health Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Transforming Healthcare Access
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Our award-winning platform combines artificial intelligence with human expertise to deliver 
            personalized healthcare solutions that are accessible, accurate, and affordable.
          </p>
        </div>

        {/* Awards Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="flex items-center p-4 rounded-xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/50 dark:border-gray-700/50 shadow-lg"
            >
              <div className="mr-4 text-amber-500 dark:text-amber-400">
                {award.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{award.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{award.organization}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 p-6 shadow-xl 
                border border-white/50 dark:border-gray-800/50
                transition-all duration-300 hover:translate-y-[-8px] cursor-pointer
                hover:shadow-blue-300/20 dark:hover:shadow-blue-500/10 hover:shadow-2xl
                ${activeFeature === index ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-blue-300/20 to-transparent dark:from-blue-500/10 dark:to-transparent rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-teal-300/20 to-transparent dark:from-teal-500/10 dark:to-transparent rounded-full"></div>
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center mb-5 text-white shadow-lg transform transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              
              {activeFeature === index && (
                <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 text-sm animate-fadeIn">
                  {feature.detail}
                </div>
              )}
              
              <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
                <span>{activeFeature === index ? 'Show less' : 'Learn more'}</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeFeature === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 ${activeFeature === index ? 'w-full' : 'w-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Circular Testimonial Carousel */}
        <div className="mt-24 mb-16">
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            What Our Users Say
          </h3>
          
          <div className="relative h-96 mx-auto max-w-4xl overflow-visible">
            {/* Rotating Testimonials */}
            {visibleTestimonials.map((testimonial, index) => {
              // Calculate position and styling based on position value
              let opacity = 1;
              let scale = 1;
              let zIndex = 30;
              let translateX = '0%';
              
              if (testimonial.position === -2) {
                opacity = 0.4;
                scale = 0.7;
                zIndex = 10;
                translateX = '-70%';
              } else if (testimonial.position === -1) {
                opacity = 0.7;
                scale = 0.85;
                zIndex = 20;
                translateX = '-35%';
              } else if (testimonial.position === 1) {
                opacity = 0.7;
                scale = 0.85;
                zIndex = 20;
                translateX = '35%';
              } else if (testimonial.position === 2) {
                opacity = 0.4;
                scale = 0.7;
                zIndex = 10;
                translateX = '70%';
              }
              
              return (
                <div
                  key={index}
                  className="absolute top-0 left-0 right-0 w-full max-w-md mx-auto backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 p-6 rounded-xl shadow-lg border border-white/50 dark:border-gray-800/50 flex flex-col transition-all duration-500"
                  style={{
                    opacity,
                    transform: `translateX(${translateX}) scale(${scale})`,
                    zIndex
                  }}
                >
                  <div className="flex flex-col mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 italic">{testimonial.text}</p>
                </div>
              );
            })}

            {/* Navigation Dots */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonialIndex === index 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-white/50 dark:border-blue-900/30 text-center shadow-2xl">
          <div className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-2xl backdrop-blur-xl"></div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white relative">Ready to experience healthcare reimagined?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto relative">
            Join thousands of satisfied users who have transformed their healthcare experience with our innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/25">
              Start Free Trial
            </button>
            <button className="px-6 py-3 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/50 dark:border-white/10 text-blue-700 dark:text-blue-300 hover:bg-white/30 dark:hover:bg-white/20 font-medium transition-all">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Stats with Glassmorphism */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "98%", label: "User Satisfaction" },
            { value: "3M+", label: "Health Assessments" },
            { value: "24/7", label: "Service Availability" },
            { value: "95%", label: "Diagnostic Accuracy" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/50 dark:border-gray-700/50 shadow-lg"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;