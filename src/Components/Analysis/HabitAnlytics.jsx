// src/Components/Habit/HabitAnalytics.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";

const HabitAnalytics = ({ habits }) => {
  // 📊 Weekly Completion Data
  const weeklyData = Array.from({ length: 7 }, (_, i) => {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const dateStr = day.toISOString().split("T")[0];

    const completed = habits.filter(h =>
      h.completionHistory?.some(d => d.date === dateStr)
    ).length;

    return {
      day: day.toLocaleDateString("en-US", { weekday: "short" }),
      completed,
    };
  }).reverse();

  // 🔥 Streak Growth Data
  const streakData = habits.map(habit => ({
    name: habit.title,
    streak: habit.streak || 0,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16  rounded-2xl shadow-lg p-6 md:p-10 bg-[#f9fefb]"
    >
      <h2 className="text-2xl font-bold text-[#065f46] mb-6 text-center">
        📈 Progress Analytics Dashboard
      </h2>

      {/* Weekly Completion Chart */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Weekly Completion</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Streak Growth Chart */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Streak Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={streakData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="streak" stroke="#f97316" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default HabitAnalytics;
