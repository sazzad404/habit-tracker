import React from "react";
import { motion } from "framer-motion";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const HabitAnalytics = ({ habits }) => {
  // Calculate overall completion percentage
  const totalDays = 30;
  const completedDays = habits.reduce((acc, habit) => {
    const recent = habit.completionHistory?.filter((h) => {
      const date = new Date(h.date);
      const today = new Date();
      const diff = (today - date) / (1000 * 60 * 60 * 24);
      return diff <= 30;
    }).length || 0;
    return acc + recent;
  }, 0);

  const completionPercentage = Math.round((completedDays / (totalDays * habits.length)) * 100);

  // Radial chart data
  const radialData = [
    {
      name: "Progress",
      value: completionPercentage,
      fill: "#10b981",
    },
  ];

  // Streak chart data
  const streakData = habits.map((habit) => ({
    name: habit.title,
    streak: habit.streak || 0,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 rounded-2xl shadow-lg p-6 md:p-10 bg-[#f9fefb]"
    >
      <h2 className="text-2xl font-bold text-[#065f46] mb-10 text-center">
        📊 Progress Analytics Dashboard
      </h2>

      {/* Radial Progress Chart */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        <div className="w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              barSize={20}
              data={radialData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                minAngle={15}
                background
                clockWise
                dataKey="value"
                cornerRadius={10}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xl font-bold fill-green-700"
              >
                {completionPercentage}%
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-gray-700 text-base md:text-lg max-w-md">
          You've completed <strong>{completedDays}</strong> out of{" "}
          <strong>{totalDays * habits.length}</strong> habit-days in the last 30 days.
          Keep it up! 🌿
        </p>
      </div>

      {/* Streak Bar Chart */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">🔥 Streak Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={streakData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streak" fill="#34d399" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default HabitAnalytics;
