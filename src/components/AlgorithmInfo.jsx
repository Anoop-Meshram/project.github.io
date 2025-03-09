import React from 'react';
import { motion } from 'framer-motion';
import { algorithmsInfo } from '../utils/algorithmInfo';

const AlgorithmInfo = ({ algorithm }) => {
  const info = algorithmsInfo[algorithm];
  
  if (!info) return null;
  
  return (
    <motion.div 
      className="bg-surface rounded-lg p-6 shadow-lg mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={algorithm}
    >
      <motion.h2 
        className="text-xl font-bold mb-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {info.name}
      </motion.h2>
      
      <motion.p 
        className="text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {info.description}
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-background rounded-md p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-accent">Time Complexity</h3>
          <ul className="space-y-2">
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
          
          <div className="mt-4">
            <span className="text-gray-400">Space Complexity:</span>
            <span className="font-mono text-primary ml-2">{info.spaceComplexity}</span>
          </div>
          
          <div className="mt-4">
            <span className="text-gray-400">Stable:</span>
            <span className={`ml-2 ${info.stability ? 'text-success' : 'text-error'}`}>
              {info.stability ? 'Yes' : 'No'}
            </span>
          </div>
        </motion.div>
        
        <motion.div
          className="bg-background rounded-md p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-3 text-secondary">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            {info.steps.map((step, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AlgorithmInfo; 