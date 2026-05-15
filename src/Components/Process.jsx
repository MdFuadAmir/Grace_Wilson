import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaChartLine, FaGear } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import Title from "../Utils/Title";

const steps = [
  {
    title: "Research",
    desc: "Understand business, audience & competitors to build strong strategy.",
    icon: <MdOutlineSearch className="text-teal-500 text-2xl" />,
  },
  {
    title: "Strategy",
    desc: "Create high-converting ad & marketing plan based on real campaign data.",
    icon: <FaBullseye className="text-blue-500 text-2xl" />,
  },
  {
    title: "Execution",
    desc: "Launch optimized campaigns across multiple platforms for maximum reach.",
    icon: <FaRocket className="text-orange-500 text-2xl" />,
  },
  {
    title: "Growth",
    desc: "Analyze, optimize and scale winning campaigns for better ROI.",
    icon: <FaChartLine className="text-green-500 text-2xl" />,
  },
];

const Process = () => {
  return (
    <section
      className="w-full py-24 md:py-28 px-6
      bg-[#ecfeff] dark:bg-[#0f1720]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Reusable Title */}
        <Title
          badge="My Process"
          icon={<FaGear className="animate-spin [animation-duration:5s]" />}
          title={
            <>
              How I Turn Ideas Into{" "}
              <span className="text-teal-500">Results</span>
            </>
          }
          subtitle="A simple but powerful workflow to ensure every campaign delivers maximum performance."
        />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl
              bg-white/70 dark:bg-slate-800/80
              backdrop-blur
              border border-white/40 dark:border-slate-700
              shadow-sm hover:shadow-xl
              duration-300 text-center relative"
            >
              {/* Step Number */}
              <div
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full
                bg-teal-500 dark:bg-emerald-500
                text-white text-sm flex items-center justify-center shadow-md"
              >
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto flex items-center justify-center
                rounded-xl bg-white dark:bg-slate-700
                shadow-sm mb-4 group-hover:scale-110 duration-300"
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold
                text-gray-800 dark:text-white
                group-hover:text-teal-600 dark:group-hover:text-emerald-400"
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom line */}
              <div
                className="mt-4 w-0 h-0.5
                bg-teal-400 dark:bg-emerald-400
                duration-300 group-hover:w-full mx-auto"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
