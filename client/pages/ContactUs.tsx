import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' }); // Clear error on input change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add actual form submission logic here
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Animated background particles */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-[#0184fa]/20 rounded-full"
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

      <motion.header
        className="bg-gradient-to-r from-[#0184fa] to-[#db0751] text-white text-center py-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mt-16">Contact Us</h1>
      </motion.header>

      <motion.section
        className="text-center py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We are here to help you. Reach out to us via any of the following methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[
            { title: 'Call Us', content: '+251-927-44-61-71', icon: Phone },
            { title: 'Email Us', content: 'contact@wisedoctors.com', icon: Mail },
            { title: 'Visit Us', content: 'Lag hare Addis Ababa, Ethiopia, ', icon: MapPin },
          ].map((item, index) => (
            <Tilt options={{ max: 15, scale: 1.05, speed: 400 }} key={index}>
              <motion.div
                className="relative p-4 shadow-lg rounded-2xl bg-white group overflow-hidden transition duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Solid background on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#db0751] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Animated glow outline */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-[#db0751]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-[#0184fa] rounded-xl flex items-center justify-center shadow-lg mr-4 transition-all duration-300 group-hover:bg-[#0184fa]">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mt-2 group-hover:text-white/90 transition-colors duration-300">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0184fa] transition ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0184fa] transition ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0184fa] transition ${
                errors.message ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="w-full bg-[#0184fa] text-white py-3 rounded-lg shadow-lg hover:bg-[#db0751] transition-colors relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[#db0751]"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Send Message</span>
            </Button>
          </motion.div>
        </form>
      </motion.section>
    </div>
  );
}