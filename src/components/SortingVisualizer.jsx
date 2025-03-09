import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSorting } from '../hooks/useSorting';
import AlgorithmInfo from './AlgorithmInfo';
import { algorithmsInfo } from '../utils/algorithmInfo';

const SortingVisualizer = ({
  algorithm,
  arraySize,
  speed
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showAlgorithmChange, setShowAlgorithmChange] = useState(false);
  const [previousAlgorithm, setPreviousAlgorithm] = useState(algorithm);
  
  const {
    array,
    sortedIndices,
    comparisonIndices,
    swapIndices,
    isSorting,
    isSorted,
    resetArray,
    startSorting,
    pauseSorting,
    continueSorting
  } = useSorting({ algorithm, arraySize, speed });
  
  // Show algorithm change notification
  useEffect(() => {
    if (previousAlgorithm !== algorithm) {
      setShowAlgorithmChange(true);
      setPreviousAlgorithm(algorithm);
      
      // Hide the notification after 2 seconds
      const timer = setTimeout(() => {
        setShowAlgorithmChange(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [algorithm, previousAlgorithm]);
  
  // Calculate the maximum value in the array for scaling
  const maxValue = useMemo(() => {
    return array.length > 0 ? Math.max(...array) : 100;
  }, [array]);
  
  // Calculate the width of each bar based on the array size and container width
  const barWidth = useMemo(() => {
    // Use a dynamic container width based on viewport
    const containerWidth = Math.min(window.innerWidth - 32, 1200); // Max width of 1200px, with 16px padding on each side
    const margin = 2; // Margin between bars in pixels
    return Math.max(2, Math.floor((containerWidth - margin * arraySize) / arraySize));
  }, [arraySize]);
  
  // Get the algorithm color or default to primary
  const algorithmColor = useMemo(() => {
    return algorithmsInfo[algorithm]?.color || '#4C51BF'; // Default to primary if not found
  }, [algorithm]);
  
  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 w-full">
        <motion.button
          className="btn btn-primary text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
          onClick={resetArray}
          disabled={isSorting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate New Array
        </motion.button>
        
        {!isSorting && !isSorted && (
          <motion.button
            className="btn btn-accent text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
            onClick={startSorting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Sorting
          </motion.button>
        )}
        
        {isSorting && (
          <>
            <motion.button
              className="btn btn-secondary text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
              onClick={pauseSorting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pause
            </motion.button>
            
            <motion.button
              className="btn btn-accent text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2"
              onClick={continueSorting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </>
        )}
        
        <motion.button
          className={`btn text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 ${showInfo ? 'btn-secondary' : 'bg-gray-700 hover:bg-gray-600'}`}
          onClick={() => setShowInfo(!showInfo)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showInfo ? 'Hide Info' : 'Show Info'}
        </motion.button>
        
        {isSorted && (
          <motion.div 
            className="text-success font-medium flex items-center px-4 py-2 bg-success bg-opacity-20 rounded-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sorting Complete!
          </motion.div>
        )}
        
        {/* Algorithm change notification */}
        <AnimatePresence>
          {showAlgorithmChange && (
            <motion.div 
              className="text-white font-medium flex items-center px-4 py-2 bg-secondary bg-opacity-30 rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: `${algorithmColor}40` }} // 40 is for 25% opacity in hex
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Switched to {algorithmsInfo[algorithm]?.name || algorithm}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-surface rounded-lg p-2 sm:p-4 flex items-end justify-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Grid lines for better visualization */}
        <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none">
          {[0, 25, 50, 75, 100].map((percent) => (
            <div 
              key={percent} 
              className="w-full h-px bg-gray-700 opacity-30"
              style={{ bottom: `${percent}%` }}
            >
              <span className="absolute -left-6 -translate-y-1/2 text-[10px] sm:text-xs text-gray-500">
                {percent}%
              </span>
            </div>
          ))}
        </div>
        
        <AnimatePresence>
          {array.map((value, index) => {
            // Determine the color of the bar
            let barColor = '';
            let glow = '';
            
            if (sortedIndices.includes(index)) {
              barColor = 'bg-success';
              glow = 'shadow-glow-green';
            } else if (comparisonIndices.includes(index)) {
              barColor = 'bg-warning';
              glow = 'shadow-glow-yellow';
            } else if (swapIndices.includes(index)) {
              barColor = 'bg-accent';
              glow = 'shadow-glow-pink';
            } else {
              // Use the algorithm-specific color for unsorted bars
              barColor = '';  // No class, use inline style instead
              glow = '';
            }
            
            // Calculate the height of the bar as a percentage of the maximum value
            const height = (value / maxValue) * 100;
            
            return (
              <motion.div
                key={`${index}-${value}`}
                className={`array-bar ${barColor} ${glow} z-10`}
                style={{
                  height: `${height}%`,
                  width: `${barWidth}px`,
                  marginLeft: '1px',
                  marginRight: '1px',
                  backgroundColor: !barColor ? algorithmColor : undefined,
                }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: `${height}%`,
                  transition: { 
                    duration: 0.3,
                    type: 'spring', 
                    stiffness: 200, 
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, height: 0 }}
                layout
                // Add subtle shake animation to bars being compared
                {...(comparisonIndices.includes(index) && {
                  animate: {
                    x: [0, 2, -2, 0],
                    opacity: 1,
                    height: `${height}%`,
                    transition: {
                      x: { repeat: Infinity, duration: 0.2, repeatType: 'loop' },
                      height: { duration: 0.3 }
                    }
                  }
                })}
                // Add scale effect to bars being swapped
                {...(swapIndices.includes(index) && {
                  animate: {
                    scale: [1, 1.1, 1],
                    opacity: 1,
                    height: `${height}%`,
                    transition: {
                      scale: { duration: 0.3 },
                      height: { duration: 0.3 }
                    }
                  }
                })}
                // Add celebration animation to sorted bars
                {...(sortedIndices.includes(index) && isSorted && {
                  animate: {
                    y: [0, -10, 0],
                    opacity: 1,
                    height: `${height}%`,
                    transition: {
                      y: { delay: index * 0.02, duration: 0.5, repeat: 1 },
                      height: { duration: 0.3 }
                    }
                  }
                })}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
      
      <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
        <div className="flex items-center">
          <div 
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm mr-2" 
            style={{ backgroundColor: algorithmColor }}
          ></div>
          <span className="text-xs sm:text-sm">Unsorted</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-warning rounded-sm mr-2"></div>
          <span className="text-xs sm:text-sm">Comparing</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-sm mr-2"></div>
          <span className="text-xs sm:text-sm">Swapping</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-success rounded-sm mr-2"></div>
          <span className="text-xs sm:text-sm">Sorted</span>
        </div>
      </div>
      
      {showInfo && <AlgorithmInfo algorithm={algorithm} />}
      
      {/* Algorithm stats */}
      <motion.div 
        className="mt-4 sm:mt-6 w-full max-w-2xl flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-400 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          <span 
            className="font-medium text-white"
            style={{ color: algorithmColor }}
          >
            {algorithmsInfo[algorithm]?.name}
          </span>
        </div>
        <div className="text-center sm:text-right">
          Size: <span className="text-primary">{array.length}</span> | 
          Speed: <span className="text-secondary">{speed}%</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SortingVisualizer; 