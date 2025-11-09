import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddHabits = () => {
  const { user } = useContext(AuthContext);

  const [habitData, setHabitData] = useState({
    title: "",
    description: "",
    category: "Morning",
    time: "",
    image: "",
    createdAt: new Date(),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = {
      ...habitData,
      userName: user?.displayName,
      createdBy: user?.email,
    };

    console.log("Submitted Habit Data:", submittedData);

    // Example fetch POST request
    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submittedData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successful Sign Up",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-10 bg-white shadow-2xl rounded-2xl mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
        Add a New Habit
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Habit Title */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Habit Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter habit title"
            required
            value={habitData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            required
            placeholder="Describe your habit"
            value={habitData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={habitData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Morning</option>
            <option>Work</option>
            <option>Fitness</option>
            <option>Evening</option>
            <option>Study</option>
          </select>
        </div>

        {/* Reminder Time */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Reminder Time
          </label>
          <input
            type="time"
            name="time"
            required
            value={habitData.time}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Image URL (optional)
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={habitData.image}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {habitData.image && (
            <img
              src={habitData.image}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover rounded-lg border"
            />
          )}
        </div>

        {/* User Info */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              User Name
            </label>
            <input
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              User Email
            </label>
            <input
              type="email"
              readOnly
              value={user?.email || ""}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
        >
          Add Habit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddHabits;
