import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router";
import Title from "../Utils/Title";
import {caseStudies} from "../assets/CaseData"

const CaseStudies = () => {
  const navigate = useNavigate();
  return (
    <section
      id="cases"
      className="w-full py-24 md:py-28 px-6 bg-[#ecfeff] dark:bg-[#0f1720] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <Title
          badge="Case Studies"
          icon={<FaChartLine />}
          title={
            <>
              Real Results From{" "}
              <span className="text-teal-500">Digital Campaigns</span>
            </>
          }
          subtitle="Proven marketing strategies that delivered real business growth, increased ROI, and high-quality leads."
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/case/${item.id}`)}
              className="group p-6 rounded-2xl
              bg-white/70 dark:bg-slate-800/80
              backdrop-blur
              border-l-4 border-teal-400 dark:border-emerald-400
              shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.image}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm"
                />

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition">
                  {item.title}
                </h3>
              </div>

              {/* Result */}
              <p className="text-xl font-bold text-teal-600 dark:text-emerald-400">
                {item.result}
              </p>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Hover line */}
              <div className="mt-4 w-0 h-0.5 bg-teal-400 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
