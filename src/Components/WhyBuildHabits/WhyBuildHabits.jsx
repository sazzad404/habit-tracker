import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaClock, FaSmile, FaSeedling } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBrain size={30} />,
    title: "Better Focus",
    description:
      "Develop routines that help you concentrate and achieve goals faster.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaSmile size={30} />,
    title: "Reduced Stress",
    description: "Consistent habits reduce anxiety and make daily life calmer.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaClock size={30} />,
    title: "Time Management",
    description:
      "Build habits to efficiently manage your day and increase productivity.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaSeedling size={30} />,
    title: "Personal Growth",
    description:
      "Small consistent actions lead to long-term growth and success.",
    color: "bg-purple-100 text-purple-600",
  },
];

const WhyBuildHabits = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Why Build Habits?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-12"
        >
          Habits shape your life. Small, consistent actions have huge benefits
          for mental health, productivity, and personal growth.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-4 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
            >
              <div
                className={`p-4 rounded-full ${item.color} flex items-center justify-center`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuildHabits;
