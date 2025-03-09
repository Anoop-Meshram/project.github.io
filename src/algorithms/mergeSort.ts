import { SortingStep } from '../types';

export function mergeSort(array: number[]): SortingStep[] {
  const animations: SortingStep[] = [];
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  if (n <= 1) return animations;
  
  const auxiliaryArray = [...arrayCopy];
  mergeSortHelper(arrayCopy, 0, n - 1, auxiliaryArray, animations);
  
  return animations;
}

function mergeSortHelper(
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: SortingStep[]
): void {
  if (startIdx === endIdx) return;
  
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  
  // Sort first and second halves
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  
  merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: SortingStep[]
): void {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  
  // Merge the two halves
  while (i <= middleIdx && j <= endIdx) {
    // Add comparison animation
    animations.push({
      type: 'comparison',
      indices: [i, j],
      array: [...mainArray]
    });
    
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // Add swap animation (even though it's not a swap, we're overwriting)
      mainArray[k] = auxiliaryArray[i];
      animations.push({
        type: 'swap',
        indices: [k, i],
        array: [...mainArray]
      });
      i++;
    } else {
      // Add swap animation
      mainArray[k] = auxiliaryArray[j];
      animations.push({
        type: 'swap',
        indices: [k, j],
        array: [...mainArray]
      });
      j++;
    }
    k++;
  }
  
  // Copy the remaining elements
  while (i <= middleIdx) {
    mainArray[k] = auxiliaryArray[i];
    animations.push({
      type: 'swap',
      indices: [k, i],
      array: [...mainArray]
    });
    i++;
    k++;
  }
  
  while (j <= endIdx) {
    mainArray[k] = auxiliaryArray[j];
    animations.push({
      type: 'swap',
      indices: [k, j],
      array: [...mainArray]
    });
    j++;
    k++;
  }
  
  // Mark the sorted elements
  for (let idx = startIdx; idx <= endIdx; idx++) {
    if (startIdx === 0 && endIdx === mainArray.length - 1) {
      animations.push({
        type: 'sorted',
        indices: [idx],
        array: [...mainArray]
      });
    }
  }
} 