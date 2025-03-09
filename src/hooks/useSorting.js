import { useState, useEffect, useCallback, useRef } from 'react';
import { sortingAlgorithms } from '../algorithms';
import { generateRandomArray } from '../utils/arrayUtils';

/**
 * Custom hook for managing sorting visualization
 * @param {Object} props - Hook properties
 * @param {string} props.algorithm - The sorting algorithm to use
 * @param {number} props.arraySize - The size of the array to sort
 * @param {number} props.speed - The speed of the sorting animation
 * @returns {Object} - The sorting state and controls
 */
export function useSorting({
  algorithm,
  arraySize,
  speed
}) {
  const [array, setArray] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [comparisonIndices, setComparisonIndices] = useState([]);
  const [swapIndices, setSwapIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  
  const animationsRef = useRef([]);
  const animationTimeoutRef = useRef(null);
  const currentStepRef = useRef(0);
  const isPausedRef = useRef(false);
  const previousAlgorithmRef = useRef(algorithm);
  
  // Calculate the animation speed based on the speed prop (1-100)
  const getAnimationSpeed = useCallback(() => {
    // Invert the speed so that higher values mean faster animations
    const invertedSpeed = 101 - speed;
    // Map the speed to a range of 500ms (fastest) to 1500ms (slowest)
    return Math.floor(invertedSpeed * 10 + 500);
  }, [speed]);
  
  // Reset the array when arraySize changes
  useEffect(() => {
    resetArray();
  }, [arraySize]);
  
  // Reset the array when algorithm changes
  useEffect(() => {
    if (previousAlgorithmRef.current !== algorithm) {
      resetArray();
      previousAlgorithmRef.current = algorithm;
    }
  }, [algorithm]);
  
  // Clean up any running animations when component unmounts
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);
  
  // Reset the array to a new random array
  const resetArray = useCallback(() => {
    if (isSorting) {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      setIsSorting(false);
    }
    
    const newArray = generateRandomArray(arraySize);
    setArray(newArray);
    setSortedIndices([]);
    setComparisonIndices([]);
    setSwapIndices([]);
    setIsSorted(false);
    currentStepRef.current = 0;
    isPausedRef.current = false;
  }, [arraySize, isSorting]);
  
  // Start the sorting animation
  const startSorting = useCallback(() => {
    if (isSorting || isSorted) return;
    
    setIsSorting(true);
    setIsSorted(false);
    setSortedIndices([]);
    setComparisonIndices([]);
    setSwapIndices([]);
    
    const sortFunction = sortingAlgorithms[algorithm];
    if (!sortFunction) return;
    
    animationsRef.current = sortFunction([...array]);
    currentStepRef.current = 0;
    isPausedRef.current = false;
    
    // Start the animation
    animateStep();
  }, [algorithm, array, isSorting, isSorted]);
  
  // Pause the sorting animation
  const pauseSorting = useCallback(() => {
    if (!isSorting || isPausedRef.current) return;
    
    isPausedRef.current = true;
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
  }, [isSorting]);
  
  // Continue the sorting animation
  const continueSorting = useCallback(() => {
    if (!isSorting || !isPausedRef.current) return;
    
    isPausedRef.current = false;
    animateStep();
  }, [isSorting]);
  
  // Animate a single step of the sorting algorithm
  const animateStep = useCallback(() => {
    if (currentStepRef.current >= animationsRef.current.length) {
      setIsSorting(false);
      setIsSorted(true);
      return;
    }
    
    const step = animationsRef.current[currentStepRef.current];
    
    // Update the array and indices based on the step type
    switch (step.type) {
      case 'comparison':
        setComparisonIndices(step.indices);
        setSwapIndices([]);
        break;
      case 'swap':
        setComparisonIndices([]);
        setSwapIndices(step.indices);
        setArray(step.array);
        break;
      case 'sorted':
        setComparisonIndices([]);
        setSwapIndices([]);
        setSortedIndices(prev => [...prev, ...step.indices]);
        break;
    }
    
    currentStepRef.current++;
    
    // Schedule the next step
    animationTimeoutRef.current = window.setTimeout(() => {
      if (!isPausedRef.current) {
        animateStep();
      }
    }, getAnimationSpeed());
  }, [getAnimationSpeed]);
  
  return {
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
  };
} 