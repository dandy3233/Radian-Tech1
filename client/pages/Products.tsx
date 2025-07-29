import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Cloud,
  Smartphone,
  Shield,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
} from "lucide-react";

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  specifications: string[];
  technologies: string[];
  advantages: string[];
  price: string;
  deliveryTime: string;
  image: string;
  color: string;
  bgColor: string;
}

export const productsData: Product[] = [
  {
    id: "erp-solution",
    title: "ERP Solution",
    shortDescription: "A comprehensive ERP system to streamline your business operations.",
    fullDescription: "The ERP Solution integrates all facets of your business into a unified platform, offering advanced modules for finance, HR, supply chain, and more. Designed to enhance efficiency, provide real-time insights, and support scalable growth for enterprises of all sizes.",
    icon: Brain,
    specifications: [
      "Financial Management Module",
      "Human Resources Integration",
      "Supply Chain Optimization",
      "Real-Time Analytics Dashboard",
      "Inventory Management System",
      "Customizable Workflow Tools",
    ],
    technologies: ["SAP", "Oracle NetSuite", "Microsoft Dynamics", "Odoo", "PostgreSQL"],
    advantages: [
      "Increases efficiency by 35%",
      "Centralizes data management",
      "Improves decision-making",
      "Supports scalability",
      "Reduces operational costs",
    ],
    price: "From $10,000",
    deliveryTime: "4-8 months",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "cloud-master-platform",
    title: "Cloud Mastery Platform",
    shortDescription: "A scalable cloud platform with top-tier security features.",
    fullDescription: "The Cloud Mastery Platform offers a robust solution for cloud computing needs, including migration tools, auto-scaling capabilities, and bulletproof security. Ideal for businesses looking to scale infrastructure efficiently.",
    icon: Cloud,
    specifications: [
      "Cloud Migration Tools",
      "Infrastructure as Code",
      "Auto-scaling Features",
      "Security Enhancements",
      "Multi-cloud Support",
      "Disaster Recovery System",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker"],
    advantages: [
      "99.9% uptime",
      "Reduces costs by 30%",
      "Ensures security compliance",
      "Enables global access",
      "Includes automatic backups",
    ],
    price: "From $3,000",
    deliveryTime: "2-4 months",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "digital-innovation-kit",
    title: "Digital Innovation Kit",
    shortDescription: "A toolkit for building custom, high-performance applications.",
    fullDescription: "The Digital Innovation Kit empowers you to create custom software solutions, from web and mobile apps to enterprise systems. Packed with development tools and UI/UX design features for unmatched performance.",
    icon: Smartphone,
    specifications: [
      "Web Application Builder",
      "Mobile App Creator",
      "Enterprise Software Framework",
      "API Integration Tools",
      "UI/UX Design Suite",
      "Testing & QA Module",
    ],
    technologies: ["React", "Node.js", "Python", "Flutter", "MongoDB", "PostgreSQL"],
    advantages: [
      "Streamlines processes",
      "Improves user experience",
      "Offers market competitiveness",
      "Supports scalable design",
      "Provides ongoing support",
    ],
    price: "From $8,000",
    deliveryTime: "4-8 months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "cyber-defense-system",
    title: "Cyber Defense System",
    shortDescription: "A comprehensive security system to safeguard your digital assets.",
    fullDescription: "The Cyber Defense System delivers military-grade protection with advanced threat detection, security audits, and 24/7 monitoring. Perfect for businesses prioritizing data security and compliance.",
    icon: Shield,
    specifications: [
      "Security Audit Tools",
      "Threat Detection Module",
      "Compliance Management",
      "Security Training Program",
      "24/7 Monitoring System",
      "Incident Response Kit",
    ],
    technologies: ["Firewall Systems", "SIEM Tools", "Penetration Testing", "Encryption", "VPN"],
    advantages: [
      "99.9% threat detection",
      "Ensures regulatory compliance",
      "Minimizes security risks",
      "Secures customer data",
      "Supports business continuity",
    ],
    price: "From $4,000",
    deliveryTime: "1-2 months",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        id="products"
        className="relative py-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Products
            </motion.h1>
            <motion.p
              className="text-lg text-[#e6f0fd]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our innovative product offerings
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Products Navigation List */}
            <motion.div
              className="space-y-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Products</h3>
                <p className="text-gray-600">Click on any product to view details</p>
              </div>
              {productsData.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`cursor-pointer rounded-xl p-4 shadow-md transition-all duration-300 ${
                    selectedProduct.id === product.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-[#0184fa] text-white hover:bg-red-600 hover:text-white hover:shadow-xl"
                  }`}
                  onClick={() => setSelectedProduct(product)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${product.bgColor} rounded-lg flex items-center justify-center`}>
                      <product.icon className={`h-5 w-5 ${product.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{product.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-[#e6f0fd]">
                        <span>{product.price}</span>
                        <span>{product.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Product Image & Details */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
              key={selectedProduct.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Product Image with Animation */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <motion.div
                  className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <selectedProduct.icon className={`h-8 w-8 ${selectedProduct.color}`} />
                </motion.div>
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 text-gray-900 px-3 py-1 rounded-full font-semibold shadow-lg"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {selectedProduct.price}
                </motion.div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {selectedProduct.title}
                </motion.h2>
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {selectedProduct.fullDescription}
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="bg-[#0184fa] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#014fa] transition-all duration-300"
                  >
                    {showDetails ? "Hide Details" : "Learn More"}
                  </button>
                  <Link to="/contact">
                    <button className="px-6 py-3 border-2 border-[#0184fa] text-[#0184fa] rounded-xl font-semibold hover:bg-[#0184fa] hover:text-white transition-all duration-300">
                      Get Quote
                    </button>
                  </Link>
                  {selectedProduct.id === "erp-solution" && (
                    <Link to={`/demo/${selectedProduct.id}`}>
                      <button className="px-6 py-3 border-2 border-[#0184fa] text-[#0184fa] rounded-xl font-semibold hover:bg-[#0184fa] hover:text-white transition-all duration-300">
                        Demo
                      </button>
                    </Link>
                  )}
                </motion.div>

                {/* Detailed Information Section */}
                {showDetails && (
                  <motion.div
                    className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Specifications</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                      {selectedProduct.specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Technologies</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                      {selectedProduct.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advantages</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                      {selectedProduct.advantages.map((adv, index) => (
                        <li key={index}>{adv}</li>
                      ))}
                    </ul>
                    <div className="flex items-center space-x-4 text-gray-700">
                      <span className="font-semibold">Price:</span>
                      <span>{selectedProduct.price}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-700">
                      <span className="font-semibold">Delivery Time:</span>
                      <span>{selectedProduct.deliveryTime}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}