import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Habit from "../../Components/Habit/Habit";
import Hero2 from "../../Components/Banner/Hero2";
import HabitPlans from "../../Components/Plans/Plans";
import Features from "../../Components/Features/Features";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader";

const BrowsHabits = () => {
  const data = useLoaderData();
  const { loading } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (loading) return <Loader />;

  const filteredHabits = data.filter((habit) => {
    const matchesSearch = habit.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || habit.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="px-4 py-10 md:py-16 bg-[#f9fefb]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-4 mb-8"
          >
            <div className="flex-1 h-px bg-green-300 hidden md:block"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-center text-[#065f46] tracking-wide">
              SOCIAL HABITS
            </h1>
            <div className="flex-1 h-px bg-green-300 hidden md:block"></div>
          </motion.div>

          {/* Search + Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-10 justify-between items-center"
          >
            <input
              type="text"
              placeholder="Search habits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="All">All Categories</option>
              <option value="Morning">Morning</option>
              <option value="Work">Work</option>
              <option value="Fitness">Fitness</option>
              <option value="Evening">Evening</option>
              <option value="Study">Study</option>
            </select>
          </motion.div>

          {/* Habit Grid */}
          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredHabits.length > 0 ? (
                filteredHabits.map((habit) => (
                  <motion.div
                    key={habit._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Habit habit={habit} />
                  </motion.div>
                ))
              ) : (
                <motion.p
                  className="text-center text-gray-500 col-span-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No habits found.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Other Sections */}
      <Hero2 />
      <Features />
      <HabitPlans />
    </>
  );
};

export default BrowsHabits;
