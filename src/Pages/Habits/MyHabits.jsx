import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import HabitTable from "../../Components/Habit/HabitTable";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/habits?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setHabits(data);
        });
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-primary"></div>
        <h1 className="text-lg font-semibold tracking-wide text-gray-800">
          MY HABITS ({habits.length})
        </h1>
        <div className="flex-1 h-px bg-primary"></div>
      </div>

      <div>
        {habits.length > 0 ? (
          habits.map((habit) => (
            <HabitTable
              key={habit._id}
              singleHabit={habit}
              allHabits={habits}
              setHabit={setHabits}
            />
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
  );
};

export default MyHabits;
