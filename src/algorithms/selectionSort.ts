import { SortingStep } from '../types';

export function selectionSort(array: number[]): SortingStep[] {
  const animations: SortingStep[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      // Add comparison animation
      animations.push({
        type: 'comparison',
        indices: [minIdx, j],
        array: [...arrayCopy]
      });
      
      if (arrayCopy[j] < arrayCopy[minIdx]) {
        minIdx = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIdx !== i) {
      [arrayCopy[i], arrayCopy[minIdx]] = [arrayCopy[minIdx], arrayCopy[i]];
      
      // Add swap animation
      animations.push({
        type: 'swap',
        indices: [i, minIdx],
        array: [...arrayCopy]
      });
    }
    
    // Mark the element as sorted
    animations.push({
      type: 'sorted',
      indices: [i],
      array: [...arrayCopy]
    });
  }
  
  // Mark the last element as sorted
  animations.push({
    type: 'sorted',
    indices: [n - 1],
    array: [...arrayCopy]
  });
  
  return animations;
} 