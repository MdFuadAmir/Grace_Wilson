import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";
import Logo from "../Utils/Logo";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className="w-full relative overflow-hidden transition-colors duration-300
      bg-[#f6f7f9] text-gray-800
      dark:bg-[#0f1418] dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Logo />

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Digital Marketing Specialist helping businesses grow with Facebook
              Ads, Google Ads, SEO and data-driven strategies.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li
                onClick={() => handleScroll("home")}
                className="cursor-pointer hover:text-teal-500 transition"
              >
                Home
              </li>
              <li
                onClick={() => handleScroll("about")}
                className="cursor-pointer hover:text-teal-500 transition"
              >
                About
              </li>
              <li
                onClick={() => handleScroll("services")}
                className="cursor-pointer hover:text-teal-500 transition"
              >
                Services
              </li>
              <li
                onClick={() => handleScroll("contact")}
                className="cursor-pointer hover:text-teal-500 transition"
              >
                Contact
              </li>
            </ul>
          </motion.div>

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <FaEnvelope className="text-teal-500" />
              mdfuadamir@email.com
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a className="p-2 rounded-full bg-white dark:bg-white/10 shadow hover:scale-110 transition">
                <FaFacebook className="text-blue-500" />
              </a>

              <a className="p-2 rounded-full bg-white dark:bg-white/10 shadow hover:scale-110 transition">
                <FaInstagram className="text-pink-500" />
              </a>

              <a className="p-2 rounded-full bg-white dark:bg-white/10 shadow hover:scale-110 transition">
                <FaLinkedin className="text-blue-600" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright © {new Date().getFullYear()} - Md Fuad Amir. All rights
            reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full
            bg-gray-200 dark:bg-white/10
            hover:scale-105 transition text-sm"
          >
            <FaArrowUp className="text-teal-500" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
