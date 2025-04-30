import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from '../ui/Button';
import FloatingPlanetsCanvas from '../threeD/FloatingPlanetsCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-cream-light to-cream-medium overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-70">
          <FloatingPlanetsCanvas />
        </div>
        
        {/* Sacred Geometry Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-medium to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center mb-4 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="text-cosmic-accent mr-2" size={16} />
              <span className="text-sm font-medium text-cosmic-dark">Astrology for the Modern Soul</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cosmic-dark">
              Discover Your <span className="text-mystic-purple">Cosmic Path</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 text-gray-700">
              Unlock the secrets written in the stars and navigate life's journey with clarity and purpose. 
              Your celestial blueprint awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Personal Reading
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 relative animate-float">
                  <img 
                    src="https://images.pexels.com/photos/6510368/pexels-photo-6510368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Astrology Chart" 
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 border-4 border-mystic-purple rounded-full opacity-20 animate-pulse"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 animate-float-slow">
                <img 
                  src="https://images.pexels.com/photos/3934802/pexels-photo-3934802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Crystal" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="absolute bottom-10 left-10 w-24 h-24 animate-float-slower">
                <img 
                  src="https://images.pexels.com/photos/7813515/pexels-photo-7813515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Tarot Cards" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;