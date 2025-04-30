import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import SacredGeometryDivider from '../ui/SacredGeometryDivider';
import FloatingMoonCanvas from '../threeD/FloatingMoonCanvas';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-cream-medium relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn about my journey as an astrologer and how I can help guide you on your cosmic path."
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-cosmic-dark"
            >
              Guiding Stars, Illuminating Paths
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-gray-700"
            >
              <p>
                With over 15 years of experience in astrology and celestial study, I've dedicated my life to understanding the cosmic forces that shape our existence and guiding others to harness this ancient wisdom in their daily lives.
              </p>
              <p>
                My journey began with traditional Western astrology, but has expanded to incorporate Vedic traditions, Chinese astrology, and modern psychological approaches. This integrative perspective allows me to provide comprehensive readings that address the whole person - mind, body, and spirit.
              </p>
              <p>
                Every chart reading is approached with reverence, intuition, and analytical precision. I believe that the cosmic blueprint of your birth chart contains profound insights, but you always remain the author of your destiny.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                <span className="block text-3xl font-serif font-bold text-mystic-purple">15+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                <span className="block text-3xl font-serif font-bold text-mystic-purple">5,000+</span>
                <span className="text-sm text-gray-600">Readings</span>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                <span className="block text-3xl font-serif font-bold text-mystic-purple">98%</span>
                <span className="text-sm text-gray-600">Client Satisfaction</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7675766/pexels-photo-7675766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Professional Astrologer" 
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
              
              {/* Floating Moon */}
              <div className="absolute top-[-60px] right-[-40px] w-32 h-32 z-0">
                <FloatingMoonCanvas phase={0.7} />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg overflow-hidden shadow-lg z-20">
                <img 
                  src="https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Astrology Tools" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <SacredGeometryDivider className="mt-16" />
    </section>
  );
};

export default About;