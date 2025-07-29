import { motion } from 'framer-motion';
import { Brain, Cloud, Code, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tilt } from 'react-tilt';

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Next-gen AI algorithms and ML models for predictive analytics and automation.",
    delay: 0
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture with enterprise-grade security and performance.",
    delay: 0.2
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Bespoke applications built with cutting-edge technologies and frameworks.",
    delay: 0.4
  },
  {
    icon: BarChart,
    title: "ERP",
    description: "Integrated business management software for streamlined operations and data-driven decisions.",
    delay: 0.6
  }
];

export function ServicesSection() {
  return (
    <motion.section 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background image for services */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&crop=center')`
           }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-white/95"></div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ OUR SERVICES
            </motion.span>
          </motion.div>
          <motion.h2 
            className="text-5xl font-bold text-foreground mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Next-Generation <span className="text-gradient">Technology</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Cutting-edge solutions powered by artificial intelligence and cloud technologies
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Tilt options={{ max: 15, scale: 1.05, speed: 400 }} key={index}>
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: service.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
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
                      <div className="w-16 h-16 bg-[#e01414] rounded-xl flex items-center justify-center shadow-lg mr-4 transition-all duration-300 group-hover:bg-white">
                        <service.icon className="h-10 w-10 text-white group-hover:text-[#db0751]" />
                      </div>
                      {/* <motion.div
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
                      </motion.div> */}
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + service.delay }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-base text-gray-600 leading-relaxed mt-2 group-hover:text-white/90 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + service.delay }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                Explore All Services
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}