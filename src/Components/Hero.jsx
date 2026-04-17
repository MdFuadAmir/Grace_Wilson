// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import hero from "../../public/Images/hero1.png";
import { FaRocket } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-linear-to-r from-[#ecfeff]/80 via-[#fff7ed]/80 to-[#fdf4ff]/80 px-6 py-10 md:py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* RIGHT SIDE (IMAGE FIRST ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          {/* Glow BACKGROUND (lowest layer) */}
          <div className="absolute w-60 h-60 md:w-96 md:h-96 rounded-full bg-linear-to-r from-teal-300 via-emerald-200 to-orange-200 blur-3xl opacity-70 z-0"></div>

          {/* Floating card 1 (TOP layer) */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-5 left-0 md:top-10 bg-white/60 backdrop-blur p-3 md:p-4 rounded-xl shadow-md text-xs md:text-sm z-20 flex items-center gap-2"
          >
            <FaChartLine className="text-teal-500 text-sm" />
            Ad Performance Boost
          </motion.div>

          {/* Image (middle layer) */}
          <div className="z-10 relative">
            <img
              src={hero}
              alt="hero"
              className="rounded-2xl md:rounded-3xl w-65 sm:w-[320px] md:w-105 shadow-xl"
            />
          </div>

          {/* Floating card 2 (TOP layer) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-5 right-0 md:bottom-10 bg-white/60 backdrop-blur p-3 md:p-4 rounded-xl shadow-md text-xs md:text-sm z-20 flex items-center gap-2"
          >
            <FaRocket className="text-teal-500 text-sm animate-bounce" />
            Lead Generation
          </motion.div>
        </motion.div>

        {/* LEFT SIDE (TEXT BELOW ON MOBILE) */}
        <div className="order-2 md:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/50 backdrop-blur border border-white/40 text-sm text-teal-600 mb-4"
          >
            <FaRocket className="text-teal-500 text-sm animate-bounce" />
            Digital Marketing Expert
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-700 leading-snug md:leading-tight"
          >
            I Help Brands Grow With{" "}
            <span className="text-teal-500">Smart Marketing</span> &
            <span className="text-emerald-500"> High Converting Ads</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-gray-600"
          >
            I create result-driven digital marketing strategies including
            Facebook Ads, Google Ads, SEO, and social media growth strategies
            that increase ROI and brand visibility.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex items-center sm:flex-row gap-4 mt-8"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-linear-to-r from-teal-400 via-emerald-400 to-orange-300 text-white shadow-md hover:scale-105 transition text-center text-sm md:text-base"
            >
              Start Campaign
            </a>

            <a
              href="#cases"
              className="px-6 py-3 rounded-full bg-linear-to-r from-white/80 to-white/40 backdrop-blur border border-white/40 text-gray-700 shadow-md hover:shadow-lg hover:text-teal-600 transition text-center text-sm md:text-base"
            >
              Case Studies
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="flex flex-wrap gap-6 sm:gap-8 mt-10"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-teal-600">
                120+
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">Campaigns Done</p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-500">
                85%
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">Average ROI</p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400">
                50+
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
