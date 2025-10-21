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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  // ✅ Close dropdown when clicking outside
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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Sidebar Toggle */}
        <FaBars
          className="text-xl cursor-pointer hover:text-blue-300 transition md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Logo */}
        <Link
          to="/"
          className={`font-bold text-lg sm:text-2xl tracking-wide transition-all duration-500
          ${darkMode ? "text-blue-400" : "text-white"}`}
        >
          FRANZ FOOD
        </Link>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`border rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-400"
                  : "bg-gray-300 border-gray-300 text-black focus:ring-white"
              }`}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

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

        {/* Mobile Right Section */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Search Icon */}
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full hover:bg-blue-400/20 transition"
          >
            <FaSearch />
          </button>

          {/* Account Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-blue-400/20 transition"
          >
            <FaUser />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t p-4 flex flex-col gap-3 transition-all duration-300
          ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-800 border-gray-200"}`}
        >
          <Link
            to="/cart"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaShoppingCart /> Cart
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser /> Login
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser /> Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full text-left"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />} Theme
          </button>
        </div>
      )}

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 
          ${darkMode ? "bg-gray-900/95" : "bg-white/95"} px-6`}
        >
          <div className="relative w-full max-w-md">
            <FaTimes
              className="absolute right-3 top-3 cursor-pointer text-xl"
              onClick={() => setSearchOpen(false)}
            />
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className={`w-full border rounded-full px-4 py-3 text-base focus:outline-none focus:ring-2 
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-400"
                  : "bg-gray-100 border-gray-300 text-black focus:ring-blue-500"
              }`}
            />
          </div>
        </div>
      )}
    </header>
  );
}
