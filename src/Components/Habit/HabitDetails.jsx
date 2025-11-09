import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { FaFireAlt } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";

const HabitDetails = () => {
  const habit = useLoaderData();

  // Destructure habit data
  const {
    title,
    description,
    image,
    category,
    createdBy,
    createdAt,
    progress = 65, // example %
    streak = 8, // example streak days
  } = habit || {};

  // Local state for marking complete
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkComplete = () => {
    setIsCompleted(true);
    // Later you can add PUT/PATCH call to update progress in DB
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100"
      >
        {/* Header Image */}
        <div className="relative">
          <motion.img
            src={
              image ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt={title}
            className="w-full h-[420px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              {title || "Untitled Habit"}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-10 space-y-6">
          {/* Category and Creator Info */}
          <div className="flex flex-wrap items-center justify-between">
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
              {category || "General"}
            </span>

            <div className="text-sm text-gray-500">
              <p>
                Created by:{" "}
                <span className="font-semibold text-gray-700">
                  {createdBy || "Unknown User"}
                </span>
              </p>
              <p>
                {createdAt
                  ? new Date(createdAt).toLocaleDateString()
                  : "Recently added"}
              </p>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 leading-relaxed text-lg"
          >
            {description ||
              "No description available for this habit. Try adding one to inspire consistency!"}
          </motion.p>

          {/* Progress Section */}
          <div className="pt-4">
            <div className="flex justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Progress (Last 30 Days)
              </h2>
              <span className="text-sm font-medium text-green-700">
                {progress}% Completed
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
                className="h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
              ></motion.div>
            </div>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center bg-orange-100 px-4 py-2 rounded-full shadow-sm">
              <FaFireAlt className="text-orange-500 text-xl mr-2" />
              <span className="font-semibold text-gray-700">
                {streak} Day Streak 🔥
              </span>
            </div>
          </div>

          {/* Action Button */}
          {/* Action Buttons */}
          <div className="pt-8 border-t border-gray-200 flex justify-end gap-4">
            {/* Update Button (Left side, red) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
             
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-medium text-white shadow-md bg-red-600 hover:bg-red-700 transition-all"
            >
               Update
            </motion.button>

            {/* Mark Complete Button (Right side) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isCompleted}
              onClick={handleMarkComplete}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium text-white shadow-md transition-all ${
                isCompleted
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              <MdDoneAll className="text-xl" />
              {isCompleted ? "Marked as Complete" : "Mark Complete"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HabitDetails;
