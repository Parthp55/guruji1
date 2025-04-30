import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  MoonStar, 
  Twitter
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cosmic-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <MoonStar size={24} className="text-cosmic-accent mr-2" />
              <h3 className="font-serif text-xl font-semibold">Celestial Guide</h3>
            </div>
            <p className="text-cream-light mb-4">
              Guiding you through life's journey with cosmic wisdom and astrological insights. 
              Discover your path among the stars.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-cream-light hover:text-cosmic-accent transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-cream-light hover:text-cosmic-accent transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                className="text-cream-light hover:text-cosmic-accent transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-cream-light hover:text-cosmic-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream-light hover:text-cosmic-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-cream-light hover:text-cosmic-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream-light hover:text-cosmic-accent transition-colors">
                  Book a Reading
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-light hover:text-cosmic-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-cosmic-accent mt-1 mr-3 flex-shrink-0" />
                <span>123 Cosmic Way, Celestial Valley, Universe 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-cosmic-accent mr-3 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-cosmic-accent mr-3 flex-shrink-0" />
                <span>contact@celestialguide.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-cream-light">
            &copy; {currentYear} Celestial Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;