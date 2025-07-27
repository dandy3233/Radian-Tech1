import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  delay: number;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Solutions",
    description: "Next-gen AI algorithms and ML models for predictive analytics and automation.",
    gradient: "from-blue-500 to-purple-600",
    delay: 0
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    subtitle: "Services",
    description: "Scalable cloud architecture with enterprise-grade security and performance.",
    gradient: "from-purple-500 to-pink-600",
    delay: 0.2
  },
  {
    icon: Code,
    title: "Custom Software",
    subtitle: "Development",
    description: "Bespoke applications built with cutting-edge technologies and frameworks.",
    gradient: "from-pink-500 to-red-600",
    delay: 0.4
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Excellence",
    description: "Advanced threat protection with real-time monitoring and incident response.",
    gradient: "from-red-500 to-orange-600",
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
            <motion.div
              key={index}
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
            >
              <Card className="group border-0 bg-white/80 backdrop-blur-sm h-full overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      animate={{ 
                        boxShadow: [
                          "0 10px 30px rgba(0,0,0,0.1)",
                          "0 20px 60px rgba(0,0,0,0.2)",
                          "0 10px 30px rgba(0,0,0,0.1)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <motion.div 
                      className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      /{index + 1}
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + service.delay }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.h4 
                    className="text-lg font-semibold text-primary mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + service.delay }}
                  >
                    {service.subtitle}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + service.delay }}
                  >
                    {service.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
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
