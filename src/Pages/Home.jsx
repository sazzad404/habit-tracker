import React from "react";
import Banner from "../Components/Banner/Banner";
import HeroSection from "../Components/Banner/HeroSection";
import { useLoaderData } from "react-router";
import Habit from "../Components/Habit/Habit";
import Features from "../Components/Features/Features";
import HabitPlans from "../Components/Plans/Plans";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="min-h-screen">
      <Banner />
      <HeroSection />
      <Features></Features>
      {/* Content Section */}
      <div className="container mx-auto ">
        {/* Left side - Featured Posts */}
        <div className="col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-primary"></div>
            <h1 className="text-lg font-semibold tracking-wide text-gray-800">
              FEATURED POSTS
            </h1>

            <div className="flex-1 h-px bg-primary"></div>
          </div>

          {/* Example posts */}
          <div className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((habit) => (
                <Habit key={habit._id} habit={habit} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <HabitPlans></HabitPlans>
    </div>
  );
};

export default Home;
