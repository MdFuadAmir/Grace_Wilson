import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaPaperPlane,
  FaEnvelope,
  FaWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await axios.post(
        "https://grace-wilson-server.vercel.app/send-email",
        data,
      );

      toast.success("Message sent successfully 🚀");
      reset();
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 md:py-28 px-6 bg-[#ecfeff] dark:bg-[#0f1720] relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/50 dark:bg-slate-800/70 backdrop-blur border border-white/40 dark:border-slate-700 text-sm text-teal-600 dark:text-emerald-400">
              <FaPaperPlane />
              Contact Me
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                Let’s Build Something
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-teal-500 via-emerald-500 to-orange-400">
                  Powerful Together
                </span>
              </h2>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                Ready to scale your business? Let’s discuss your next winning
                campaign and build strategies that drive measurable results.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "mdfuadamir@gmail.com",
                },
                {
                  icon: <FaWhatsapp />,
                  title: "WhatsApp",
                  value: "+8801705470131",
                },
                {
                  icon: <FaLocationDot />,
                  title: "Location",
                  value: "Bangladesh",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl
                  bg-white/70 dark:bg-slate-800/80
                  backdrop-blur border border-white/40 dark:border-slate-700 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-r from-teal-400 to-emerald-400 text-white">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.title}
                    </p>
                    <p className="font-medium text-gray-700 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl
            bg-white/35 dark:bg-slate-800/85
            backdrop-blur-2xl
            border border-white/60 dark:border-slate-700
            shadow-2xl"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full p-4 rounded-xl
                bg-white dark:bg-slate-700
                text-gray-700 dark:text-white
                placeholder-gray-400
                outline-none
                focus:ring-2 focus:ring-teal-400
                shadow-sm"
              />

              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full p-4 rounded-xl
                bg-white dark:bg-slate-700
                text-gray-700 dark:text-white
                placeholder-gray-400
                outline-none
                focus:ring-2 focus:ring-teal-400
                shadow-sm"
              />

              <textarea
                rows="8"
                placeholder="Tell me about your digital marketing goals..."
                {...register("message", { required: true })}
                className="w-full p-4 rounded-xl
                bg-white dark:bg-slate-700
                text-gray-700 dark:text-white
                placeholder-gray-400
                outline-none
                focus:ring-2 focus:ring-teal-400
                shadow-sm"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl
                bg-linear-to-r from-teal-400 via-emerald-400 to-orange-300
                text-white font-medium shadow-lg
                transition-all duration-300
                flex items-center justify-center gap-2
                ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-[1.02]"
                }`}
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
