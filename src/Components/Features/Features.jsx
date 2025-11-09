import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Set Goals",
      description:
        "Define your daily, weekly, or monthly habits and stay focused on achieving them.",
      icon: "🎯",
    },
    {
      title: "Track Progress",
      description:
        "Monitor your habits daily with visual streaks and reports to stay motivated.",
      icon: "📈",
    },
    {
      title: "Stay Consistent",
      description:
        "Get reminders and notifications to keep your habits on track every day.",
      icon: "⏰",
    },
    {
      title: "Analyze & Improve",
      description:
        "Review your habit statistics to make smarter choices and form better routines.",
      icon: "🧠",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Track & Improve Your Habits
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Build positive habits, stay consistent, and reach your goals effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 xl:mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl">{feature.icon}</div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 font-pj">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
