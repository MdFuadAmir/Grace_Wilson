import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import Title from "../Utils/Title";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Owner",
    review:
      "Amazing results! My sales increased significantly after running Facebook Ads campaigns.",
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    review:
      "Professional work and clear strategy. Google Ads campaigns brought high-quality leads.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    review:
      "SEO and branding strategy helped us grow organic traffic and improve visibility.",
  },
  {
    name: "David Wilson",
    role: "Business Owner",
    review:
      "Great communication and outstanding marketing strategy. Highly recommended!",
  },
  {
    name: "Anna Smith",
    role: "Brand Manager",
    review:
      "Very professional work. My brand growth improved within a short time.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="w-full py-24 md:py-28 px-6
      bg-[#ecfeff] dark:bg-[#0f1720]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Reusable Title */}
        <Title
          badge="Testimonials"
          icon={<FaQuoteLeft />}
          title={
            <>
              What Clients Say About My{" "}
              <span className="text-teal-500">Work</span>
            </>
          }
          subtitle="Real feedback from clients who achieved measurable business growth using proven digital marketing strategies."
        />

        {/* Cards */}
        <div
          className="
    flex items-stretch gap-6
    overflow-x-auto overflow-y-hidden
    pb-4
    snap-x snap-mandatory
    scrollbar-hide
  "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="min-w-70 md:min-w-[320px]
              group p-6 rounded-2xl
              bg-white/70 dark:bg-slate-800/80
              backdrop-blur
              border border-white/40 dark:border-slate-700
              shadow-sm hover:shadow-xl
              transition-all duration-300"
            >
              {/* Quote */}
              <FaQuoteLeft className="text-teal-400 dark:text-emerald-400 text-xl mb-4" />

              {/* Review */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* User */}
              <div className="mt-5">
                <h4
                  className="font-semibold
                  text-gray-800 dark:text-white
                  group-hover:text-teal-600 dark:group-hover:text-emerald-400"
                >
                  {item.name}
                </h4>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.role}
                </p>
              </div>

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

export default Testimonials;
