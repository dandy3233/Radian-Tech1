import { motion } from 'framer-motion';

interface ParticleProps {
  delay: number;
}

export function Particle({ delay }: ParticleProps) {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-primary/30 rounded-full"
      initial={{ y: "100vh", opacity: 0, scale: 0 }}
      animate={{
        y: "-100vh",
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
      }}
      transition={{
        duration: 15,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}
