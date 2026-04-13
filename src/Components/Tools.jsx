// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGoogle,
  FaChartLine,
  FaBolt,
  FaRegChartBar,
  FaGear,
} from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
const tools = [
  {
    name: "Meta Ads",
    icon: <FaFacebook className="text-blue-500 text-2xl" />,
  },
  {
    name: "Google Ads",
    icon: <FaGoogle className="text-red-500 text-2xl" />,
  },
  {
    name: "SEO Tools",
    icon: <MdOutlineSearch className="text-green-500 text-2xl" />,
  },
  {
    name: "Analytics",
    icon: <FaRegChartBar className="text-purple-500 text-2xl" />,
  },
  {
    name: "Growth Tools",
    icon: <FaChartLine className="text-teal-500 text-2xl" />,
  },
  {
    name: "Automation",
    icon: <FaBolt className="text-yellow-500 text-2xl" />,
  },
];

const Tools = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 bg-linear-to-r from-[#ecfeff]/80 via-[#fff7ed]/80 to-[#fdf4ff]/80">
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
            Marketing Tools
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            Tools I Use For{" "}
            <span className="text-teal-500">High Performance</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Modern digital marketing tools that help me optimize campaigns,
            track results and scale growth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-3 group-hover:scale-110 transition duration-300">
                {tool.icon}
              </div>

              {/* Name */}
              <p className="text-sm text-gray-600 group-hover:text-teal-600 transition">
                {tool.name}
              </p>

              {/* bottom line */}
              <div className="mt-2 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
