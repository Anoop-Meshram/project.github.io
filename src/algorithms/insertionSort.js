/**
 * Implements the insertion sort algorithm
 * @param {number[]} array - The array to sort
 * @returns {Object[]} An array of sorting steps for visualization
 */
export function insertionSort(array) {
  const animations = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  for (let i = 1; i < n; i++) {
    const key = arrayCopy[i];
    let j = i - 1;
    
    // Add comparison animation
    animations.push({
      type: 'comparison',
      indices: [i, j],
      array: [...arrayCopy]
    });
    
    while (j >= 0 && arrayCopy[j] > key) {
      // Move elements that are greater than key to one position ahead
      arrayCopy[j + 1] = arrayCopy[j];
      
      // Add swap animation
      animations.push({
        type: 'swap',
        indices: [j, j + 1],
        array: [...arrayCopy]
      });
      
      j--;
      
      if (j >= 0) {
        // Add comparison animation for the next comparison
        animations.push({
          type: 'comparison',
          indices: [i, j],
          array: [...arrayCopy]
        });
      }
    }
    
    arrayCopy[j + 1] = key;
    
    // Mark the element as sorted
    animations.push({
      type: 'sorted',
      indices: [j + 1],
      array: [...arrayCopy]
    });
  }
  
  // Mark all elements as sorted
  for (let i = 0; i < n; i++) {
    if (i === 0) continue; // Skip the first element as it's already marked
    animations.push({
      type: 'sorted',
      indices: [i],
      array: [...arrayCopy]
    });
  }
  
  return animations;
} 