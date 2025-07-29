import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { servicesData } from "./Services";
import { ArrowLeft, CheckCircle, DollarSign, Clock, Shield } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
<div className="bg-white shadow-sm">
  <div className="container mx-auto px-4 py-4">
    <Link
      to="/services"
      className="group inline-flex items-center space-x-2 text-gray-600 hover:text-[#0184fa] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
    >
      <ArrowLeft className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-x-1" />
      <span className="relative font-medium">
        Back to Services
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0184fa] transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  </div>
</div>


      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-6 mb-8">
              <motion.div
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <service.icon className="h-10 w-10 text-white" />
              </motion.div>
              <div>
                <motion.h1
                  className="text-4xl font-bold"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {service.title}
                </motion.h1>
                <motion.div
                  className="flex items-center space-x-4 mt-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="text-xl font-bold text-white">
                    {service.price}
                  </span>
                  <span className="text-white">{service.duration}</span>
                </motion.div>
              </div>
            </div>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {service.fullDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Image and Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image with Animation (now optional, as it's in the hero) */}
            <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-64 lg:h-full object-cover"
                initial={{ scale: 1.2, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
              />
            </div>

            {/* Details */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Service Overview
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e6f0fd] rounded-xl flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-[#0184fa]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Starting Price</div>
                    <div className="text-gray-600">{service.price}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e6f0fd] rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#0184fa]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Timeline</div>
                    <div className="text-gray-600">{service.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#e6f0fd] rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#0184fa]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Guarantee</div>
                    <div className="text-gray-600">100% Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/contact">
                  <motion.button
                    className="w-full bg-[#0184fa] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#014fa] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl shadow-sm"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-[#0184fa]" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}