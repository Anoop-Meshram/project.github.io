/**
 * Implements the bubble sort algorithm
 * @param {number[]} array - The array to sort
 * @returns {Object[]} An array of sorting steps for visualization
 */
export function bubbleSort(array) {
  const animations = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Add comparison animation
      animations.push({
        type: 'comparison',
        indices: [j, j + 1],
        array: [...arrayCopy]
      });
      
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        // Swap elements
        [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
        
        // Add swap animation
        animations.push({
          type: 'swap',
          indices: [j, j + 1],
          array: [...arrayCopy]
        });
      }
    }
    
    // Mark the last element as sorted
    animations.push({
      type: 'sorted',
      indices: [n - i - 1],
      array: [...arrayCopy]
    });
  }
  
  // Mark the first element as sorted (last one to be sorted)
  animations.push({
    type: 'sorted',
    indices: [0],
    array: [...arrayCopy]
  });
  
  return animations;
} 