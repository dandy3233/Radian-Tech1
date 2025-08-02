import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Cloud, Shield, ChevronDown } from "lucide-react";

const sections = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "At Radian-Tech, our mission is to empower Ethiopian and global businesses with innovative ICT solutions that foster digital transformation and sustainable growth. We deliver cutting-edge AI, cloud, software development, and cybersecurity services tailored to the unique needs of our clients.",
    icon: Brain,
    color: "text-[#0084ff]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "We envision a future where technology drives economic prosperity and connectivity across Ethiopia and beyond. Radian-Tech aims to lead the ICT sector by pioneering solutions that bridge digital divides and empower organizations to excel in a global market.",
    icon: Cloud,
    color: "text-[#0084ff]",
    bgColor: "bg-[#e6f0fd]",
  },
  {
    id: "values",
    title: "Our Values",
    content:
      "Integrity, innovation, and community impact define Radian-Tech. We prioritize client success, sustainable practices, and continuous learning to build trusted partnerships and deliver transformative value in Ethiopia's ICT landscape.",
    icon: Shield,
    color: "text-[#0084ff]",
    bgColor: "bg-[#e6f0fd]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Accordion = ({ title, content, icon: Icon, color, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`bg-white rounded-2xl overflow-hidden ${isOpen ? 'shadow-2xl' : 'shadow-md'} transition-shadow duration-300`}
      whileHover={{ scale: 1.02 }}
      variants={itemVariants}
    >
      <button
        className="w-full p-3 sm:p-4 md:p-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-[#f0f7ff] hover:to-[#e6f0fd] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.div
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${isOpen ? 'bg-[#0084ff]' : bgColor}`}
            animate={{ scale: isOpen ? 1.15 : 1, rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${isOpen ? 'text-white' : color}`} />
          </motion.div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 font-montserrat">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-3 sm:p-4 md:p-5 pt-0 bg-gray-50"
          >
            <p className="text-gray-700 mb-3 sm:mb-4 font-opensans text-sm sm:text-base leading-relaxed">{content}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link to="/services">
                <button className="bg-gradient-to-r from-[#0084ff] to-[#005bb5] text-white px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg font-medium shadow-md hover:from-[#005bb5] hover:to-[#003d80] transition duration-200 font-opensans text-xs sm:text-sm md:text-base">
                  Explore Services
                </button>
              </Link>
              <Link to="/ContactUs">
                <button className="border-2 border-[#0084ff] text-[#0084ff] px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-lg font-medium hover:bg-[#0084ff] hover:text-white transition duration-200 font-opensans text-xs sm:text-sm md:text-base">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f3f7fc] to-[#e0f1ff]">
      {/* Header */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 text-white">
        <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm" />
</div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-4 sm:top-6 md:top-8 left-3 sm:left-4 md:left-6 lg:left-10"
          animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-white/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-3 sm:right-4 md:right-6 lg:right-10"
          animate={{ y: [0, 8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Cloud className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 text-white/30" />
        </motion.div>
        <motion.div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <Shield className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 text-white/20" />
        </motion.div>
        <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 font-montserrat tracking-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Radian-Tech
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-[#e6f0fd] font-opensans"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering ICT innovation in Ethiopia and beyond.
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-montserrat">About Radian-Tech</h2> */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-opensans"
              variants={itemVariants}
            >
              Founded in 2018 and headquartered in Addis Ababa, Ethiopia, Radian-Tech is a leading ICT company driving digital transformation across Africa and beyond. Specializing in artificial intelligence, cloud computing, custom software development, and cybersecurity, our team of over 150 experts has delivered more than 200 projects for clients ranging from local startups to global enterprises. As of August 2, 2025, we continue to innovate with AI-driven analytics and sustainable tech initiatives, reflecting our commitment to Ethiopia’s digital economy and a greener future. Our client-centric approach ensures tailored solutions that empower businesses to thrive in a competitive landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Body with Advanced Grid */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f3f7fc] to-white">
        <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-20" viewBox="0 0 200 200" preserveAspectRatio="none">
          <motion.path
            d="M10,90 Q90,10 190,90 T190,190"
            fill="none"
            stroke="#0084ff"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            fill="#0084ff"
            opacity="0.1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect
            x="140"
            y="140"
            width="15"
            height="15"
            fill="#0084ff"
            opacity="0.1"
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-12 font-montserrat">Who We Are</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sections.map((section) => (
              <Accordion
                key={section.id}
                title={section.title}
                content={section.content}
                icon={section.icon}
                color={section.color}
                bgColor={section.bgColor}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}