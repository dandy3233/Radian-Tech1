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

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  features: string[];
  technologies: string[];
  benefits: string[];
  price: string;
  duration: string;
  image: string;
  color: string;
  bgColor: string;
}

export const servicesData: Service[] = [
  {
    id: "ai-intelligence",
    title: "AI Intelligence",
    shortDescription: "Revolutionary AI systems that learn, adapt, and optimize your business operations.",
    fullDescription: "Transform your business with cutting-edge artificial intelligence solutions. Our AI Intelligence service provides machine learning algorithms, natural language processing, and predictive analytics to automate processes, enhance decision-making, and drive innovation across your organization.",
    icon: Brain,
    features: [
      "Machine Learning Implementation",
      "Natural Language Processing",
      "Predictive Analytics",
      "Computer Vision Solutions",
      "AI-Powered Automation",
      "Smart Decision Support Systems",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "Azure AI", "Google AI"],
    benefits: [
      "Increased operational efficiency by 40%",
      "Automated routine tasks",
      "Enhanced data-driven insights",
      "Improved customer experience",
      "Reduced operational costs",
    ],
    price: "From $5,000/month",
    duration: "3-6 months implementation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "cloud-mastery",
    title: "Cloud Mastery",
    shortDescription: "Next-generation cloud platforms that scale infinitely with bulletproof security.",
    fullDescription: "Leverage the power of cloud computing with our comprehensive cloud solutions. From migration strategy to ongoing management, we provide secure, scalable, and cost-effective cloud infrastructure that grows with your business needs.",
    icon: Cloud,
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
      "Cloud Security Implementation",
      "Multi-cloud Management",
      "Disaster Recovery Planning",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker"],
    benefits: [
      "99.9% uptime guarantee",
      "Reduced infrastructure costs by 30%",
      "Enhanced security and compliance",
      "Global accessibility",
      "Automatic backups and recovery",
    ],
    price: "From $3,000/month",
    duration: "2-4 months migration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "digital-innovation",
    title: "Digital Innovation",
    shortDescription: "Custom software solutions that transform ideas into powerful applications.",
    fullDescription: "Bring your vision to life with our custom software development services. We create innovative digital solutions, from web and mobile applications to enterprise software systems, designed to meet your specific business requirements and drive growth.",
    icon: Smartphone,
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "UI/UX Design",
      "Quality Assurance & Testing",
    ],
    technologies: ["React", "Node.js", "Python", "Flutter", "MongoDB", "PostgreSQL"],
    benefits: [
      "Streamlined business processes",
      "Enhanced user experience",
      "Competitive market advantage",
      "Scalable architecture",
      "Ongoing support and maintenance",
    ],
    price: "From $8,000/project",
    duration: "4-8 months development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "cyber-defense",
    title: "Cyber Defense",
    shortDescription: "Military-grade security systems that protect your digital assets.",
    fullDescription: "Protect your business from cyber threats with our comprehensive cybersecurity solutions. We provide advanced threat detection, security audits, compliance management, and 24/7 monitoring to ensure your digital assets remain secure.",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Threat Detection & Response",
      "Compliance Management",
      "Employee Security Training",
      "24/7 Security Monitoring",
      "Incident Response Planning",
    ],
    technologies: ["Firewall Systems", "SIEM Tools", "Penetration Testing", "Encryption", "VPN"],
    benefits: [
      "99.9% threat detection rate",
      "Regulatory compliance assurance",
      "Reduced security incidents",
      "Protected customer data",
      "Business continuity planning",
    ],
    price: "From $4,000/month",
    duration: "1-2 months setup",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    color: "text-[#0184fa]",
    bgColor: "bg-[#e6f0fd]",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        id="services"
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
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg text-[#e6f0fd]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Choose a service to explore our comprehensive solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Services Navigation List */}
            <motion.div
              className="space-y-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Services</h3>
                <p className="text-gray-600">Click on any service to explore details</p>
              </div>
              {servicesData.map((service, index) => (
  <motion.div
    key={service.id}
    className={`cursor-pointer rounded-xl p-4 shadow-md transition-all duration-300
      ${
        selectedService.id === service.id
          ? "bg-red-600 text-white shadow-lg"
          : "bg-[#0184fa] text-white hover:bg-red-600 hover:text-white hover:shadow-xl"
      }`}
    onClick={() => setSelectedService(service)}
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center space-x-3">
      <div className={`w-10 h-10 ${service.bgColor} rounded-lg flex items-center justify-center`}>
        <service.icon className={`h-5 w-5 ${service.color}`} />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{service.title}</h4>
        <div className="flex items-center space-x-2 text-sm text-[#e6f0fd]">
          <span>{service.price}</span>
          <span>{service.duration}</span>
        </div>
      </div>
    </div>
  </motion.div>
))}

            </motion.div>

            {/* Right Side - Service Image & Details */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
              key={selectedService.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Service Image with Animation */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={selectedService.image}
                  alt={selectedService.title}
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
                  <selectedService.icon className={`h-8 w-8 ${selectedService.color}`} />
                </motion.div>
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 text-gray-900 px-3 py-1 rounded-full font-semibold shadow-lg"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {selectedService.price}
                </motion.div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {selectedService.title}
                </motion.h2>
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {selectedService.fullDescription}
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link to={`/services/${selectedService.id}`}>
                    <button className="bg-[#0184fa] text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:bg-[#014fa] transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="px-6 py-3 border-2 border-[#0184fa] text-[#0184fa] rounded-xl font-semibold hover:bg-[#0184fa] hover:text-white transition-all duration-300">
                      Get Quote
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}