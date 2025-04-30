import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const BirthChartTool: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [birthdate, setBirthdate] = useState('');
  const [birthtime, setBirthtime] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-cream-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-cream-medium to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Explore Your Birth Chart" 
          subtitle="Enter your birth details to receive a preview of your astrological blueprint."
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-cream-dark/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Section */}
              <div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-cosmic-dark">
                        Birth Date
                      </label>
                      <input
                        type="date"
                        id="birthdate"
                        className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="birthtime" className="block mb-2 text-sm font-medium text-cosmic-dark">
                        Birth Time (if known)
                      </label>
                      <input
                        type="time"
                        id="birthtime"
                        className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                        value={birthtime}
                        onChange={(e) => setBirthtime(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block mb-2 text-sm font-medium text-cosmic-dark">
                        Birth Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        placeholder="City, Country"
                        className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full mt-6"
                    >
                      Generate Preview
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-serif text-xl font-semibold text-cosmic-dark"
                    >
                      Your Birth Chart Preview
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-600"
                    >
                      Based on your birth details, you have:
                    </motion.p>
                    
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2 text-gray-600"
                    >
                      <li className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-mystic-purple mr-2"></span>
                        Sun in Pisces - The Dreamer
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-mystic-teal mr-2"></span>
                        Moon in Virgo - The Analyzer
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-cosmic-accent mr-2"></span>
                        Mercury in Aquarius - The Innovator
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-mystic-blue mr-2"></span>
                        Venus in Aries - The Passionate
                      </li>
                    </motion.ul>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4"
                    >
                      <Button
                        variant="secondary"
                        onClick={() => setSubmitted(false)}
                        className="w-full"
                      >
                        Try Another Chart
                      </Button>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-4 pt-4 border-t border-cream-dark/10"
                    >
                      <p className="text-sm text-gray-500 italic">
                        For a complete chart reading with professional interpretation, please book a personal consultation.
                      </p>
                    </motion.div>
                  </div>
                )}
              </div>
              
              {/* Chart Visualization */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={inView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative w-full max-w-xs aspect-square"
                >
                  <img 
                    src="https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Birth Chart" 
                    className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                  />
                  
                  {submitted && (
                    <>
                      {/* Animated Zodiac Points */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute top-1/4 left-0 w-3 h-3 bg-mystic-purple rounded-full transform -translate-x-1/2 animate-pulse"
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute top-3/4 right-0 w-3 h-3 bg-mystic-teal rounded-full transform translate-x-1/2 animate-pulse"
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="absolute bottom-0 left-1/2 w-3 h-3 bg-cosmic-accent rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse"
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute top-0 right-1/4 w-3 h-3 bg-mystic-blue rounded-full transform translate-y-1/2 animate-pulse"
                      />
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthChartTool;