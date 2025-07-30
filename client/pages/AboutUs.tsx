import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Cloud, Shield } from "lucide-react";

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState("mission");

  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "At Radian-Tech, our mission is to empower businesses with cutting-edge technology solutions that drive innovation and growth. We are committed to delivering transformative AI, cloud, digital, and cybersecurity services that adapt to the evolving digital landscape.",
      icon: Brain,
      color: "text-[#0184fa]",
      bgColor: "bg-[#e6f0fd]",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "We envision a world where technology seamlessly integrates with business strategies, enabling organizations to thrive in a competitive global market. Radian-Tech aims to be the leader in pioneering digital transformation.",
      icon: Cloud,
      color: "text-[#0184fa]",
      bgColor: "bg-[#e6f0fd]",
    },
    {
      id: "values",
      title: "Our Values",
      content:
        "Integrity, innovation, and excellence are the pillars of Radian-Tech. We prioritize customer success, sustainability, and continuous learning to build lasting partnerships and deliver unparalleled value.",
      icon: Shield,
      color: "text-[#0184fa]",
      bgColor: "bg-[#e6f0fd]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f3f7fc] to-[#dceeff]">
      {/* Header */}
      <section className="relative py-24 bg-cover bg-center text-white">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600')",
          }}
          initial={{ scale: 1.1, y: 0 }}
          animate={{
            scale: [1.1, 1.15, 1.1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </motion.div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            About Radian-Tech
          </motion.h1>
          <motion.p
            className="text-lg text-[#e6f0fd]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering the future through innovation.
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Radian-Tech</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded in 2018, Radian-Tech has emerged as a global leader in technology
              solutions, dedicated to shaping the future of digital innovation. Based in
              Nairobi, Kenya, with a presence across East Africa and beyond, we specialize
              in artificial intelligence, cloud computing, custom software development,
              and cybersecurity. Our team of over 150 experts brings decades of combined
              experience, delivering tailored solutions to clients ranging from startups
              to Fortune 500 companies.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At the heart of our success is a passion for problem-solving and a
              commitment to excellence. Since our inception, we have completed over 200
              projects, helping businesses optimize operations, enhance security, and
              unlock new growth opportunities. As of July 29, 2025, we continue to
              innovate, with ongoing initiatives in AI-driven analytics and sustainable
              tech practices, reflecting our dedication to a smarter, greener future.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our client-centric approach ensures every solution is crafted with
              precision, aligning with your unique goals. Whether it’s scaling
              infrastructure or fortifying digital defenses, Radian-Tech is your trusted
              partner in navigating the complexities of the modern tech landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Sidebar Navigation */}
            <motion.div
              className="space-y-6"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className={`cursor-pointer rounded-xl p-5 shadow-md transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-[#0184fa] text-white hover:bg-red-600 hover:text-white hover:shadow-xl"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center`}
                    >
                      <section.icon
                        className={`h-6 w-6 transition-all duration-300 ${section.color}`}
                      />
                    </div>
                    <h4 className="text-lg font-semibold">{section.title}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Active Section Content */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
              key={activeSection}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {sections.find((s) => s.id === activeSection)?.content}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services">
                    <button className="bg-[#0184fa] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-[#0070d1] transition">
                      Explore Services
                    </button>
                  </Link>
                  <Link to="/ContactUs">
                    <button className="border border-[#0184fa] text-[#0184fa] px-6 py-3 rounded-lg font-medium hover:bg-[#0184fa] hover:text-white transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}