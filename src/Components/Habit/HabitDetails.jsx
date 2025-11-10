import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaFireAlt } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";


const HabitDetails = () => {
  const habit = useLoaderData();

  const {
    _id,
    title,
    description,
    image,
    category,
    createdBy,
    createdAt,
    completionHistory = [],
    streak = 0,
  } = habit || {};

  const [isCompleted, setIsCompleted] = useState(false);
  const [updatedHabit, setUpdatedHabit] = useState(habit);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    if (completionHistory.some((h) => h.date === today)) {
      setIsCompleted(true);
    }
  }, [completionHistory]);

  const calculateProgress = () => {
    const today = new Date();
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      return d.toISOString().split("T")[0];
    });
    const completedDays = completionHistory.filter((h) =>
      last30Days.includes(h.date)
    ).length;
    return Math.round((completedDays / 30) * 100);
  };

  const progress = calculateProgress();

  const handleMarkComplete = async () => {
    const today = new Date().toISOString().split("T")[0];

    if (completionHistory.some((h) => h.date === today)) {
      Swal.fire({
        icon: "info",
        title: "Already completed today!",
        timer: 1500,
        showConfirmButton: false,
      });
      setIsCompleted(true);
      return;
    }

    try {
      const res = await axios.patch(
        `http://localhost:3000/habits/${_id}/complete`
      );

      if (res.data.success) {
        const newHistory = [...completionHistory, { date: today }];
        const updated = {
          ...updatedHabit,
          completionHistory: newHistory,
          streak: res.data.streak || streak + 1,
        };
        setUpdatedHabit(updated);
        setIsCompleted(true);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.message || "Marked as complete!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update habit progress.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-4 sm:px-6 lg:px-8">
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
            className="w-full h-[300px] sm:h-[400px] object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              {title || "Untitled Habit"}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Category and Creator Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide w-fit">
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
            className="text-gray-700 leading-relaxed text-base sm:text-lg"
          >
            {description ||
              "No description available for this habit. Try adding one to inspire consistency!"}
          </motion.p>

          {/* Progress Section */}
          <div className="pt-4">
            <div className="flex justify-between mb-2">
              <h2 className="text-base sm:text-lg font-semibold text-gray-700">
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
              />
            </div>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center gap-3 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center bg-orange-100 px-4 py-2 rounded-full shadow-sm"
            >
              <FaFireAlt className="text-orange-500 text-xl mr-2 animate-pulse" />
              <span className="font-semibold text-gray-700">
                {updatedHabit.streak} Day Streak 🔥
              </span>
            </motion.div>
          </div>

          {/* Action Button */}
          <div className="pt-8 border-t border-gray-200 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isCompleted}
              onClick={handleMarkComplete}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-medium text-white shadow-md transition-all ${
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
      {/* Review Section */}
        
      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mt-12"
      >
        <a
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
        >
          ⬅️ Back to Home
        </a>
      </motion.div>
    </section>
    
  );
};

export default HabitDetails;
