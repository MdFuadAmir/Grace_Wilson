// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

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
            <FaQuoteLeft className="text-teal-500 text-sm" />
            Testimonials
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            What Clients Say About My{" "}
            <span className="text-teal-500">Work</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from clients who achieved growth using my marketing
            strategies.
          </p>
        </motion.div>

        {/* Cards Row */}
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="min-w-70 md:min-w-[320px] group p-6 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-teal-400 text-xl mb-4" />

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed">
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
                <h4 className="font-semibold text-gray-700 group-hover:text-teal-600 transition">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>

              {/* Hover line */}
              <div className="mt-4 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
