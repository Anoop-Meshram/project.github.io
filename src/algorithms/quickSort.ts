import { SortingStep } from '../types';

export function quickSort(array: number[]): SortingStep[] {
  const animations: SortingStep[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  quickSortHelper(arrayCopy, 0, n - 1, animations);
  
  return animations;
}

function quickSortHelper(
  array: number[],
  low: number,
  high: number,
  animations: SortingStep[]
): void {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(array, low, high, animations);
    
    // Mark the pivot as sorted
    animations.push({
      type: 'sorted',
      indices: [pivotIndex],
      array: [...array]
    });
    
    // Recursively sort the sub-arrays
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  } else if (low === high) {
    // If there's only one element, mark it as sorted
    animations.push({
      type: 'sorted',
      indices: [low],
      array: [...array]
    });
  }
}

function partition(
  array: number[],
  low: number,
  high: number,
  animations: SortingStep[]
): number {
  // Choose the rightmost element as pivot
  const pivot = array[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    // Add comparison animation
    animations.push({
      type: 'comparison',
      indices: [j, high], // Compare current element with pivot
      array: [...array]
    });
    
    if (array[j] <= pivot) {
      i++;
      
      // Swap elements
      [array[i], array[j]] = [array[j], array[i]];
      
      // Add swap animation
      animations.push({
        type: 'swap',
        indices: [i, j],
        array: [...array]
      });
    }
  }
  
  // Swap the pivot element with the element at (i + 1)
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  
  // Add swap animation for the pivot
  animations.push({
    type: 'swap',
    indices: [i + 1, high],
    array: [...array]
  });
  
  return i + 1;
} 