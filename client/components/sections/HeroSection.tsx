import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Brain, Cloud, Code, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: "AI Intelligence",
    description: "Revolutionary AI systems that learn, adapt, and optimize your business operations automatically.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Cloud,
    title: "Cloud Mastery",
    description: "Next-generation cloud platforms that scale infinitely with bulletproof security and performance.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Code,
    title: "Digital Innovation",
    description: "Custom software solutions that transform ideas into powerful, market-leading applications.",
    gradient: "from-pink-500 to-red-600"
  },
  {
    icon: Shield,
    title: "Cyber Defense",
    description: "Military-grade security systems that protect your digital assets from evolving cyber threats.",
    gradient: "from-red-500 to-orange-600"
  }
];

const heroContent = [
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&crop=center",
    badge: "Radian-Tech • Innovation Leaders",
    title: "TRANSFORMING",
    highlight: "DIGITAL FUTURES",
    subtitle: "Pioneering next-generation technology solutions that revolutionize how businesses operate in the digital age."
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&crop=center",
    badge: "Radian-Tech • Enterprise Excellence",
    title: "EMPOWERING",
    highlight: "GLOBAL ENTERPRISES",
    subtitle: "Delivering scalable technology infrastructure and strategic solutions for Fortune 500 companies worldwide."
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=1080&fit=crop&crop=center",
    badge: "Radian-Tech • AI Specialists",
    title: "BUILDING",
    highlight: "INTELLIGENT SYSTEMS",
    subtitle: "Creating smart automation and AI-powered solutions that drive efficiency and accelerate business growth."
  }
];

const backgroundImages = heroContent.map(content => content.image);

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // Change image every 8 seconds for slow motion effect
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Images with Slow Motion Transitions */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${image}')`
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? [1.1, 1.05] : 1.1
            }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
            }}
          />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-4 pt-20 pb-12">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Company Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            key={`badge-${currentImageIndex}`}
          >
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{heroContent[currentImageIndex].badge}</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            key={`title-${currentImageIndex}`}
          >
            <span className="block">{heroContent[currentImageIndex].title}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {heroContent[currentImageIndex].highlight}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={`subtitle-${currentImageIndex}`}
          >
            {heroContent[currentImageIndex].subtitle}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="radian-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white/20"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Solutions
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-300">AI Monitoring</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
          </motion.div>
        </div>

        {/* Image Transition Indicators */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? 'bg-primary w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Service Cards at Bottom of Hero - Matching Image Layout */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className={`h-48 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  index === 1
                    ? 'bg-primary text-white border-primary hover:bg-primary/90'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-primary hover:bg-primary hover:text-white hover:shadow-primary/20'
                }`}>
                  {/* Card Number */}
                  <div className={`absolute top-4 right-4 text-xs font-medium transition-colors duration-300 ${
                    index === 1 ? 'opacity-70' : 'opacity-70 group-hover:text-white/90'
                  }`}>
                    /{index + 1}
                  </div>

                  <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                        index === 1
                          ? 'bg-white/20 group-hover:bg-white/30 group-hover:scale-110'
                          : 'bg-primary text-white group-hover:bg-white group-hover:text-primary group-hover:scale-110'
                      }`}>
                        <service.icon className="h-6 w-6 transition-transform duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                        index === 1
                          ? 'text-white group-hover:text-white'
                          : 'text-gray-900 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      index === 1
                        ? 'text-white/90 group-hover:text-white'
                        : 'text-gray-600 group-hover:text-white/90'
                    }`}>
                      {service.description.length > 80
                        ? service.description.substring(0, 80) + '...'
                        : service.description}
                    </p>
                  </CardContent>

                  {/* Enhanced hover effects */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    index === 1
                      ? 'bg-primary/10 opacity-0 group-hover:opacity-100'
                      : 'bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
