import React from 'react';
import { motion } from 'framer-motion';
import { algorithmsInfo } from '../utils/algorithmInfo';

const AlgorithmInfo = ({ algorithm }) => {
  const info = algorithmsInfo[algorithm];
  
  if (!info) return null;
  
  return (
    <motion.div 
      className="bg-surface rounded-lg p-4 sm:p-6 shadow-lg mt-4 sm:mt-8 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={algorithm}
    >
      <motion.h2 
        className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {info.name}
      </motion.h2>
      
      <motion.p 
        className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {info.description}
      </motion.p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <motion.div
          className="bg-background rounded-md p-3 sm:p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-accent">Time Complexity</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li className="flex justify-between">
              <span className="text-gray-400">Best:</span>
              <span className="font-mono text-success">{info.timeComplexity.best}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Average:</span>
              <span className="font-mono text-warning">{info.timeComplexity.average}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">Worst:</span>
              <span className="font-mono text-error">{info.timeComplexity.worst}</span>
            </li>
          </ul>
          
          <div className="mt-3 sm:mt-4 text-sm sm:text-base">
            <span className="text-gray-400">Space Complexity:</span>
            <span className="font-mono text-primary ml-2">{info.spaceComplexity}</span>
          </div>
          
          <div className="mt-2 sm:mt-3 text-sm sm:text-base">
            <span className="text-gray-400">Stable:</span>
            <span className={`ml-2 ${info.stability ? 'text-success' : 'text-error'}`}>
              {info.stability ? 'Yes' : 'No'}
            </span>
          </div>
        </motion.div>
        
        <motion.div
          className="bg-background rounded-md p-3 sm:p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-secondary">How it Works</h3>
          <ul className="space-y-1.5 sm:space-y-2 list-disc list-inside text-sm sm:text-base text-gray-300">
            {info.steps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="leading-relaxed"
              >
                {step}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AlgorithmInfo; 