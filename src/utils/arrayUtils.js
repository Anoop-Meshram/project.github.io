/**
 * Generates a random array of numbers
 * @param {number} size The size of the array to generate
 * @param {number} min The minimum value (inclusive)
 * @param {number} max The maximum value (inclusive)
 * @returns {number[]} A random array of numbers
 */
export function generateRandomArray(size, min = 5, max = 100) {
  return Array.from({ length: size }, () => 
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}

/**
 * Generates a nearly sorted array
 * @param {number} size The size of the array to generate
 * @param {number} swapCount The number of swaps to perform
 * @returns {number[]} A nearly sorted array
 */
export function generateNearlySortedArray(size, swapCount = 5) {
  // Create a sorted array
  const array = Array.from({ length: size }, (_, i) => i + 1);
  
  // Perform random swaps
  for (let i = 0; i < swapCount; i++) {
    const idx1 = Math.floor(Math.random() * size);
    const idx2 = Math.floor(Math.random() * size);
    
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }
  
  return array;
}

/**
 * Generates a reversed array
 * @param {number} size The size of the array to generate
 * @returns {number[]} A reversed array
 */
export function generateReversedArray(size) {
  return Array.from({ length: size }, (_, i) => size - i);
}

/**
 * Generates a few unique values array (good for testing counting sort)
 * @param {number} size The size of the array to generate
 * @param {number} uniqueCount The number of unique values
 * @returns {number[]} An array with few unique values
 */
export function generateFewUniqueArray(size, uniqueCount = 5) {
  const uniqueValues = Array.from(
    { length: uniqueCount }, 
    (_, i) => Math.floor(Math.random() * 100) + 1
  );
  
  return Array.from(
    { length: size }, 
    () => uniqueValues[Math.floor(Math.random() * uniqueCount)]
  );
} 