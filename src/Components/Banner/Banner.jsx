import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const habitImages = [
  "https://picsum.photos/seed/1/400/600",
  "https://picsum.photos/seed/2/400/600",
  "https://picsum.photos/seed/3/400/600",
  "https://picsum.photos/seed/4/400/600",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
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
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#f0fdf4",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          width: "100%",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Left Image Slider */}
        <div
          style={{
            flex: 5,
            position: "relative",
            height: "500px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={habitImages[current]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </AnimatePresence>

          {/* Manual Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            &#10094;
          </button>

          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            &#10095;
          </button>
        </div>

        {/* Right Text Section */}
        <div
          style={{
            flex: 7,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: 1.2,
              color: "#065f46",
            }}
          >
            Build Healthy Habits <br /> Every Day
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "1.2rem",
              marginBottom: "30px",
              color: "#065f46",
            }}
          >
            Track your daily routines, stay consistent, and achieve your goals
            with our habit tracker. Manage your tasks, reminders, and progress
            all in one place.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "12px",
              border: "none",
              background: "#10b981",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Get Started for Free
          </motion.button>

          <div
            style={{
              display: "flex",
              marginTop: "30px",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold", color: "#065f46" }}>
              Available on:
            </p>
            <a href="#">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                alt="App Store"
                style={{ height: "50px" }}
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                alt="Play Store"
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
