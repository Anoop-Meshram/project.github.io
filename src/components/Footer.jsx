import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-surface py-4 mt-auto relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <motion.span 
              className="text-sm text-gray-400 mr-4"
              whileHover={{ color: '#ffffff' }}
            >
              Sorting Algorithm Visualizer &copy; {new Date().getFullYear()}
            </motion.span>
            
            <div className="flex space-x-3">
              <motion.span 
                className="text-xs px-2 py-1 bg-secondary bg-opacity-30 text-secondary rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                React
              </motion.span>
              <motion.span 
                className="text-xs px-2 py-1 bg-accent bg-opacity-30 text-accent rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                Framer Motion
              </motion.span>
              <motion.span 
                className="text-xs px-2 py-1 bg-primary bg-opacity-30 text-primary rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                JavaScript
              </motion.span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-2 md:mt-0">
            <motion.a 
              href="https://github.com/yourusername/sorting-visualizer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
              whileHover={{ scale: 1.05, color: '#ffffff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>
            
            <motion.a 
              href="#" 
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
              whileHover={{ scale: 1.05, color: '#ffffff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 