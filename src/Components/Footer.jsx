// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";
import Logo from "../Utils/logo";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-linear-to-r from-[#ecfeff]/80 via-[#f0f9ff]/80 to-[#fdf4ff]/80 relative overflow-hidden">
      {/* glow background */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-100 h-100 bg-teal-200/30 blur-3xl rounded-full"></div>

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

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
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
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-teal-500 cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-teal-500 cursor-pointer transition">
                About
              </li>
              <li className="hover:text-teal-500 cursor-pointer transition">
                Services
              </li>
              <li className="hover:text-teal-500 cursor-pointer transition">
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
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Get In Touch
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <FaEnvelope className="text-teal-500" />
              mdfuadamir@email.com
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a className="p-2 rounded-full bg-white/40 backdrop-blur shadow hover:scale-110 transition">
                <FaFacebook className="text-blue-500" />
              </a>

              <a className="p-2 rounded-full bg-white/40 backdrop-blur shadow hover:scale-110 transition">
                <FaInstagram className="text-pink-500" />
              </a>

              <a className="p-2 rounded-full bg-white/40 backdrop-blur shadow hover:scale-110 transition">
                <FaLinkedin className="text-blue-600" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2026 Md Fuad Amir. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur shadow hover:scale-105 transition text-sm text-gray-700"
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
