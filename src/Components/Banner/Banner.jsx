import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const habitImages = [
  "https://i.ibb.co/TD6C2LG5/morning-jog.jpg",
  "https://i.ibb.co/0RcJV7Jv/read-books.jpg",
  "https://i.ibb.co/rRJryggs/medication.jpg",
  "https://i.ibb.co/m5kVB6Kn/drink-water.jpg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % habitImages.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + habitImages.length) % habitImages.length);
  };

  return (
    <section className="bg-[#f0fdf4] py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-[#065f46] mb-4 leading-tight"
          >
            Build Healthy Habits <br /> Every Day
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-[#065f46] mb-6"
          >
            Track your daily routines, stay consistent, and achieve your goals
            with our habit tracker. Manage your tasks, reminders, and progress
            all in one place.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#10b981] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition"
          >
            Get Started for Free
          </motion.button>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <p className="font-bold text-[#065f46]">Available on:</p>
            <a href="#">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                alt="Play Store"
                className="h-10"
              />
            </a>
          </div>
        </div>


        <div className="flex-1 relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={habitImages[current]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </AnimatePresence>

 
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
