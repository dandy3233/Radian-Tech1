import React from "react";
import { motion } from "framer-motion";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Trophy Icon with rotation & scale animation on hover
const AwardIcon = ({ isHovered }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill={isHovered ? "#dc2626" : "#ef4444"} // Tailwind red-600 or red-500
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="none"
    className="w-10 h-10"
    initial={{ rotate: 0, scale: 1 }}
    animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.2 : 1 }}
    transition={{ duration: 0.8 }}
  >
    <path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7l3-7z" />
  </motion.svg>
);

// Happy Face Icon with scale animation on hover
const HappyIcon = ({ isHovered }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={isHovered ? "#dc2626" : "#ef4444"}
    strokeWidth={2}
    viewBox="0 0 24 24"
    className="w-10 h-10"
    initial={{ scale: 1 }}
    animate={{ scale: isHovered ? 1.3 : 1 }}
    transition={{ duration: 0.8 }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </motion.svg>
);

// Reusable Card wrapper with hover scale + color
const Card = ({ children }) => (
  <motion.div
    className="group bg-white p-6 rounded-2xl shadow-lg text-center transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer"
    whileHover={{ scale: 1.02 }}
  >
    {children}
  </motion.div>
);

const CompanyOverviewSection = () => {
  // Chart data & options
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Business Goal %",
        data: [80, 60, 70, 50, 90],
        backgroundColor: "rgba(239, 68, 68, 0.8)", // Tailwind red-500 with opacity
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
  };

  // Hover states for icons
  const [hoverAward, setHoverAward] = React.useState(false);
  const [hoverHappy, setHoverHappy] = React.useState(false);

  return (
    <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgba(239, 68, 68, 0.1)\' stroke-width=\'1\'%3E%3Cpath d=\'M0 16 L16 0 L32 16 L16 32 Z\'/%3E%3C/svg%3E')] opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: SVG Masked Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            >
              <defs>
                <mask id="blob-mask">
                  <path
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
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
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white text-2xl">📄</span>
              </motion.div>
              <span className="text-red-500 text-base font-semibold uppercase tracking-wide">
                Company Overview
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Plan your business strategy with Our Experts
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Transform your vision into success with expert guidance! At Afroel,
              our seasoned professionals help you craft winning business
              strategies tailored to your goals. Plan smarter, grow faster, and
              achieve more. Start today!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Chart Card */}
              <motion.div
                className="group bg-white p-6 rounded-2xl shadow-lg transition duration-300 hover:bg-red-500 hover:text-white"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  98% 
                </h3>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  Business Goal
                </h3>
                <Bar data={chartData} options={chartOptions} className="bg-white   hover:text-white"/>
              </motion.div>

              {/* Award Card */}
              <Card>
                <div
                  className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center transition duration-300 group-hover:bg-white"
                  onMouseEnter={() => setHoverAward(true)}
                  onMouseLeave={() => setHoverAward(false)}
                >
                  <AwardIcon isHovered={hoverAward} />
                  
                  
            
                </div>
                <CountUp start={0} end={5} duration={2} suffix="+" className="text-xl font-semibold transition-colors duration-300 group-hover:text-white flex justify-center items-baseline gap-2"/>
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white flex justify-center items-baseline gap-2">
                  
                  Best Award
                </h3>
              </Card>

              {/* Clients Card */}
              <Card>
                <div
                  className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center transition duration-300 group-hover:bg-white"
                  onMouseEnter={() => setHoverHappy(true)}
                  onMouseLeave={() => setHoverHappy(false)}
                >
                  <HappyIcon isHovered={hoverHappy} />
                </div>
                <CountUp start={0} end={1000} duration={3} separator="," className="text-xl font-semibold transition-colors duration-300 group-hover:text-white flex justify-center items-baseline gap-2" /> 
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white flex justify-center items-baseline gap-2">
                  
                  Happy Clients
                </h3>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
