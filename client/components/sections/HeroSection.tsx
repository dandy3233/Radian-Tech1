import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Brain, Cloud, Code, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt'; // For 3D tilt effect on cards

const services = [
  {
    icon: Brain,
    title: "ERP",
    description: "Streamlined enterprise resource planning for efficient business management.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-[#0184fa] to-[#db0751]"
  },
  {
    icon: Cloud,
    title: "IT Service",
    description: "Comprehensive IT support and solutions for your business needs.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-[#0184fa] to-[#db0751]"
  },
  {
    icon: Code,
    title: "Web & App Design",
    description: "Creative and functional web and app design services.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-[#0184fa] to-[#db0751]"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Robust security solutions to protect your digital assets.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    gradient: "from-[#0184fa] to-[#db0751]"
  }
];

const heroContent = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&crop=center",
    fallbackImage: "https://via.placeholder.com/1920x1080.png?text=Digital+Transformation",
    badge: "Radian-Tech • Innovation Leaders",
    title: "TRANSFORMING",
    highlight: "DIGITAL FUTURES",
    subtitle: "Pioneering next-generation technology solutions that revolutionize how businesses operate in the digital age."
  },
  {
    image: "https://images.unsplash.com/photo-1516321310762-479437144403?w=1920&h=1080&fit=crop&crop=center",
    fallbackImage: "https://via.placeholder.com/1920x1080.png?text=Global+Enterprises",
    badge: "Radian-Tech • Global Solutions",
    title: "EMPOWERING",
    highlight: "GLOBAL ENTERPRISES",
    subtitle: "Delivering scalable technology infrastructure and strategic solutions for Fortune 500 companies worldwide."
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e175b?w=1920&h=1080&fit=crop&crop=center",
    fallbackImage: "https://via.placeholder.com/1920x1080.png?text=Intelligent+Systems",
    badge: "Radian-Tech • AI Specialists",
    title: "BUILDING",
    highlight: "INTELLIGENT SYSTEMS",
    subtitle: "Creating smart automation and AI-powered solutions that drive efficiency and accelerate business growth."
  }
];

const backgroundImages = heroContent.map(content => content.image);

// CountUp Component
function CountUp({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <motion.span
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.3, delay: duration }}
    >
      {Math.round(count * 10) / 10}{suffix}
    </motion.span>
  );
}

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const containerRef = useRef(null);

  // Parallax effect for title
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useSpring(0, { stiffness: 100, damping: 20 });
  const y = useSpring(0, { stiffness: 100, damping: 20 });
  const parallaxX = useTransform(x, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = (e.clientX - centerX) / rect.width;
        const mouseY = (e.clientY - centerY) / rect.height;
        setMousePosition({ x: mouseX, y: mouseY });
        x.set(mouseX);
        y.set(mouseY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative min-h-screen overflow-hidden" ref={containerRef}>
      {/* Full background image with overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-black/50 z-10"
          animate={{ opacity: [0.5, 0.4, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1,
            }}
            transition={{
              opacity: { duration: 1, ease: "circInOut" },
              scale: { duration: 8, ease: "circInOut" },
            }}
          />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        {/* Hero Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
            key={`badge-${currentImageIndex}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(1, 132, 250, 0.5)" }}
          >
            <Zap className="h-5 w-5 text-[#0184fa]" />
            <span className="text-sm font-medium">{heroContent[currentImageIndex].badge}</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                >
                  <Star className="h-3 w-3 fill-[#db0751] text-[#db0751]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ x: parallaxX, y: parallaxY }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.4 }}
            key={`title-${currentImageIndex}`}
          >
            <span className="block">{heroContent[currentImageIndex].title}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0184fa] to-[#db0751]">
              {heroContent[currentImageIndex].highlight}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.6 }}
            key={`subtitle-${currentImageIndex}`}
          >
            {heroContent[currentImageIndex].subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(1, 132, 250, 0.5)" }}>
              {/* <Button
                size="lg"
                className="bg-[#0184fa] hover:bg-[#016dd5] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                onClick={() => window.location.href = '/consultation'}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(1, 132, 250, 0.5)" }}>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-[#0184fa] text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-[#0184fa]/20"
                onClick={() => window.location.href = '/Products'}
              >
                <Play className="mr-2 h-5 w-5" />
                View Our Solutions
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.8 }}
          >
            
          </motion.div>

        {/* Image Transition Indicators */}
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentImageIndex ? 'bg-[#0184fa] w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.3, boxShadow: "0 0 10px rgba(1, 132, 250, 0.5)" }}
              whileTap={{ scale: 0.9 }}
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
              <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
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
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition duration-500 h-full">
                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-[#e01414] opacity-0 group-hover:opacity-90 transition duration-500"
                      whileHover={{
                        background: [
                          "radial-gradient(circle at 50% 50%, rgba(224, 20, 20, 0.9) 0%, transparent 70%)",
                          "radial-gradient(circle at 50% 50%, rgba(224, 20, 20, 0.9) 10%, transparent 80%)",
                          "radial-gradient(circle at 50% 50%, rgba(224, 20, 20, 0.9) 0%, transparent 70%)",
                        ],
                      }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
                    />
                    {/* Animated glow outline */}
                    <motion.div
                      className="absolute -inset-1 rounded-2xl bg-[#e01414]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <div className="p-6 text-left relative z-10 h-full flex flex-col justify-between">
                      <motion.div
                        className="flex items-center mb-5"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-16 h-16 bg-[#e01414] rounded-xl flex items-center justify-center text-3xl text-white shadow-lg mr-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#db0751]">
                          {service.icon}
                        </div>
                        <motion.div
                          className="bg-[#e01414] text-white px-2 py-1 rounded-full text-xs font-semibold shadow"
                          animate={{ scale: [1, 1.2, 1] }}
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
              </Tilt>
            ))}
          </div>
        </motion.div>
        
      </div>
      <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2> */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.5 }}
        >
          {[
            { value: 280, suffix: "+", label: "Enterprise Clients" },
            { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Monitoring" },
            { value: 150, suffix: "+", label: "Countries Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.2, ease: "easeOut" }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#0184fa] mb-3">
                {stat.value === "24/7" ? "24/7" : inView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix || ""} /> : "0"}
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </section>
  );
}