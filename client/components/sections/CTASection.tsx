import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustCompanies = ['Microsoft', 'AWS', 'Google', 'IBM', 'Oracle'];

export function CTASection() {
  return (
    <motion.section 
      className="py-24 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background image for CTA */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center')`
           }}
      />
      <div className="absolute inset-0 radian-gradient opacity-90"></div>
      
      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--radian-blue)) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--radian-red)) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, hsl(var(--radian-blue)) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating elements */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 1.5,
            repeat: Infinity,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-8"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join 500+ companies that trust Radian-Tech for their digital transformation journey. 
            Get started with a free consultation and custom solution design.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 px-12 py-4 text-lg font-bold rounded-full shadow-xl group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="mr-3 h-6 w-6" />
                  </motion.div>
                  Start Free Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with animations */}
          <motion.div 
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm mb-6 opacity-70">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-8">
              {trustCompanies.map((company, index) => (
                <motion.div 
                  key={index} 
                  className="text-lg font-semibold opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
