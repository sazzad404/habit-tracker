import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaClock, FaCheckCircle, FaBrain } from "react-icons/fa";

const habitGuideData = [
  {
    icon: <FaClock className="text-green-600 w-12 h-12" />,
    title: "Consistency is Key",
    description: `
      Habits grow stronger when you do them at the same time every day. Consistency helps train your brain to expect the routine, 
      which increases your chance of sticking with it. Even a small action daily is better than sporadic large efforts.
    `,
    source: "Source: James Clear, Atomic Habits",
  },
  {
    icon: <FaCheckCircle className="text-green-600 w-12 h-12" />,
    title: "Start Small and Scale",
    description: `
      Breaking habits into tiny, manageable steps reduces resistance. Begin with micro-habits, like 5 minutes of reading, 
      and gradually increase as it becomes automatic. This approach ensures steady streak growth.
    `,
    source: "Source: BJ Fogg, Tiny Habits",
  },
  {
    icon: <FaBrain className="text-green-600 w-12 h-12" />,
    title: "Track Your Progress",
    description: `
      Visual tracking of your habits motivates you to maintain streaks. Use journals, apps, or habit trackers to see your progress.
      Seeing streaks reinforces positive behavior and creates accountability.
    `,
    source: "Source: Charles Duhigg, The Power of Habit",
  },
  {
    icon: <FaLightbulb className="text-green-600 w-12 h-12" />,
    title: "Reward and Reflect",
    description: `
      Celebrating small milestones reinforces habits. Reward yourself for completing streaks or reflecting weekly on improvements. 
      Reflection helps identify obstacles and adjust strategies for growth.
    `,
    source: "Source: Harvard Business Review, Habit Formation Studies",
  },
];

const HabitGuideSection = () => {
  return (
    <section className="bg-[#e6f4ea] py-20 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-16"
      >
        How to Improve Your Habit & Streaks
      </motion.h2>

      <div className="space-y-16">
        {habitGuideData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">{item.title}</h3>
              <p className="text-gray-700 mb-4 text-lg whitespace-pre-line">{item.description}</p>
              <p className="text-gray-500 italic text-sm">{item.source}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HabitGuideSection;
