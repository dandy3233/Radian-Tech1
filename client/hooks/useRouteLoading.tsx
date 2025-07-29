import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from './useLoading';

// Hook to show loading on route changes
export function useRouteLoading() {
  const location = useLocation();
  const { setIsLoading, setLoadingMessage } = useLoading();

  useEffect(() => {
    // Show loading when route changes
    setLoadingMessage('Loading page...');
    setIsLoading(true);

    // Hide loading after a short delay to simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, setIsLoading, setLoadingMessage]);
}

// Hook for manual loading control with custom messages
export function usePageLoading() {
  const { setIsLoading, setLoadingMessage, setLoadingProgress } = useLoading();

  const showLoading = (message: string = 'Loading...', duration: number = 1000) => {
    setLoadingMessage(message);
    setLoadingProgress(0);
    setIsLoading(true);

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }, duration / 10);

    return () => clearInterval(interval);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return { showLoading, hideLoading };
}

// Hook for data fetching loading states
export function useDataLoading() {
  const { setIsLoading, setLoadingMessage } = useLoading();

  const showDataLoading = (operation: string = 'data') => {
    setLoadingMessage(`Loading ${operation}...`);
    setIsLoading(true);
  };

  const hideDataLoading = () => {
    setIsLoading(false);
  };

  return { showDataLoading, hideDataLoading };
}
