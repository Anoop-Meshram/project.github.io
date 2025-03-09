import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SortingVisualizer from './components/SortingVisualizer';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  const [algorithm, setAlgorithm] = useState('bubble');
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [showLanding, setShowLanding] = useState(true);
  const [hasSeenLanding, setHasSeenLanding] = useState(false);
  
  // Check if user has already seen the landing page
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedSortingVisualizer');
    if (hasVisited) {
      setShowLanding(false);
      setHasSeenLanding(true);
    }
  }, []);
  
  const handleEnterApp = () => {
    // Store that user has seen landing page
    localStorage.setItem('hasVisitedSortingVisualizer', 'true');
    setHasSeenLanding(true);
    
    // Animate out landing page
    setShowLanding(false);
  };
  
  // Dark theme particle background effect for the main app
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10
  }));
  
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -20,
              transition: { duration: 0.6 }
            }}
          >
            <LandingPage onEnter={handleEnterApp} />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={hasSeenLanding ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col relative overflow-hidden"
          >
            {/* Background particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full bg-primary bg-opacity-20"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                  }}
                  animate={{
                    y: ['0%', '100%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    y: {
                      duration: particle.duration,
                      repeat: Infinity,
                      ease: 'linear'
                    },
                    opacity: {
                      duration: particle.duration / 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }
                  }}
                />
              ))}
            </div>
            
            <Header 
              algorithm={algorithm}
              setAlgorithm={setAlgorithm}
              arraySize={arraySize}
              setArraySize={setArraySize}
              speed={speed}
              setSpeed={setSpeed}
            />
            
            <main className="flex-grow container-custom py-8 z-10">
              <SortingVisualizer 
                algorithm={algorithm}
                arraySize={arraySize}
                speed={speed}
              />
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 