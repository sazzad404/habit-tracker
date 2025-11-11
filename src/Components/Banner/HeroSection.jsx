import React from "react";
import { motion } from "framer-motion";

const habits = [
  {
    id: 1,
    title: "Daily Exercise",
    category: "Health",
    description: "Complete 30 minutes of exercise every day",
    date: "Started: Jan 01, 2025",
    img: "https://picsum.photos/seed/1/100/100",
  },
  {
    id: 2,
    title: "Read Books",
    category: "Learning",
    description: "Read 20 pages daily to expand your knowledge",
    date: "Started: Feb 15, 2025",
    img: "https://picsum.photos/seed/2/100/100",
  },
  {
    id: 3,
    title: "Drink Water",
    category: "Health",
    description: "Drink 8 glasses of water each day",
    date: "Started: Mar 03, 2025",
    img: "https://picsum.photos/seed/3/100/100",
  },
  {
    id: 4,
    title: "Meditate",
    category: "Mindfulness",
    description: "Meditate for 10 minutes every morning",
    date: "Started: Apr 01, 2025",
    img: "https://picsum.photos/seed/4/100/100",
  },
  {
    id: 5,
    title: "Track Expenses",
    category: "Finance",
    description: "Log daily expenses to save money effectively",
    date: "Started: May 10, 2025",
    img: "https://picsum.photos/seed/5/100/100",
  },
];

const HeroSection = () => {
  return (
    <section className="py-10 bg-gray-50  overflow-hidden">
      <motion.div
        className="flex gap-6 w-max px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        {[...habits, ...habits].map((habit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="min-w-[250px] sm:min-w-[280px] bg-white p-5 rounded-2xl shadow-md flex-shrink-0"
          >
            <img
              src={habit.img}
              alt={habit.title}
              className="w-14 h-14 rounded-xl mb-3 object-cover"
            />
            <p className="text-xs font-semibold text-indigo-600">
              {habit.category}
            </p>
            <h3 className="text-base font-bold mt-1 mb-2 text-gray-800">
              {habit.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{habit.description}</p>
            <p className="text-xs text-gray-400">{habit.date}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
