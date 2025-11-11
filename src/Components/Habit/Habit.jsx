import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Habit = ({ habit }) => {
  const { createdBy, description, title, image, _id } = habit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 w-full max-w-sm mx-auto"
    >
      {/* Image Section */}
      <figure className="h-52 sm:h-60 overflow-hidden">
        <motion.img
          src={
            image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
      </figure>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-[200px] sm:h-[200px]">
        {/* Title + Badge + Description */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              {title}
            </h2>
            <span className="bg-gradient-to-r from-green-200 to-green-400 text-green-800 text-xs px-2 py-1 rounded-full font-medium shadow-sm">
              NEW
            </span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3">
            {description?.length > 100
              ? description.slice(0, 100) + "..."
              : description || "No description available."}
          </p>
        </div>

        {/* Footer: Creator + Button */}
        <div className="flex justify-between items-center pt-4 mt-auto">
          <span className="text-xs text-gray-500 font-medium">
            By {createdBy || "Unknown"}
          </span>

          <Link to={`/habit-details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-all"
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Habit;
