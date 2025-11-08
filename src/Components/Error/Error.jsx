import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
      >
        <motion.h1
          className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium transition-all"
          >
            Go Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-800 transition-all"
          >
            Retry
          </button>
        </motion.div>

        <motion.div
          className="mt-10"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            className="mx-auto w-32 h-32 opacity-80"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <rect
              x="12"
              y="20"
              width="96"
              height="68"
              rx="10"
              fill="url(#g)"
              opacity="0.2"
            />
            <rect x="22" y="28" width="76" height="52" rx="6" fill="#0f172a" />
            <circle cx="45" cy="54" r="4" fill="#fff" />
            <circle cx="75" cy="54" r="4" fill="#fff" />
            <rect x="52" y="70" width="16" height="4" rx="2" fill="#94a3b8" />
            <line
              x1="60"
              y1="20"
              x2="60"
              y2="10"
              stroke="#c7d2fe"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="60" cy="8" r="2.6" fill="#fde68a" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error;
