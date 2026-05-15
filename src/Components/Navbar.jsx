import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import Logo from "../Utils/Logo";
import DarkMood from "../Utils/Darkmood";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "cases", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const handleNav = (id) => {
    setActive(id);
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 200);
    } else {
      scrollToSection(id);
    }
  };

  const goHome = () => {
    navigate("/");
    setOpen(false);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl shadow-sm bg-[#ecfeff] dark:bg-[#0f1720] border-b border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div onClick={goHome} className="cursor-pointer">
          <Logo />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="cursor-pointer relative"
            >
              <span
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  active === link.id
                    ? "text-teal-600 dark:text-emerald-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-emerald-300"
                }`}
              >
                {link.label}
              </span>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <DarkMood />
          <a
            href="#contact"
            onClick={() => {
              const textarea = document.querySelector(
                'textarea[name="message"]',
              );
              if (textarea) {
                textarea.value =
                  "I would like to start a project with Md Fuad Amir!";
                textarea.dispatchEvent(new Event("input", { bubbles: true }));
              }
            }}
            className="hidden lg:block px-6 py-2 rounded-full text-sm font-medium bg-teal-500 hover:bg-teal-600 text-white shadow-md transition"
          >
            Let’s Talk
          </a>

          <button
            className="lg:hidden text-teal-600 dark:text-emerald-400 text-2xl"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-55  lg:hidden"
            />

            {/* SIDEBAR (FIXED DESIGN) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="
                fixed top-0 right-0 h-fit w-[70%] max-w-80
                shadow-2xl
                  bg-[#ecfeff] dark:bg-[#0f1720] z-58 lg:hidden flex flex-col p-6 overflow-y-auto rounded-bl-[20px]
              "
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10 dark:border-white/10">
                <Logo />

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-teal-600 dark:text-emerald-400"
                >
                  <FaTimes />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <div
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className="text-lg font-medium cursor-pointer text-gray-700 dark:text-gray-200 hover:text-teal-500 transition"
                  >
                    {link.label}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-black/10 dark:border-white/10">
                <a
                  href="#contact"
                  onClick={() => {
                    setOpen(false);

                    const textarea = document.querySelector(
                      'textarea[name="message"]',
                    );

                    if (textarea) {
                      textarea.value =
                        "I would like to start a project with Md Fuad Amir!";

                      textarea.dispatchEvent(
                        new Event("input", { bubbles: true }),
                      );
                    }
                  }}
                  className="block text-center w-full px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium shadow-md"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
