import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { algorithmsInfo } from '../utils/algorithmInfo';

const Header = ({
  algorithm,
  setAlgorithm,
  arraySize,
  setArraySize,
  speed,
  setSpeed
}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Show feedback when algorithm changes
  useEffect(() => {
    setShowFeedback(true);
    const timer = setTimeout(() => {
      setShowFeedback(false);
    }, 700);
    
    return () => clearTimeout(timer);
  }, [algorithm]);
  
  // Function to handle showing landing page again
  const handleShowLanding = () => {
    // Reset localStorage flag so landing page shows again
    localStorage.removeItem('hasVisitedSortingVisualizer');
    
    // Reload the page to show landing page
    window.location.reload();
  };
  
  return (
    <header className="bg-surface py-4 shadow-md sticky top-0 z-20">
      <div className="container-custom px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <motion.div
            className="flex items-center justify-center sm:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-xl sm:text-2xl font-bold text-white mr-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sorting Visualizer
            </motion.h1>
            <motion.div 
              className="text-xs px-2 py-1 bg-primary rounded-full text-white font-medium"
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1, 
                backgroundColor: showFeedback ? 'rgba(237, 100, 166, 0.8)' : 'rgba(76, 81, 191, 0.8)'
              }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 10, 
                delay: 0.5 
              }}
            >
              {algorithmsInfo[algorithm]?.name || 'Algorithm'}
            </motion.div>
            
            <motion.button
              className="ml-4 text-xs text-gray-400 hover:text-white flex items-center"
              onClick={handleShowLanding}
              whileHover={{ scale: 1.05 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Intro
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="algorithm" className="text-sm font-medium mb-1 text-gray-300">Algorithm</label>
              <select
                id="algorithm"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                className="w-full sm:w-auto bg-background border border-gray-700 rounded-md px-3 py-1.5 text-sm transition-all hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              >
                <option value="bubble">Bubble Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="heap">Heap Sort</option>
              </select>
              <motion.div 
                className="text-xs mt-1 text-accent"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: showFeedback ? 1 : 0,
                  height: showFeedback ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
              >
                New array generated!
              </motion.div>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="arraySize" className="text-sm font-medium mb-1 text-gray-300">Array Size</label>
              <div className="flex items-center gap-2">
                <input
                  id="arraySize"
                  type="range"
                  min="10"
                  max="100"
                  value={arraySize}
                  onChange={(e) => setArraySize(Number(e.target.value))}
                  className="w-32 accent-primary"
                />
                <span className="text-sm min-w-[60px] text-center bg-background border border-gray-700 rounded px-2 py-1">
                  {arraySize} items
                </span>
              </div>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="speed" className="text-sm font-medium mb-1 text-gray-300">Speed</label>
              <div className="flex items-center gap-2">
                <input
                  id="speed"
                  type="range"
                  min="1"
                  max="100"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-32 accent-secondary"
                />
                <span className="text-sm min-w-[60px] text-center bg-background border border-gray-700 rounded px-2 py-1">
                  {speed}%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header; 