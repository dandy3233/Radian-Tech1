import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

export function LoadingPage({ onLoadingComplete, duration = 3000 }: LoadingPageProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Initializing Radian-Tech Systems...",
    "Loading Components...",
    "Connecting to Services...",
    "Optimizing Performance...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update step based on progress
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, duration / 30);

    return () => clearInterval(interval);
  }, [duration, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        
        {/* Company Logo/Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-2xl">
            <motion.div
  className="w-12 h-12"
  animate={{ rotate: [0, 360] }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
>
  <img
    src="./images/logo.png" // <-- replace this with your actual image path
    alt="Logo"
    className="w-full h-full object-contain"
  />
</motion.div>

          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Radian-Tech
        </motion.h1>

        <motion.p
          className="text-blue-200 mb-12 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transforming Digital Futures
        </motion.p>

        {/* Progress Bar Container */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Progress Background */}
          <div className="w-full h-2 bg-white/20 rounded-full mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Percentage */}
          <div className="flex justify-between items-center mb-6">
            <motion.span
              className="text-white/80 text-sm"
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {loadingSteps[currentStep]}
            </motion.span>
            <span className="text-white font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Tech Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-10">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }, (_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  opacity: [0.1, 0.8, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute -bottom-20 -right-20 w-32 h-32 opacity-10">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }, (_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Corner Elements */}
      <motion.div
        className="absolute top-8 left-8 w-8 h-8 border-2 border-white/30 rounded-lg"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-8 right-8 w-6 h-6 bg-accent/30 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-8 left-8 w-10 h-2 bg-primary/30 rounded-full"
        animate={{ scaleX: [1, 2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-8 right-8 w-4 h-4 border border-white/30"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
