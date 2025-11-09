import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import HabitTable from "../../Components/Habit/HabitTable";

const MyHabits = () => {
  const { user } = use(AuthContext);
  const [habit, setHabit] = useState([]);
console.log(habit);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/habits?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setHabit(data);
        });
    }
  }, [user?.email]);
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-primary"></div>
        <h1 className="text-lg font-semibold tracking-wide text-gray-800">
          MY HABITS {habit.length}
        </h1>

        <div className="flex-1 h-px bg-primary"></div>
      </div>
      <div>
        {
                habit.map(singleHabit =><HabitTable singleHabit={singleHabit}></HabitTable>)
        }
      </div>
    </div>
  );
};

export default MyHabits;
