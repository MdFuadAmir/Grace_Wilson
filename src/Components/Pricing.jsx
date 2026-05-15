import { motion } from "framer-motion";
import {
  FaCheck,
  FaRocket,
  FaCrown,
  FaBolt,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import Title from "../Utils/Title";

const plans = [
  {
    name: "Starter",
    price: "$49",
    icon: <FaBolt className="text-yellow-500 text-2xl" />,
    features: [
      "Facebook Ads Setup",
      "1 Campaign Management",
      "Basic Audience Targeting",
      "Ad Copy Creation",
      "Weekly Performance Report",
      "Basic Optimization",
      "Email Support",
      "1 Revision Included",
    ],
  },
  {
    name: "Standard",
    price: "$99",
    icon: <FaRocket className="text-teal-500 text-2xl" />,
    features: [
      "Facebook + Google Ads",
      "3 Campaign Management",
      "Advanced Audience Research",
      "A/B Testing",
      "Conversion Tracking",
      "Landing Page Suggestions",
      "Bi-weekly Optimization",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    price: "$199",
    icon: <FaCrown className="text-purple-500 text-2xl" />,
    features: [
      "Full Funnel Marketing",
      "Unlimited Campaigns",
      "SEO + Paid Ads Strategy",
      "Daily Optimization",
      "Advanced Analytics Dashboard",
      "Custom Growth Strategy",
      "Retargeting Campaigns",
      "24/7 Premium Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full py-24 md:py-28 px-6
      bg-[#ecfeff] dark:bg-[#0f1720]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Reusable Title */}
        <Title
          badge="Pricing Plans"
          icon={<FaMoneyBillTrendUp />}
          title={
            <>
              Choose The Right{" "}
              <span className="text-teal-500">Plan For Growth</span>
            </>
          }
          subtitle="Flexible pricing solutions for startups, businesses, and scaling brands."
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
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
              shadow-sm hover:shadow-2xl transition duration-300"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                {plan.icon}
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {plan.price}
                </span>
              </div>

              {/* Plan Name */}
              <h3
                className="text-xl font-semibold
              text-gray-800 dark:text-white
              group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition"
              >
                {plan.name}
              </h3>

              {/* Features */}
              <ul className="mt-5 space-y-3">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm
                    text-gray-600 dark:text-gray-300"
                  >
                    <FaCheck className="text-teal-500 dark:text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => {
                  const textarea = document.querySelector(
                    'textarea[name="message"]',
                  );

                  if (textarea) {
                    const message = `
I want to choose the ${plan.name} plan.

Price: ${plan.price}

Included Features:
${plan.features.map((f) => `- ${f}`).join("\n")}

Please let me know how we can proceed.
      `.trim();
                    textarea.value = message;
                    textarea.dispatchEvent(
                      new Event("input", { bubbles: true }),
                    );
                  }
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 w-full py-3 rounded-xl
                bg-teal-500 hover:bg-teal-600
                dark:bg-emerald-500 dark:hover:bg-emerald-600
                text-white shadow-md hover:scale-105
                transition flex items-center justify-center"
              >
                Choose Plan
              </button>

              {/* Hover line */}
              <div
                className="mt-4 w-0 h-0.5
              bg-teal-400 dark:bg-emerald-400
              transition-all duration-300 group-hover:w-full"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
