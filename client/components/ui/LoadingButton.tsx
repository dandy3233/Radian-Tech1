import { motion } from 'framer-motion';
import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { Loader2 } from 'lucide-react';
// Removed import of missing hook

interface LoadingButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingButton({
  loading = false,
  loadingText = 'Loading...',
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  className = '',
  ...props
}: LoadingButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg focus:ring-primary/50',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500/50',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}

// Usage example component
// Usage example component
export function LoadingButtonExample() {
  const handleClick = () => {
    // Example click handler
    alert('Processing request...');
  };

  return (
    <div className="space-y-4 p-6">
      <LoadingButton 
        onClick={handleClick}
        variant="primary"
        size="md"
      >
        Click Me
      </LoadingButton>
      
      <LoadingButton 
        loading={true}
        variant="secondary"
        size="lg"
        loadingText="Please wait..."
      >
        Processing
      </LoadingButton>
      
      <LoadingButton 
        variant="outline"
        size="sm"
      >
        Small Button
      </LoadingButton>
    </div>
  );
}

