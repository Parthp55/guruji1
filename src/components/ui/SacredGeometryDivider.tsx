import React from 'react';
import { motion } from 'framer-motion';

interface SacredGeometryDividerProps {
  className?: string;
}

const SacredGeometryDivider: React.FC<SacredGeometryDividerProps> = ({ className = '' }) => {
  return (
    <div className={`relative flex justify-center py-12 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-lg px-4 flex justify-center items-center"
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-mystic-purple to-transparent"></div>
        <div className="relative mx-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-0 animate-spin-slow">
            <circle cx="30" cy="30" r="29" stroke="#9D8AC0" strokeWidth="1" />
            <circle cx="30" cy="30" r="20" stroke="#9D8AC0" strokeWidth="0.5" />
            <line x1="30" y1="1" x2="30" y2="59" stroke="#9D8AC0" strokeWidth="0.5" />
            <line x1="1" y1="30" x2="59" y2="30" stroke="#9D8AC0" strokeWidth="0.5" />
            <line x1="8.22183" y1="8.22183" x2="51.7782" y2="51.7782" stroke="#9D8AC0" strokeWidth="0.5" />
            <line x1="8.22183" y1="51.7782" x2="51.7782" y2="8.22183" stroke="#9D8AC0" strokeWidth="0.5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-mystic-purple rounded-full"></div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-mystic-purple via-mystic-purple to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default SacredGeometryDivider;