// src/components/HabitBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const HabitBanner = () => {
  return (
    <motion.div
      className="mt-10 p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-md text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-green-700">Build Better Habits 🌱</h3>
      <p className="text-gray-700 mt-2">
        Consistency is the key. Start small, grow strong.
      </p>
    </motion.div>
  );
};

export default HabitBanner;
