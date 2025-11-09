// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const habits = [
  { id: 1, title: "Daily Exercise", category: "Health", description: "Complete 30 minutes of exercise every day", date: "Started: Jan 01, 2025", img: "https://picsum.photos/seed/1/100/100" },
  { id: 2, title: "Read Books", category: "Learning", description: "Read 20 pages daily to expand your knowledge", date: "Started: Feb 15, 2025", img: "https://picsum.photos/seed/2/100/100" },
  { id: 3, title: "Drink Water", category: "Health", description: "Drink 8 glasses of water each day", date: "Started: Mar 03, 2025", img: "https://picsum.photos/seed/3/100/100" },
  { id: 4, title: "Meditate", category: "Mindfulness", description: "Meditate for 10 minutes every morning", date: "Started: Apr 01, 2025", img: "https://picsum.photos/seed/4/100/100" },
  { id: 5, title: "Track Expenses", category: "Finance", description: "Log daily expenses to save money effectively", date: "Started: May 10, 2025", img: "https://picsum.photos/seed/5/100/100" },
];

const HeroSection = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Auto Sliding Habit Cards */}
      <section style={{ overflow: "hidden", padding: "40px 0" }}>
        <motion.div
          style={{
            display: "flex",
            gap: "20px",
            width: "max-content",
          }}
          animate={{ x: ["0%", "-50%"] }} // slide left 50%
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          }}
        >
          {/* Duplicate cards for infinite loop effect */}
          {[...habits, ...habits].map((habit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                minWidth: "250px",
                background: "#fff",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            >
              <img
                src={habit.img}
                alt={habit.title}
                style={{ width: "60px", height: "60px", borderRadius: "12px", marginBottom: "10px" }}
              />
              <p style={{ fontSize: "0.8rem", fontWeight: "600", color: "#4f46e5" }}>{habit.category}</p>
              <h3 style={{ fontWeight: "bold", fontSize: "1.1rem", margin: "5px 0" }}>{habit.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "5px" }}>{habit.description}</p>
              <p style={{ fontSize: "0.75rem", color: "#999" }}>{habit.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
