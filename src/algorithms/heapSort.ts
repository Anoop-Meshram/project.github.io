import { SortingStep } from '../types';

export function heapSort(array: number[]): SortingStep[] {
  const animations: SortingStep[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arrayCopy, n, i, animations);
  }
  
  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arrayCopy[0], arrayCopy[i]] = [arrayCopy[i], arrayCopy[0]];
    
    // Add swap animation
    animations.push({
      type: 'swap',
      indices: [0, i],
      array: [...arrayCopy]
    });
    
    // Mark the element as sorted
    animations.push({
      type: 'sorted',
      indices: [i],
      array: [...arrayCopy]
    });
    
    // Call heapify on the reduced heap
    heapify(arrayCopy, i, 0, animations);
  }
  
  // Mark the first element as sorted
  animations.push({
    type: 'sorted',
    indices: [0],
    array: [...arrayCopy]
  });
  
  return animations;
}

function heapify(
  array: number[],
  n: number,
  i: number,
  animations: SortingStep[]
): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  // If left child is larger than root
  if (left < n) {
    // Add comparison animation
    animations.push({
      type: 'comparison',
      indices: [left, largest],
      array: [...array]
    });
    
    if (array[left] > array[largest]) {
      largest = left;
    }
  }
  
  // If right child is larger than largest so far
  if (right < n) {
    // Add comparison animation
    animations.push({
      type: 'comparison',
      indices: [right, largest],
      array: [...array]
    });
    
    if (array[right] > array[largest]) {
      largest = right;
    }
  }
  
  // If largest is not root
  if (largest !== i) {
    // Swap
    [array[i], array[largest]] = [array[largest], array[i]];
    
    // Add swap animation
    animations.push({
      type: 'swap',
      indices: [i, largest],
      array: [...array]
    });
    
    // Recursively heapify the affected sub-tree
    heapify(array, n, largest, animations);
  }
} 