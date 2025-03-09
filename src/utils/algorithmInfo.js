export const algorithmsInfo = {
  bubble: {
    name: "Bubble Sort",
    description: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. It's called 'Bubble Sort' because smaller elements 'bubble' to the top of the list with each iteration.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    stability: true,
    steps: [
      "Start from the first element and compare each pair of adjacent elements",
      "If they are in the wrong order, swap them",
      "Continue until the end of the list",
      "Repeat the process until no more swaps are needed"
    ],
    color: "#4C51BF" // primary
  },
  
  insertion: {
    name: "Insertion Sort",
    description: "Insertion Sort builds the final sorted array one item at a time. It takes one element from the input data in each iteration and finds its correct position in the already sorted part of the array. It's efficient for small data sets and is often used as part of more sophisticated algorithms.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    stability: true,
    steps: [
      "Start from the second element (assume first element is sorted)",
      "Compare current element with previous elements",
      "Shift greater elements to the right to make space for the current element",
      "Insert the element at its correct position",
      "Continue until the entire array is sorted"
    ],
    color: "#6B46C1" // secondary
  },
  
  selection: {
    name: "Selection Sort",
    description: "Selection Sort divides the input list into two parts: a sorted sublist and an unsorted sublist. The algorithm repeatedly finds the minimum element from the unsorted sublist and puts it at the end of the sorted sublist. Selection Sort is notable for its simplicity but generally performs worse than Insertion Sort.",
    timeComplexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(1)",
    stability: false,
    steps: [
      "Find the minimum element in the unsorted part of the array",
      "Swap it with the element at the beginning of the unsorted part",
      "Move the boundary between sorted and unsorted subarrays one element to the right",
      "Repeat until the entire array is sorted"
    ],
    color: "#ED64A6" // accent
  },
  
  merge: {
    name: "Merge Sort",
    description: "Merge Sort is an efficient, divide-and-conquer algorithm. It divides the input array into two halves, recursively sorts them, and then merges the sorted halves. Merge Sort has a consistent performance and is often used for sorting linked lists due to its stable sorting nature.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(n)",
    stability: true,
    steps: [
      "Divide the array into two halves",
      "Recursively sort both halves",
      "Merge the sorted halves by comparing elements and placing them in correct order",
      "Continue until the entire array is sorted"
    ],
    color: "#38B2AC" // teal
  },
  
  quick: {
    name: "Quick Sort",
    description: "Quick Sort is a highly efficient sorting algorithm based on the divide-and-conquer approach. It picks an element as a pivot and partitions the array around the pivot. Quick Sort is widely used because it's one of the fastest sorting algorithms with an average time complexity of O(n log n), though it can degrade to O(n²) in worst cases.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
    },
    spaceComplexity: "O(log n)",
    stability: false,
    steps: [
      "Choose a 'pivot' element from the array",
      "Partition the array: items less than pivot to the left, greater than pivot to the right",
      "Place the pivot in its final sorted position",
      "Recursively apply the above steps to the sub-arrays on the left and right of the pivot"
    ],
    color: "#DD6B20" // orange
  },
  
  heap: {
    name: "Heap Sort",
    description: "Heap Sort uses a binary heap data structure to sort elements. It first builds a max heap from the input data, then repeatedly extracts the maximum element and rebuilds the heap until the entire array is sorted. Heap Sort combines the better attributes of Insertion and Merge sorts - it's in-place like Insertion Sort and has O(n log n) time complexity like Merge Sort.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(1)",
    stability: false,
    steps: [
      "Build a max heap from the input data",
      "Swap the root (maximum element) with the last element of the heap",
      "Reduce the heap size by 1",
      "Heapify the root of the tree",
      "Repeat until the heap size is 1"
    ],
    color: "#9F7AEA" // purple
  }
}; 