# Sorting Algorithm Visualizer

A beautiful, interactive web application that visualizes various sorting algorithms in real-time. Built with React, JavaScript, Framer Motion for animations, and Tailwind CSS for styling.

![Sorting Visualizer Demo](./src/assets/demo.mp4)

## 🚀 Live Demo

[View Live Demo]([https://sorting-visualizer-blue-seven.vercel.app/])

## ✨ Features

- Visualize 6 popular sorting algorithms:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
- Adjust array size to see how algorithms perform with different data sets
- Control animation speed to observe the sorting process in detail
- Pause and continue functionality to analyze specific steps
- Beautiful UI with smooth animations powered by Framer Motion
- Responsive design that works on all devices

## 🛠️ Technologies Used

- **React**: For building the user interface
- **JavaScript**: For implementing the sorting algorithms and application logic
- **Framer Motion**: For smooth animations and transitions
- **Tailwind CSS**: For styling and responsive design
- **Vite**: For fast development and optimized builds

## 🏗️ Project Structure

```
sorting-visualizer/
├── src/
│   ├── algorithms/       # Sorting algorithm implementations
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── assets/           # Static assets
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── types.js          # Type documentation
├── public/               # Public assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sakshinirmal/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📚 Understanding the Algorithms

### Bubble Sort
- **Time Complexity**: O(n²) in worst and average cases, O(n) in best case
- **Space Complexity**: O(1)
- **Description**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### Insertion Sort
- **Time Complexity**: O(n²) in worst and average cases, O(n) in best case
- **Space Complexity**: O(1)
- **Description**: Builds the sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position.

### Selection Sort
- **Time Complexity**: O(n²) in all cases
- **Space Complexity**: O(1)
- **Description**: Repeatedly finds the minimum element from the unsorted part and puts it at the beginning.

### Merge Sort
- **Time Complexity**: O(n log n) in all cases
- **Space Complexity**: O(n)
- **Description**: Divides the array into two halves, recursively sorts them, and then merges the sorted halves.

### Quick Sort
- **Time Complexity**: O(n²) in worst case, O(n log n) in average and best cases
- **Space Complexity**: O(log n)
- **Description**: Picks a pivot element and partitions the array around it, then recursively sorts the sub-arrays.

### Heap Sort
- **Time Complexity**: O(n log n) in all cases
- **Space Complexity**: O(1)
- **Description**: Builds a max heap from the array and repeatedly extracts the maximum element.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- Inspiration from various sorting visualizers across the web 
