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
      className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2 space-y-6">
            <motion.div 
              className="flex items-center space-x-4 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 radian-gradient rounded-xl flex items-center justify-center shadow-lg"
                animate={{ 
                  boxShadow: [
                    "0 0 8px hsl(var(--radian-blue) / 0.3)",
                    "0 0 24px hsl(var(--radian-blue) / 0.6)",
                    "0 0 8px hsl(var(--radian-blue) / 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <div className="text-2xl font-bold tracking-tight">Radian-Tech</div>
                <div className="text-sm text-gray-300">Advanced Technology Solutions</div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-200 leading-relaxed max-w-md text-sm"
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
                  className="flex items-center space-x-3 text-gray-200 group cursor-pointer"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                  <span className="group-hover:text-white transition-colors text-sm">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            className="space-y-5"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg tracking-wide text-gray-100">Solutions</h3>
            <ul className="space-y-2 text-gray-200">
              {solutionsLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="space-y-5 flex flex-col items-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg tracking-wide text-gray-100">Company</h3>
            <ul className="space-y-2 text-gray-200 text-center">
              {companyLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-700/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Radian-Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                transition={{ duration: 0.2 }}
              >
                <Link to={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-primary transition-colors text-sm">
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