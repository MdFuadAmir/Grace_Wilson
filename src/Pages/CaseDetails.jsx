import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {caseStudies} from "../assets/CaseData"

const CaseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = caseStudies.find((item) => item.id === id);

  // ✅ auto scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-600 dark:text-gray-300">
        Case Study Not Found
      </div>
    );
  }

  return (
    <section className="w-full md:min-h-screen bg-[#ecfeff] dark:bg-[#0f1720] py-24 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 dark:text-emerald-400 mb-6 hover:opacity-70 transition"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* HERO IMAGE (RESPONSIVE FIXED ISSUE SOLVED) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={data.image}
            alt={data.title}
            className="
              w-full 
              h-auto 
              max-h-55 sm:max-h-75 md:max-h-105 lg:max-h-125
              object-cover rounded-2xl
            "
          />
        </motion.div>

        {/* CONTENT */}
        <div className="mt-8">
          {/* Title + Result */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
              {data.title}
            </h1>

            <span className="text-lg font-semibold text-teal-600 dark:text-emerald-400">
              {data.result}
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            {data.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {data.platform?.map((p, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/60 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
              >
                {p}
              </span>
            ))}

            <span className="px-3 py-1 text-xs rounded-full bg-teal-100 dark:bg-slate-700 text-teal-700 dark:text-emerald-300">
              {data.category}
            </span>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <Stat label="Impressions" value={data.impressions} />
          <Stat label="Clicks" value={data.clicks} />
          <Stat label="CTR" value={data.ctr} />
          <Stat label="Conversions" value={data.conversions} />
          <Stat label="ROAS" value={data.roas} />
          <Stat label="CPA" value={data.cpa} />
        </div>

        {/* STRATEGY */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <Box title="Objective" value={data.objective} />
          <Box title="Strategy" value={data.strategy} />
          <Box title="Targeting" value={data.targeting} />
          <Box title="Optimization" value={data.optimization} />
        </div>

        {/* RESULT */}
        <div className="mt-10 p-6 rounded-2xl bg-white/60 dark:bg-slate-800/70 backdrop-blur shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Final Result
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {data.resultDetails}
          </p>
        </div>

        {/* FOOT INFO */}
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-4">
          <span>Budget: {data.budget}</span>
          <span>Duration: {data.duration}</span>
        </div>
      </div>
    </section>
  );
};

export default CaseDetails;

/* ---------- SMALL UI COMPONENTS ---------- */

const Stat = ({ label, value }) => (
  <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/60 backdrop-blur text-center shadow hover:shadow-lg">
    <h3 className="text-teal-600 dark:text-emerald-400 font-bold text-lg">
      {value}
    </h3>
    <p className="text-xs text-gray-600 dark:text-gray-300">{label}</p>
  </div>
);

const Box = ({ title, value }) => (
  <div className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/60 backdrop-blur shadow hover:shadow-lg">
    <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-1">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{value}</p>
  </div>
);
