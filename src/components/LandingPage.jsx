import React from 'react';
import { motion } from 'framer-motion';
import { algorithmsInfo } from '../utils/algorithmInfo';

const LandingPage = ({ onEnter }) => {
  const algorithms = Object.entries(algorithmsInfo);
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              backgroundColor: algorithms[i % algorithms.length][1].color || '#4C51BF'
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sorting Visualizer
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Watch sorting algorithms in action with beautiful visualizations. 
          Understand how different algorithms work and compare their performance.
        </motion.p>
        
        <motion.div 
          className="mb-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {algorithms.map(([key, info], index) => (
            <motion.div 
              key={key}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: `${info.color}33`, 
                color: info.color,
                border: `1px solid ${info.color}80`
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: `${info.color}4D` }}
            >
              {info.name}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button
          className="btn px-8 py-3 text-lg rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl"
          onClick={onEnter}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Visualizer
        </motion.button>
        
        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="bg-surface p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-primary">Interactive</h3>
            <p className="text-gray-400">Control speed, array size, and algorithm selection for a customized experience.</p>
          </div>
          <div className="bg-surface p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-secondary">Educational</h3>
            <p className="text-gray-400">Learn about algorithm complexity, performance, and behavior through visualization.</p>
          </div>
          <div className="bg-surface p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-accent">Beautiful</h3>
            <p className="text-gray-400">Enjoy smooth animations and a visually appealing interface powered by Framer Motion.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage; 