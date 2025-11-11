import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrashAlt, FaCheckCircle, FaFire, FaCalendarAlt, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

// Helper to format date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return "N/A";
  }
};

const HabitTable = ({ singleHabit, allHabits, setHabit }) => {
  if (!singleHabit) return null;

  const { _id, title, category, image, createdAt, streak, completionHistory } = singleHabit;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    title: title || "",
    category: category || "",
    image: image || "",
    streak: streak || 0,
  });

  // Compute if habit is completed today
  const completedToday = completionHistory?.some(
    (h) => h.date === new Date().toISOString().split("T")[0]
  );

  // Update habit info
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/habits/${_id}`, updatedData);

      if (res.status === 200 || res.status === 201) {
        const updatedHabit = res.data.data || { ...singleHabit, ...updatedData };
        const newList = allHabits.map((habit) =>
          habit._id === _id ? updatedHabit : habit
        );
        setHabit(newList);
        setIsModalOpen(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Update Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.error("Update Error:", err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err.response?.data?.message || "Something went wrong.",
      });
    }
  };

  // Delete habit
  const handleDlt = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
      customClass: { container: "z-[9999]" },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/habits/${id}`)
          .then(() => {
            const newList = allHabits.filter((habit) => habit._id !== id);
            setHabit(newList);
            Swal.fire({
              title: "Deleted!",
              text: "Your habit has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.error("Delete Error:", err);
            Swal.fire({
              icon: "error",
              title: "Deletion Failed",
              text: err.response?.data?.message || "Something went wrong.",
            });
          });
      }
    });
  };

  // Mark habit as complete
  const handleComplete = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:3000/habits/${id}/complete`);
      if (res.data.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.message || "Habit marked as complete!",
          showConfirmButton: false,
          timer: 1500,
        });

        const today = new Date().toISOString().split("T")[0];

        const newList = allHabits.map((habit) =>
          habit._id === id
            ? {
                ...habit,
                streak: res.data.streak ?? habit.streak + 1,
                completionHistory: [...(habit.completionHistory || []), { date: today }],
              }
            : habit
        );
        setHabit(newList);
      } else {
        Swal.fire({
          icon: "info",
          title: "Info",
          text: res.data.message || "Could not complete habit.",
        });
      }
    } catch (error) {
      console.error("Completion Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to complete habit.",
      });
    }
  };

  const ActionButtons = (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex-1 min-w-[80px] flex items-center justify-center gap-1 text-sm bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition"
        title="Update Habit"
      >
        <FaEdit />
        <span className="hidden sm:inline">Update</span>
      </button>
      <button
        onClick={() => handleDlt(_id)}
        className="flex-1 min-w-[80px] flex items-center justify-center gap-1 text-sm bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
        title="Delete Habit"
      >
        <FaTrashAlt />
        <span className="hidden sm:inline">Delete</span>
      </button>
      <button
        onClick={() => handleComplete(_id)}
        disabled={completedToday}
        className={`flex-1 min-w-[120px] flex items-center justify-center gap-1 text-sm p-2 rounded-lg transition font-semibold ${
          completedToday
            ? "bg-gray-200 text-gray-600 cursor-not-allowed border border-gray-300"
            : "bg-emerald-500 hover:bg-emerald-600 text-white"
        }`}
        title={completedToday ? "Already Completed Today" : "Mark as Complete"}
      >
        <FaCheckCircle className={completedToday ? "text-emerald-500" : ""} />
        {completedToday ? "Completed" : "Complete"}
      </button>
    </>
  );

  return (
    <div className="mt-4 relative">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="min-w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr className="text-gray-700 text-left text-sm">
              <th className="py-3 px-4 font-bold w-16">Image</th>
              <th className="py-3 px-4 font-bold">Title</th>
              <th className="py-3 px-4 font-bold w-32">Category</th>
              <th className="py-3 px-4 font-bold w-36">Current Streak</th>
              <th className="py-3 px-4 font-bold w-36">Created Date</th>
              <th className="py-3 px-4 font-bold text-center w-[380px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
              <td className="py-3 px-4">
                <img
                  src={image}
                  alt={title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/56x56?text=Habit";
                  }}
                  className="w-14 h-14 object-cover rounded-lg shadow-inner"
                />
              </td>
              <td className="py-3 px-4 font-medium text-gray-800 text-base">{title}</td>
              <td className="py-3 px-4 text-gray-600 text-sm capitalize">{category}</td>
              <td className="py-3 px-4 text-gray-700 font-bold text-base">
                <FaFire className="inline text-orange-500 mr-1" /> {streak || 0} days
              </td>
              <td className="py-3 px-4 text-gray-500 text-sm">{formatDate(createdAt)}</td>
              <td className="py-3 px-4 flex gap-2 justify-center items-center">{ActionButtons}</td>
            </tr>
          </tbody>
        </motion.table>
      </div>

      {/* Mobile Card */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-4 rounded-xl shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-4 border-b pb-4">
            <img
              src={image}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/64x64?text=Habit";
              }}
              className="w-16 h-16 object-cover rounded-xl shadow-md flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500 capitalize">{category}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4 text-sm font-medium">
            <p className="text-gray-700 flex items-center gap-1">
              <FaFire className="text-orange-500" />
              <span className="font-bold">{streak || 0}</span> day streak
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              <FaCalendarAlt className="text-blue-500" /> Since: {formatDate(createdAt)}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap sm:flex-nowrap">{ActionButtons}</div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999]"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg relative m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center border-b pb-3">
                Edit Habit: {title}
              </h2>

              <form onSubmit={handleUpdate} className="flex flex-col gap-5">
                <input
                  type="text"
                  required
                  value={updatedData.title}
                  onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  placeholder="Habit Title"
                />
                <input
                  type="text"
                  value={updatedData.category}
                  onChange={(e) => setUpdatedData({ ...updatedData, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  placeholder="Category"
                />
                <input
                  type="text"
                  value={updatedData.image}
                  onChange={(e) => setUpdatedData({ ...updatedData, image: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  placeholder="Image URL"
                />
                <input
                  type="number"
                  min="0"
                  value={updatedData.streak}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, streak: Number(e.target.value) || 0 })
                  }
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"
                  placeholder="Current Streak"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold mt-4 shadow-lg shadow-yellow-200/50 transition duration-300 ease-in-out"
                >
                  <FaEdit className="inline mr-2" /> Save Changes
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
