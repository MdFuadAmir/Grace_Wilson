// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { FaChartLine, FaUsers } from "react-icons/fa";

const cases = [
  {
    title: "E-commerce Growth",
    result: "+320% Sales Increase",
    desc: "Facebook Ads campaign optimized for conversion & retargeting strategy.",
    icon: <FaArrowTrendUp className="text-green-500 text-2xl" />,
  },
  {
    title: "Lead Generation",
    result: "2,500+ Qualified Leads",
    desc: "Google Ads funnel built for high-quality B2B lead acquisition.",
    icon: <MdCampaign className="text-blue-500 text-2xl" />,
  },
  {
    title: "Brand Awareness",
    result: "+180% Reach Growth",
    desc: "Social media campaign targeting audience expansion & engagement.",
    icon: <FaUsers className="text-purple-500 text-2xl" />,
  },
];

const CaseStudies = () => {
  return (
    <section
      id="cases"
      className="w-full py-16 md:py-24 px-6 bg-linear-to-r from-[#ecfeff]/80 via-[#fff7ed]/80 to-[#fdf4ff]/80"
    >
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
            <FaChartLine className="text-teal-500 text-sm" />
            Case Studies
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            Real Results From{" "}
            <span className="text-teal-500">Digital Campaigns</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Proven marketing strategies that delivered real business growth,
            increased ROI, and high-quality leads.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur border-l-4 border-teal-400 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-teal-600 transition">
                  {item.title}
                </h3>
              </div>

              {/* BIG RESULT (IMPORTANT DIFFERENCE) */}
              <p className="text-xl font-bold text-teal-600">{item.result}</p>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* bottom line */}
              <div className="mt-4 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
