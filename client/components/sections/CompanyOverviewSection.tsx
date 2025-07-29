import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Tilt from "react-parallax-tilt";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Trophy Icon with rotation, scale, and bounce animation on hover
const AwardIcon = ({ isHovered }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill={isHovered ? "#dc2626" : "#ef4444"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="none"
    className="w-10 h-10"
    initial={{ rotate: 0, scale: 1 }}
    animate={{ 
      rotate: isHovered ? [0, 360, 0] : 0, 
      scale: isHovered ? [1, 1.3, 1] : 1,
      y: isHovered ? [0, -5, 0] : 0 
    }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
  >
    <path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7l3-7z" />
  </motion.svg>
);

// Happy Face Icon with scale and bounce animation on hover
const HappyIcon = ({ isHovered }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={isHovered ? "#dc2626" : "#ef4444"}
    strokeWidth={2}
    viewBox="0 0 24 24"
    className="w-10 h-10"
    initial={{ scale: 1 }}
    animate={{ 
      scale: isHovered ? [1, 1.4, 1] : 1,
      y: isHovered ? [0, -5, 0] : 0 
    }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </motion.svg>
);

// Reusable Card wrapper with hover scale, glow, and ripple effect
const Card = ({ children }) => (
  <motion.div
    className="group bg-white p-6 rounded-2xl shadow-lg text-center transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer relative overflow-hidden"
    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
  >
    <motion.div
      className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-90"
      whileHover={{
        background: [
          "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.9) 0%, transparent 70%)",
          "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.9) 10%, transparent 80%)",
          "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.9) 0%, transparent 70%)",
        ],
      }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
    />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const CompanyOverviewSection = () => {
  // Chart data & options with animated bars
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Business Goal %",
        data: [80, 60, 70, 50, 90],
        backgroundColor: "rgba(239, 68, 68, 0.8)",
        borderColor: "rgba(239, 68, 68, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20 },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart" as const,
      delay: (context) => context.dataIndex * 200, // Sequential bar rise
    },
  };

  // Hover states for icons
  const [hoverAward, setHoverAward] = useState(false);
  const [hoverHappy, setHoverHappy] = useState(false);

  // Parallax effect for title
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useSpring(0, { stiffness: 100, damping: 20 });
  const y = useSpring(0, { stiffness: 100, damping: 20 });
  const parallaxX = useTransform(x, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = (e.clientX - centerX) / rect.width;
        const mouseY = (e.clientY - centerY) / rect.height;
        setMousePosition({ x: mouseX, y: mouseY });
        x.set(mouseX);
        y.set(mouseY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  // Blob shape paths for morphing animation
  const blobPaths = [
    "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z",
    "M15.3 130.5C45.2 60.7 120.1 40.2 190.4 20.8C250.7 0.5 320.9 -15.2 380.2 10.6C440.5 40.8 480.3 100.4 490.7 170.2C500.1 235.6 470.2 295.8 430.5 350.3C390.8 410.7 340.1 470.2 260.3 475.6C180.5 480.9 110.7 430.2 60.4 370.8C10.1 310.4 -25.6 230.7 15.3 130.5Z",
    "M5.7 140.2C30.8 70.4 110.5 50.1 180.9 25.7C240.2 5.4 310.4 -10.8 370.1 15.2C430.4 45.4 470.2 105.6 480.6 175.4C490.0 240.8 460.1 300.2 420.4 354.7C380.7 415.1 330.0 474.6 250.2 480.0C170.4 485.3 100.6 435.6 50.3 375.2C0.0 314.8 -35.7 235.1 5.7 140.2Z",
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden" ref={containerRef}>
      {/* Background Decorations */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgba(239, 68, 68, 0.1)\' stroke-width=\'1\'%3E%3Cpath d=\'M0 16 L16 0 L32 16 L16 32 Z\'/%3E%3C/svg%3E')] opacity-50"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: SVG Masked Image with Blob Morphing */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.svg
              width={500}
              height={500}
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <defs>
                <mask id="blob-mask">
                  <motion.path
                    d={blobPaths[0]}
                    animate={{ d: blobPaths }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                    fill="white"
                  />
                </mask>
              </defs>
              <g mask="url(#blob-mask)">
                <image
                  href="/images/image.png"
                  width="500"
                  height="500"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </motion.svg>
          </motion.div>

          {/* Right: Text & Chart */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-2xl">📄</span>
              </motion.div>
              <span className="text-red-500 text-base font-semibold uppercase tracking-wide">
                Company Overview
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
              style={{ x: parallaxX, y: parallaxY }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.4 }}
            >
              Shape Your Future with Radian-Tech's Expertise
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.5 }}
            >
              Transform your vision into success with cutting-edge solutions! At Radian-Tech, our expert team delivers innovative, tailored strategies to drive enterprise growth. Embrace the future, optimize your operations, and achieve unparalleled results. Start your journey today!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Chart Card */}
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                <motion.div
                  className="group bg-white p-6 rounded-2xl shadow-lg transition duration-300 hover:bg-red-500 hover:text-white relative overflow-hidden"
                  whileHover={{ scale: 1.02, rotate: 2, boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-90"
                    whileHover={{
                      background: [
                        "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.9) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.9) 10%, transparent 80%)",
                        "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.9) 0%, transparent 70%)",
                      ],
                    }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                      98%
                    </h3>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                      Business Goal
                    </h3>
                    <Bar data={chartData} options={chartOptions} className="bg-white" />
                  </div>
                </motion.div>
              </Tilt>

              {/* Award Card */}
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                <Card>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.7 }}
                  >
                    <div
                      className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center transition duration-300 group-hover:bg-white"
                      onMouseEnter={() => setHoverAward(true)}
                      onMouseLeave={() => setHoverAward(false)}
                    >
                      <AwardIcon isHovered={hoverAward} />
                    </div>
                    <CountUp
                        start={0}
                        end={5}
                        duration={2}
                        suffix="+"
                        className="text-xl font-semibold transition-colors duration-300 group-hover:text-white"
                      />
                    <div className="flex justify-center items-baseline gap-2">
                      
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                        Best Award
                      </h3>
                    </div>
                  </motion.div>
                </Card>
              </Tilt>

              {/* Clients Card */}
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                <Card>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.8 }}
                  >
                    <div
                      className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center transition duration-300 group-hover:bg-white"
                      onMouseEnter={() => setHoverHappy(true)}
                      onMouseLeave={() => setHoverHappy(false)}
                    >
                      <HappyIcon isHovered={hoverHappy} />
                    </div>
                    <CountUp
                        start={0}
                        end={1000}
                        duration={3}
                        separator=","
                        className="text-xl font-semibold transition-colors duration-300 group-hover:text-white"
                      />
                    <div className="flex justify-center items-baseline gap-2">
                      
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                        Happy Clients
                      </h3>
                    </div>
                  </motion.div>
                </Card>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
