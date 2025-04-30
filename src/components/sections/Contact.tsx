import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  MoonStar
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import FloatingMoonCanvas from '../threeD/FloatingMoonCanvas';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-cream-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-cream-medium to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Book Your Reading" 
          subtitle="Take the first step on your cosmic journey and schedule a personal astrology reading."
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Contact Form */}
            <div className="lg:col-span-3 p-6 md:p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-cosmic-dark">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-cosmic-dark">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-cosmic-dark">
                    Reading Type
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                    required
                  >
                    <option value="">Select a reading type</option>
                    <option value="birth-chart">Birth Chart Reading</option>
                    <option value="tarot">Tarot Reading</option>
                    <option value="compatibility">Relationship Compatibility</option>
                    <option value="career">Career Path Analysis</option>
                    <option value="solar-return">Solar Return Reading</option>
                    <option value="coaching">Astrology Coaching</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium text-cosmic-dark">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-cosmic-dark">
                    Your Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-cream-dark/30 focus:ring-2 focus:ring-mystic-purple focus:border-transparent outline-none transition resize-none"
                    placeholder="Any specific questions or concerns..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                >
                  Book Your Reading
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-2 bg-mystic-purple text-white p-6 md:p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                  Connect With Me
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail className="mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-cream-light">contact@celestialguide.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <MessageSquare className="mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-cream-light">(555) 123-4567</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Calendar className="mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-cream-light">Mon-Fri: 10am - 6pm</p>
                      <p className="text-cream-light">Sat: 11am - 3pm</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="font-medium mb-2">Follow Me</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-cosmic-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-cosmic-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-cosmic-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10">
                <MoonStar size={240} />
              </div>
              
              <div className="absolute right-0 top-0 w-24 h-24">
                <FloatingMoonCanvas phase={0.2} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;