import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);


  const links = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "bg-green-300 font-semibold" : "hover:bg-green-300"
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-habit"
              className={({ isActive }) =>
                isActive ? "bg-green-300 font-semibold" : "hover:bg-green-300"
              }
            >
              Add Habit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-habits"
              className={({ isActive }) =>
                isActive ? "bg-green-300 font-semibold" : "hover:bg-green-300"
              }
            >
              My Habits
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/brows-public-habits"
          className={({ isActive }) =>
            isActive ? "bg-green-300 font-semibold" : "hover:bg-green-300"
          }
        >
          Browse Public Habits
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-auto container">
      <div className="navbar bg-base-100 relative rounded-xl px-4 py-3">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-lg mt-3 w-52 p-2 shadow-md">
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to={"/"}>
            <a
              href="#"
              className="flex items-center rounded outline-none "
            >
              <img
                className="w-auto h-8"
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="HabitTracker Logo"
              />
              <span className="ml-2 text-xl font-bold text-indigo-700">
                HabitTracker
              </span>
            </a>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end relative flex items-center gap-2">
          {!user ? (
            <>
              <Link className="btn btn-sm" to="/login">
                Login
              </Link>
              <Link
                className="btn btn-sm bg-green-300  hover:bg-green-400 focus:bg-green-400 text-black font-semibold"
                to="/signup"
              >
                Signup
              </Link>
            </>
          ) : (
            <div className="relative">
              <motion.img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer border border-gray-300"
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />

              <AnimatePresence>
                {menuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-md p-3 z-50"
                  >
                    <li className="px-3 py-2 hover:bg-gray-100 rounded-lg font-semibold">
                      {user.displayName || "User"}
                    </li>
                    <li className="px-3  text-sm text-gray-500 break-words">
                      {user.email}
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={() => {
                          logOut().then((result) => {
                            Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Successful Log out",
                              showConfirmButton: false,
                              timer: 1500,
                            });
                          });
                          setMenuOpen(false);
                        }}
                        className="w-full py-2 bg-green-300  hover:bg-green-400 text-black rounded-lg font-semibold"
                      >
                        Log Out
                      </button>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
