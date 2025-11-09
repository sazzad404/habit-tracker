import React from "react";
import { useLoaderData } from "react-router";
import Habit from "../../Components/Habit/Habit";
import Hero2 from "../../Components/Banner/Hero2";
import HabitPlans from "../../Components/Plans/Plans";
import Features from "../../Components/Features/Features";

const BrowsHabits = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-primary"></div>
          <h1 className="text-lg font-semibold tracking-wide text-gray-800">
            BROWS HABITS
          </h1>

          <div className="flex-1 h-px bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {data.map((habit) => (
            <Habit habit={habit}></Habit>
          ))}
        </div>
      </div>
      <Hero2></Hero2>
      <Features></Features>
      <HabitPlans></HabitPlans>
      
    </>
  );
};

export default BrowsHabits;
