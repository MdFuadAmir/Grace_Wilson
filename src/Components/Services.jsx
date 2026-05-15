import { motion } from "framer-motion";
import { FaMeta, FaChartLine } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineSearch } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import Title from "../Utils/Title";

const services = [
  {
    title: "Facebook Ads",
    desc: "High-converting Facebook & Instagram ad campaigns focused on ROI and lead generation.",
    icon: <FaMeta className="text-blue-500 text-2xl" />,
  },
  {
    title: "Google Ads",
    desc: "Targeted Google Ads campaigns to drive quality traffic, leads, and sales.",
    icon: <SiGoogleads className="text-yellow-500 text-2xl" />,
  },
  {
    title: "SEO Optimization",
    desc: "Improve your website ranking and organic traffic with advanced SEO strategies.",
    icon: <MdOutlineSearch className="text-green-500 text-2xl" />,
  },
  {
    title: "Analytics & Tracking",
    desc: "Track performance and optimize campaigns using data-driven insights.",
    icon: <FaChartPie className="text-purple-500 text-2xl" />,
  },
  {
    title: "Growth Strategy",
    desc: "Complete marketing funnel strategy to scale your business effectively.",
    icon: <FaChartLine className="text-teal-500 text-2xl" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-24 md:py-28 px-6
      bg-[#ecfeff] dark:bg-[#0f1720]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Title
          badge="My Services"
          icon={<FaRocket className="animate-bounce" />}
          title={
            <>
              Digital Marketing Services That{" "}
              <span className="text-teal-500">Drive Results</span>
            </>
          }
          subtitle="I provide complete digital marketing solutions to help businesses grow, generate leads, and maximize ROI with proven strategies."
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl
              bg-white/70 dark:bg-slate-800/80
              backdrop-blur
              border border-white/40 dark:border-slate-700
              shadow-sm hover:shadow-xl
              transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-white dark:bg-slate-700 shadow-sm mb-4
              group-hover:scale-110 transition"
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold
              text-gray-800 dark:text-white
              group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2 text-sm
              text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {service.desc}
              </p>

              {/* Hover line */}
              <div
                className="mt-4 w-0 h-0.5 bg-teal-400 dark:bg-emerald-400
              transition-all duration-300 group-hover:w-full"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
