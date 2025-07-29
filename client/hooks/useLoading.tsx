import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  loadingMessage: string;
  setLoadingMessage: (message: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
  initialLoading?: boolean;
  autoHideAfter?: number;
}

export function LoadingProvider({ 
  children, 
  initialLoading = true, 
  autoHideAfter = 3000 
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  useEffect(() => {
    if (initialLoading && autoHideAfter > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, autoHideAfter);

      return () => clearTimeout(timer);
    }
  }, [initialLoading, autoHideAfter]);

  const value: LoadingContextType = {
    isLoading,
    setIsLoading,
    loadingProgress,
    setLoadingProgress,
    loadingMessage,
    setLoadingMessage,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

// Custom hook for simulating loading with progress
export function useSimulateLoading(duration: number = 3000) {
  const { setLoadingProgress, setLoadingMessage, setIsLoading } = useLoading();
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    'Initializing application...',
    'Loading components...',
    'Connecting to services...',
    'Optimizing performance...',
    'Almost ready...',
  ];

  useEffect(() => {
    let progress = 0;
    const increment = 100 / (duration / 50); // Update every 50ms

    const interval = setInterval(() => {
      progress += increment;
      
      if (progress >= 100) {
        progress = 100;
        setLoadingProgress(100);
        setLoadingMessage('Ready!');
        
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        
        clearInterval(interval);
      } else {
        setLoadingProgress(progress);
        
        // Update message based on progress
        const stepIndex = Math.floor((progress / 100) * loadingSteps.length);
        const currentStepIndex = Math.min(stepIndex, loadingSteps.length - 1);
        
        if (currentStepIndex !== currentStep) {
          setCurrentStep(currentStepIndex);
          setLoadingMessage(loadingSteps[currentStepIndex]);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, setLoadingProgress, setLoadingMessage, setIsLoading, currentStep]);

  return { currentStep, loadingSteps };
}

// Hook for manual loading control
export function useManualLoading() {
  const { setIsLoading, setLoadingProgress, setLoadingMessage } = useLoading();

  const startLoading = (message: string = 'Loading...') => {
    setLoadingMessage(message);
    setLoadingProgress(0);
    setIsLoading(true);
  };

  const updateProgress = (progress: number, message?: string) => {
    setLoadingProgress(progress);
    if (message) {
      setLoadingMessage(message);
    }
  };

  const finishLoading = () => {
    setLoadingProgress(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return {
    startLoading,
    updateProgress,
    finishLoading,
  };
}

// Hook for route-based loading
export function useRouteLoading() {
  const { setIsLoading, setLoadingMessage } = useLoading();

  const showRouteLoading = (routeName: string) => {
    setLoadingMessage(`Loading ${routeName}...`);
    setIsLoading(true);
    
    // Simulate route loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return { showRouteLoading };
}
