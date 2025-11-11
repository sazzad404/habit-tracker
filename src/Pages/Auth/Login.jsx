import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const { loginUser, googleAuthProvider } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    // login

    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successful Log in",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setPasswordError(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message || "Something went wrong, please try again!",
        });
      });
  };

  // google auth

  const handleGoogleAuth = () => {
    googleAuthProvider()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successful Log in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message || "Something went wrong, please try again!",
        });
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 text-gray-100"
      >
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 outline-none transition-all"
          />
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 outline-none transition-all pr-10"
            />
            {passwordError && (
              <p className="text-red-400 text-sm mt-1">
                {passwordError.message}
              </p>
            )}
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-sky-400 transition-all"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleAuth}
          className="btn bg-white  text-black w-full mt-2"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-sky-400 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
