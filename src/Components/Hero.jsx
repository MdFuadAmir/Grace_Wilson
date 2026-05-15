import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex items-center justify-center 
      bg-[#ecfeff] dark:bg-[#0f1720]
      px-6 py-24 md:py-28"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          {/* Glow */}
          <div className="absolute max:w-60 max:h-60 max:md:w-96 max:md:h-96 rounded-full bg-teal-200 dark:bg-teal-500/20 blur-3xl opacity-60 z-0"></div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-5 left-0 md:top-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 md:p-4 rounded-xl shadow-md text-xs md:text-sm z-20 flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            <FaChartLine className="text-teal-500 text-sm" />
            Ad Performance Boost
          </motion.div>

          {/* Hero Image */}
          <div className="z-10 relative">
            <img
              src={
                "https://res.cloudinary.com/dhogcaoxt/image/upload/v1778784162/hero1_flj451.jpg"
              }
              alt="hero"
              className="rounded-2xl md:rounded-3xl w-65 sm:w-[320px] md:w-105 shadow-xl"
            />
          </div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-5 right-0 md:bottom-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur p-3 md:p-4 rounded-xl shadow-md text-xs md:text-sm z-20 flex items-center gap-2 text-gray-700 dark:text-gray-200"
          >
            <FaRocket className="text-teal-500 text-sm animate-bounce" />
            Lead Generation
          </motion.div>
        </motion.div>

        {/* LEFT SIDE */}
        <div className="order-2 md:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 text-sm text-teal-600 dark:text-emerald-400 mb-4"
          >
            <FaRocket className="text-teal-500 text-sm animate-bounce" />
            Digital Marketing Expert
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-snug md:leading-tight"
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
            className="mt-5 text-base md:text-lg text-gray-600 dark:text-gray-300"
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
              onClick={() => {
                const textarea = document.querySelector(
                  'textarea[name="message"]',
                );
                if (textarea) {
                  textarea.value =
                    "I’m interested in working with you on a digital marketing project. I’d like to discuss strategy, campaign goals, and how we can grow my business through effective marketing solutions.";
                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }}
              className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:scale-105 transition"
            >
              Start Campaign
            </a>

            <a
              href="#cases"
              className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-white shadow-md hover:text-teal-600 transition"
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
              <h3 className="text-xl sm:text-2xl font-bold text-teal-500">
                120+
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Campaigns Done
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-500">
                85%
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Average ROI
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400">
                50+
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Happy Clients
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
