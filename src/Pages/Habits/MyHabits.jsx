import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import HabitTable from "../../Components/Habit/HabitTable";
import HabitAnalytics from "../../Components/Analysis/HabitAnlytics";
import HabitGuideSection from "../../Components/Habit Guide/habitGuideData";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://habit-tracker-server-three.vercel.app/habits?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setHabits(data));
    }
  }, [user?.email]);

  return (
    <section className="px-4 py-10 md:py-16 bg-[#f9fefb] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-green-300 hidden md:block"></div>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-[#065f46] tracking-wide">
            My Habits <span className="text-green-500">({habits.length})</span>
          </h1>
          <div className="flex-1 h-px bg-green-300 hidden md:block"></div>
        </motion.div>

        <div className="space-y-6">
          {habits.length > 0 ? (
            habits.map((habit) => (
              <motion.div
                key={habit._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <HabitTable
                  singleHabit={habit}
                  allHabits={habits}
                  setHabit={setHabits}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="text-center text-xl font-semibold text-gray-400 mt-10"
            >
              😢 No habits found!
            </motion.div>
          )}
        </div>
      </div>
      {habits.length > 0 && <HabitAnalytics habits={habits} />}
      <HabitGuideSection></HabitGuideSection>
    </section>
  );
};

export default MyHabits;
