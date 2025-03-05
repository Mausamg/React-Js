import React from "react";
import { NavLink } from "react-router";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      {/* Form Container with Glassmorphism */}
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          Welcome Back! 👋
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div className="flex flex-col">
            <label
              className="text-black font-medium mb-1 text-left"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              className="text-black font-medium mb-1 text-left"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-black w-full py-3 mt-4 rounded-md font-semibold shadow-md hover:opacity-90 transition duration-300 hover:from-blue-700 hover:cursor-pointer"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <NavLink
            to="/signin"
            className="text-center text-blue-500 transition duration-300 hover:underline block mt-3"
          >
            Don't have an account? Sign Up
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
