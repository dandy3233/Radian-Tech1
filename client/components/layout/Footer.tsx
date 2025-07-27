import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap } from 'lucide-react';

const solutionsLinks = ["AI & Machine Learning", "Cloud Infrastructure", "Custom Development", "Cybersecurity"];
const companyLinks = ["About Us", "Careers", "Contact", "Tech Blog"];
const legalLinks = ["Privacy", "Terms", "Security"];

const contactInfo = [
  { icon: Phone, text: "+1-800-RADIAN (724-4326)" },
  { icon: Mail, text: "hello@radian-tech.com" },
  { icon: MapPin, text: "Silicon Valley, CA • Global Presence" }
];

export function Footer() {
  return (
    <motion.footer 
      className="bg-slate-900 text-white py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-4 gap-12"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 radian-gradient rounded-lg flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 0px hsl(var(--radian-blue))",
                    "0 0 20px hsl(var(--radian-blue) / 0.5)",
                    "0 0 0px hsl(var(--radian-blue))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <div className="text-2xl font-bold">Radian-Tech</div>
                <div className="text-sm text-gray-400">Advanced Technology Solutions</div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Leading the future of enterprise technology with AI-driven solutions, 
              cloud infrastructure, and unparalleled expertise.
            </motion.p>
            
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 group cursor-pointer"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                  <span className="group-hover:text-white transition-colors">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-6 text-lg">Solutions</h3>
            <ul className="space-y-3 text-gray-300">
              {solutionsLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-300">
              {companyLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            &copy; 2024 Radian-Tech. All rights reserved. • Advanced Technology Solutions
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
