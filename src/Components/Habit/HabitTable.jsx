import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimes } from "react-icons/fa";

const HabitTable = ({ singleHabit }) => {
  const { title, category, image, createdAt, currentStreak } =
    singleHabit || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-x-auto mt-8 relative">
      {/* Table */}
      <motion.table
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="min-w-full border-collapse bg-white shadow-md rounded-xl overflow-hidden"
      >
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr className="text-gray-700 text-left">
            <th className="py-3 px-4 font-semibold">Image</th>
            <th className="py-3 px-4 font-semibold">Title</th>
            <th className="py-3 px-4 font-semibold">Category</th>
            <th className="py-3 px-4 font-semibold">Current Streak</th>
            <th className="py-3 px-4 font-semibold">Created Date</th>
            <th className="py-3 px-4 font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
            <td className="py-3 px-4">
              <img
                src={image}
                alt={title}
                className="w-14 h-14 object-cover rounded-lg shadow-sm"
              />
            </td>
            <td className="py-3 px-4 font-medium text-gray-800">{title}</td>
            <td className="py-3 px-4 text-gray-600">{category}</td>
            <td className="py-3 px-4 text-gray-700 font-semibold">
              🔥 {currentStreak || 0} days
            </td>
            <td className="py-3 px-4 text-gray-500">
              {createdAt ? new Date(createdAt).toLocaleDateString() : "N/A"}
            </td>
            <td className="py-3 px-4 flex gap-3 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
              >
                <FaEdit /> Update
              </button>
              <button className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                <FaTrashAlt /> Delete
              </button>
              <button className="flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-lg hover:bg-emerald-600 transition">
                <FaCheckCircle /> Complete
              </button>
            </td>
          </tr>
        </tbody>
      </motion.table>

      {/* Modal Section */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md relative"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
              >
                <FaTimes size={18} />
              </button>

              <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                Update Habit
              </h2>

              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Title
                  </label>
                  <input
                    type="text"
                    defaultValue={title}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Category
                  </label>
                  <input
                    type="text"
                    defaultValue={category}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Image URL
                  </label>
                  <input
                    type="text"
                    defaultValue={image}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Current Streak
                  </label>
                  <input
                    type="number"
                    defaultValue={currentStreak}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium mt-2 transition"
                >
                  Save Changes
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HabitTable;
