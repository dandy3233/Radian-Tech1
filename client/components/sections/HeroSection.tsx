import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Brain, Cloud, Code, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: "ERP",
    description: "Streamlined enterprise resource planning for efficient business management.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Cloud,
    title: "IT Service",
    description: "Comprehensive IT support and solutions for your business needs.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Code,
    title: "Web & App Design",
    description: "Creative and functional web and app design services.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-pink-500 to-yellow-500"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Robust security solutions to protect your digital assets.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-green-500 to-emerald-500"
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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Full background image with overlay for both halves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0, scale: index === currentImageIndex ? [1.1, 1.05] : 1.1 }}
            transition={{ opacity: { duration: 2, ease: "easeInOut" }, scale: { duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }}
          />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        {/* Hero Content (Top half) */}
        <div className="max-w-4xl mx-auto text-center mb-16 text-white">
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
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
            </div>
          </motion.div>

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
                index === currentImageIndex ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
        </div>
        
              {/* Bottom half with background image and white card overlay */}
   <div className="relative z-20 pt-12 pb-20">
  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white z-10" />

  <motion.div
    className="max-w-7xl mx-auto relative z-20"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "AI & Machine Learning",
          desc: "Next-gen AI algorithms and ML models for predictive analytics and automation.",
          icon: "🧠",
        },
        {
          title: "Cloud Infrastructure",
          desc: "Scalable cloud architecture with enterprise-grade security and performance.",
          icon: "☁️",
        },
        {
          title: "Custom Software",
          desc: "Bespoke applications built with cutting-edge technologies and frameworks.",
          icon: "💻",
        },
        {
          title: "Cybersecurity",
          desc: "Advanced threat protection with real-time monitoring and incident response.",
          icon: "🛡️",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ y: -12, scale: 1.05 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition duration-500 h-full">
            {/* Red gradient overlay on hover */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-90 transition duration-500" />
            
            {/* Animated red glow outline */}
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-400/40 to-red-600/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <div className="p-6 text-left relative z-10 h-full flex flex-col justify-between">
              <motion.div
                className="flex items-center mb-5"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg mr-4 transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                  {service.icon}
                </div>

                <motion.div
                  className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.3,
                  }}
                >
                  /{index + 1}
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-base text-gray-600 leading-relaxed mt-2 group-hover:text-white/90 transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {service.desc}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>






    </section>
  );
}