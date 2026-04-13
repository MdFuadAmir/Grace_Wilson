// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaChartLine } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
const steps = [
  {
    title: "Research",
    desc: "Understand business, audience & competitors to build strong strategy.",
    icon: <MdOutlineSearch className="text-teal-500 text-2xl" />,
  },
  {
    title: "Strategy",
    desc: "Create high-converting ad & marketing plan based on data.",
    icon: <FaBullseye className="text-blue-500 text-2xl" />,
  },
  {
    title: "Execution",
    desc: "Launch optimized campaigns across platforms for best results.",
    icon: <FaRocket className="text-orange-500 text-2xl" />,
  },
  {
    title: "Growth",
    desc: "Analyze performance & scale winning campaigns for maximum ROI.",
    icon: <FaChartLine className="text-green-500 text-2xl" />,
  },
];

const Process = () => {
  return (
    <section className="w-full py-10 md:py-20 px-6 bg-linear-to-r from-[#ecfeff]/80 via-[#fff7ed]/80 to-[#fdf4ff]/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/50 backdrop-blur border border-white/40 text-sm text-teal-600 mb-4">
            <FaGear className="text-teal-500 text-sm animate-spin [animation-duration:5s]" />
            My Process
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            How I Turn Ideas Into <span className="text-teal-500">Results</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A simple but powerful workflow to ensure every campaign delivers
            maximum performance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm hover:shadow-xl transition duration-300 text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-500 text-white text-sm flex items-center justify-center shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-white shadow-sm mb-4 group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-700 group-hover:text-teal-600 transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom line */}
              <div className="mt-4 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
