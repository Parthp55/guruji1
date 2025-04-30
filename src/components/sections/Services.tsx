import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Milestone, Sun, Compass, Sparkles, Radiation as Zodiac } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data';

const serviceIcons: Record<string, React.ReactNode> = {
  heart: <Heart className="text-mystic-purple" />,
  milestone: <Milestone className="text-mystic-purple" />,
  sun: <Sun className="text-mystic-purple" />,
  compass: <Compass className="text-mystic-purple" />,
  sparkles: <Sparkles className="text-mystic-purple" />,
  zodiac: <Zodiac className="text-mystic-purple" />,
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Services" 
          subtitle="Discover the cosmic guidance and astrological insights tailored to illuminate your path."
        />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-all duration-300 border border-cream-dark/20"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-mystic-purple/10 mb-4">
                {serviceIcons[service.icon]}
              </div>
              
              <h3 className="font-serif text-xl font-semibold mb-2 text-cosmic-dark">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-dark/10">
                <span className="font-serif font-semibold text-mystic-purple">
                  {service.price}
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-medium text-mystic-purple hover:underline"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;