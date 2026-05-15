import { motion } from "framer-motion";

const Title = ({ badge, title, subtitle, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      {/* Badge */}
      {badge && (
        <div
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full
          bg-white/70 dark:bg-slate-800/80 backdrop-blur
          border border-white/40 dark:border-slate-700
          text-sm text-teal-600 dark:text-emerald-400 mb-4"
        >
          {icon && <span className="text-teal-500">{icon}</span>}
          {badge}
        </div>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Title;
