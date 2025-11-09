import React from "react";
import { motion } from "framer-motion";
import { Link,  } from "react-router";

const Habit = ({ habit }) => {
 
  const { createdBy, description, title, image, _id } = habit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <figure className="h-52 overflow-hidden">
        <motion.img
          src={
            image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </figure>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
          {title}
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
            NEW
          </span>
        </h2>

        <p className="text-gray-600 text-sm line-clamp-3">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <div className="flex justify-between items-center pt-3">
          <span className="text-xs text-gray-500 font-medium">
            By {createdBy || "Unknown"}
          </span>

          <Link to={`/habit-details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
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
