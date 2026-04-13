// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          formRef.current.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        },
      );
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-6 bg-linear-to-r from-[#ecfeff]/70 via-[#f0f9ff]/70 to-[#fdf4ff]/70 relative overflow-hidden">
      {/* soft background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/30 backdrop-blur shadow-sm text-sm text-teal-600 mb-4">
            <FaPaperPlane className="text-teal-500" />
            Contact Me
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight">
            Let’s Grow Your{" "}
            <span className="text-teal-500">Business Together</span>
          </h2>

          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Send me a message and I will help you build a powerful marketing
            strategy that brings real results.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-6 md:p-10 rounded-3xl bg-white/20 backdrop-blur-xl shadow-xl border border-white/30"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-white/40 backdrop-blur text-gray-700 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-white/40 backdrop-blur text-gray-700 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 transition"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full mt-4 p-4 rounded-xl bg-white/40 backdrop-blur text-gray-700 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 transition"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            className="w-full mt-4 p-4 rounded-xl bg-white/40 backdrop-blur text-gray-700 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-teal-400 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-teal-400 via-emerald-400 to-orange-300 text-white font-medium shadow-lg hover:scale-[1.03] transition duration-300"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
