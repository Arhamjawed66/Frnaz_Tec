import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaSun,
  FaMoon,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

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
      className={`fixed top-0 left-0 w-full z-50 shadow-sm transition-colors duration-300
      ${darkMode ? "bg-gray-900/90 text-white" : "bg-blue-500 text-white"} 
      backdrop-blur-sm`}
    >
      {/* ✅ Centered Navbar with equal margins */}
      <div className="flex items-center justify-between ml-20 mr-20 py-3">
        {/* Left Section (Logo + Search) */}
        <div className="flex items-center gap-6">
          {/* Sidebar Toggle for mobile */}
          <FaBars
            className="text-xl cursor-pointer hover:text-blue-300 transition md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />

          {/* Logo */}
          <Link
            to="/"
            className={`font-bold text-xl tracking-wide
            ${darkMode ? "text-blue-400" : "text-white"}`}
          >
            Invent Plus

          </Link>

          {/* Search */}
          <div className="hidden md:flex relative ml-30">
            <input
              type="text"
              placeholder="Search..."
              className={`border rounded-full pl-50 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-400"
                  : "bg-gray-200 border-gray-300 text-black focus:ring-white"
              }`}
            />
            <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Section (Cart, Account, Theme) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            <FaShoppingCart /> Cart
          </Link>

          {/* Account */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              <FaUser /> Account
            </button>
            {accountOpen && (
              <div
                className={`absolute right-0 mt-2 w-36 shadow-md rounded p-2 z-50
                ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
              >
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="block py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full py-1 px-2 rounded hover:bg-red-500 hover:text-white transition text-left"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                )}
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
