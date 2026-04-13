import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Utils/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (link) => {
    setActive(link.name);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-linear-to-r from-[#ecfeff]/80 via-[#fff7ed]/80 to-[#fdf4ff]/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => handleClick(link)}
              className={`relative text-sm lg:text-base transition duration-300 ${
                active === link.name
                  ? "text-teal-600"
                  : "text-gray-600 hover:text-teal-500"
              }`}
            >
              {link.name}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-teal-400 transition-all duration-300 ${
                  active === link.name ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* CTA Button (Marketing style) */}
        <div className="hidden md:block">
          <a
            href="mailto:mdfuadamir@gmail.com?subject=Marketing Inquiry&body=Hello Md Fuad, I need digital marketing services."
            className="px-6 py-2 rounded-full bg-linear-to-r from-teal-400 via-emerald-400 to-orange-300 text-white text-sm shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            Start Campaign
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-700 text-xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-5 bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => handleClick(link)}
                  className={`text-base transition ${
                    active === link.name
                      ? "text-teal-600"
                      : "text-gray-700 hover:text-teal-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
