import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`
        ${darkMode ? "bg-gray-900/90 text-white" : "bg-blue-500 text-white"} 
        backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 transition-all">
        {/* Sidebar Toggle */}
        <FaBars
          className="text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Dynamic Logo */}
        <Link
          to="/"
          className={`font-bold tracking-wide text-2xl transition-all duration-500 mr-30
            ${isSidebarOpen ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}
            ${darkMode ? "text-blue-400" : "text-white"}`}
        >
          FRANZ FOOD
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className={`border rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 
              ${darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-400"
                : "bg-white border-gray-300 focus:ring-blue-500"
              }`}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaShoppingCart /> Cart
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FaUser /> Account
            </button>

            {accountOpen && (
              <div
                className={`absolute right-0 mt-2 w-32 shadow-md rounded p-2 z-50
                ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
              >
                <Link
                  to="/login"
                  className="block py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}
