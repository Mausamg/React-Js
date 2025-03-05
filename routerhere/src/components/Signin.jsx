import React from "react";
import { NavLink } from "react-router";
function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      {/* Form Container with Glassmorphism */}
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-8 rounded-xl w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          Welcome Back! 👋
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label className="text-black font-medium">First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-black font-medium">Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-black font-medium">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-black font-medium">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-black font-medium">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition "
              required
            />
          </div>

          {/* Submit Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-black w-full py-3 mt-4 rounded-md font-semibold shadow-md hover:opacity-90 transition duration-300 hover:from-blue-700  hover:cursor-pointer">
            Sign In
          </button>
          <NavLink
            to="/login"
            className="text-center text-blue-500 transition duration-300 hover:underline"
          >
            Already have an account? Login
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Signin;
