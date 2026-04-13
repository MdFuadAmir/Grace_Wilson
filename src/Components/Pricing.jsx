// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheck, FaRocket, FaCrown, FaBolt } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const plans = [
  {
    name: "Starter",
    price: "$49",
    icon: <FaBolt className="text-yellow-500 text-2xl" />,
    features: [
      "Facebook Ads Setup",
      "1 Campaign Management",
      "Basic Targeting",
      "Weekly Report",
    ],
  },
  {
    name: "Standard",
    price: "$99",
    icon: <FaRocket className="text-teal-500 text-2xl" />,
    features: [
      "Facebook + Google Ads",
      "3 Campaigns",
      "A/B Testing",
      "Conversion Tracking",
    ],
  },
  {
    name: "Premium",
    price: "$199",
    icon: <FaCrown className="text-purple-500 text-2xl" />,
    features: [
      "Full Funnel Marketing",
      "Unlimited Campaigns",
      "SEO + Ads Strategy",
      "Daily Optimization",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
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
            <FaMoneyBillTrendUp className="text-teal-500" />
            Pricing Plans
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            Choose The Right{" "}
            <span className="text-teal-500">Plan For Growth</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options for startups, businesses and scaling
            brands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm hover:shadow-2xl transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                {plan.icon}
                <span className="text-2xl font-bold text-gray-700">
                  {plan.price}
                </span>
              </div>

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-gray-700 group-hover:text-teal-600 transition">
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <FaCheck className="text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className="mt-6 w-full py-2 rounded-xl bg-linear-to-r from-teal-400 via-emerald-400 to-orange-300 text-white shadow-md hover:scale-105 transition flex items-center justify-center"
              >
                Get Started
              </a>

              {/* hover line */}
              <div className="mt-4 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
