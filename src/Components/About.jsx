// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import hero from "../assets/profile-1.png";
import { FaHandSparkles } from "react-icons/fa";
import { FaMeta, FaChartLine } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineSearch } from "react-icons/md";

const SkillBadge = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/60 backdrop-blur border border-white/40 text-gray-700 shadow-sm cursor-pointer transition duration-300 hover:scale-110 hover:bg-teal-100 hover:text-teal-700">
      <span className="text-lg">{icon}</span>
      {name}
    </div>
  );
};

const skills = [
  { name: "Facebook Ads", icon: <FaMeta className="text-blue-500" /> },
  { name: "Google Ads", icon: <SiGoogleads className="text-yellow-500" /> },
  { name: "SEO", icon: <MdOutlineSearch className="text-green-500" /> },
  { name: "Growth", icon: <FaChartLine className="text-teal-500" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-10 md:py-20 px-6 bg-linear-to-r from-[#ecfeff]/80 via-[#fff7ed]/80 to-[#fdf4ff]/80"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-linear-to-r from-teal-300 via-emerald-200 to-orange-200 blur-3xl opacity-60"></div>

            <img
              src={hero}
              alt="about"
              className="relative z-10 w-65 sm:w-[320px] md:w-105 rounded-3xl  transition duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/50 backdrop-blur border border-white/40 text-sm text-teal-600 mb-5">
            <FaHandSparkles className="text-teal-500 text-sm animate-pulse" />
            About Me
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
            I’m a{" "}
            <span className="text-teal-500">Digital Marketing Specialist</span>{" "}
            focused on growing brands with{" "}
            <span className="text-emerald-500">data-driven strategies</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            I help businesses grow through Facebook Ads, Google Ads, SEO, and
            social media marketing. My goal is to increase ROI, generate
            high-quality leads, and build strong online presence for brands in
            competitive markets.
          </p>

          {/* Skills */}
          <motion.div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} icon={skill.icon} name={skill.name} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
