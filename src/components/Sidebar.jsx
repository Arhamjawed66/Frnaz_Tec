import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaStore,
  FaTruck,
  FaBox,
  FaUtensils,
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaListAlt, // Category icon
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [storeOpen, setStoreOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const location = useLocation();
  const { darkMode } = useTheme();

  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  // 🧠 Toggle functions with auto-close logic
  const toggleStore = () => {
    setStoreOpen(!storeOpen);
    if (!storeOpen) setCategoryOpen(false);
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
    if (!categoryOpen) setStoreOpen(false);
  };

  const navItem = (to, icon, label) => (
    <div className="relative group">
      <Link
        to={to}
        onClick={handleLinkClick}
        className={`flex items-center px-3 py-2 rounded-md transition-all duration-200 ${
          location.pathname === to
            ? darkMode
              ? "bg-gray-700"
              : "bg-blue-600"
            : darkMode
            ? "hover:bg-gray-800"
            : "hover:bg-blue-600/70"
        }`}
      >
        <span className="text-lg">{icon}</span>
        {isSidebarOpen && <span className="ml-3 text-sm">{label}</span>}
      </Link>

      {!isSidebarOpen && (
        <span
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2 
          bg-blue-600 text-white text-[12px] px-2 py-1 rounded shadow opacity-0 
          group-hover:opacity-100 transition"
        >
          {label}
        </span>
      )}
    </div>
  );

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-40 flex flex-col transition-all duration-300 ease-in-out shadow-lg
        ${darkMode ? "bg-gray-900 text-white" : "bg-blue-500 text-white"}
        ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"}
        md:translate-x-0 md:${isSidebarOpen ? "w-64" : "w-20"}
      `}
      >
        {/* Header / Toggle */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 md:justify-start">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 hover:bg-white/20 px-2 py-2 rounded transition-all duration-300"
          >
            {isSidebarOpen ? (
              <>
                <FaTimes className="text-lg" />
                <span className="text-sm font-medium hidden md:inline">Close</span>
              </>
            ) : (
              <FaBars className="text-lg mx-auto" />
            )}
          </button>
          {isSidebarOpen && (
            <span className="text-lg font-semibold hidden md:inline">Menu</span>
          )}
        </div>

        {/* Scrollable Menu */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-2 custom-scrollbar">
          {navItem("/dashboard", <FaHome />, "Dashboard")}

          {/* STORE DROPDOWN */}
          <div className="relative">
            <button
              onClick={toggleStore}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-blue-600/70"
              }`}
            >
              <span className="flex items-center">
                <FaStore className="text-lg" />
                {isSidebarOpen && <span className="ml-3 text-sm">Store</span>}
              </span>
              {isSidebarOpen &&
                (storeOpen ? <FaChevronDown /> : <FaChevronRight />)}
            </button>

            {!isSidebarOpen && (
              <span
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                bg-blue-600 text-white text-[12px] px-2 py-1 rounded shadow opacity-0
                group-hover:opacity-100 transition"
              >
                Store
              </span>
            )}

            {isSidebarOpen && storeOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link
                  to="/store/create"
                  onClick={handleLinkClick}
                  className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                >
                  Create Store
                </Link>
                <Link
                  to="/store/update"
                  onClick={handleLinkClick}
                  className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                >
                  Update Store
                </Link>
                <Link
                  to="/store/view"
                  onClick={handleLinkClick}
                  className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                >
                  View Store
                </Link>
              </div>
            )}
          </div>

          {/* CATEGORY DROPDOWN */}
          <div className="relative">
            <button
              onClick={toggleCategory}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-blue-600/70"
              }`}
            >
              <span className="flex items-center">
                <FaListAlt className="text-lg" />
                {isSidebarOpen && <span className="ml-3 text-sm">Category</span>}
              </span>
              {isSidebarOpen &&
                (categoryOpen ? <FaChevronDown /> : <FaChevronRight />)}
            </button>

            {!isSidebarOpen && (
              <span
                className="absolute left-full top-1/2 -translate-y-1/2 ml-2
                bg-blue-600 text-white text-[12px] px-2 py-1 rounded shadow opacity-0
                group-hover:opacity-100 transition"
              >
                Category
              </span>
            )}

            {isSidebarOpen && categoryOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link
                  to="/category/create"
                  onClick={handleLinkClick}
                  className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                >
                  Create Category
                </Link>
                <Link
                  to="/category/update"
                  onClick={handleLinkClick}
                  className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                >
                  Update Category
                </Link>
                <Link
                  to="/category/view"
                  onClick={handleLinkClick}
                  className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm"
                >
                  View Category
                </Link>
              </div>
            )}
          </div>

          {navItem("/orders", <FaTruck />, "Orders")}
          {navItem("/products", <FaBox />, "Products")}
          {navItem("/users", <FaUtensils />, "Users")}
          {navItem("/settings", <FaStore />, "Settings")}
        </nav>
      </aside>
    </>
  );
}
