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
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [storeOpen, setStoreOpen] = useState(false);
  const location = useLocation();
  const { darkMode } = useTheme();

  const navItem = (to, icon, label) => (
    <div className="relative group">
      <Link
        to={to}
        className={`flex items-center px-3 py-2 rounded-md transition-all duration-200 ${
          location.pathname === to
            ? darkMode
              ? "bg-gray-700"
              : "bg-blue-600"
            : darkMode
            ? "hover:bg-gray-700"
            : "hover:bg-blue-600"
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
    <aside
      className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300 ease-in-out shadow-md 
      ${darkMode ? "bg-gray-900 text-white" : "bg-blue-500 text-white"}
      ${isSidebarOpen ? "w-64" : "w-16"}`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 mb-4 rounded hover:bg-white/20 w-full flex items-center justify-center md:justify-start transition-all duration-300"
      >
        <FaBars className="text-xl" />
        {isSidebarOpen && <span className="ml-3 text-sm font-medium">Menu</span>}
      </button>

      {/* Menu Items */}
      <nav className="space-y-2">
        {navItem("/dashboard", <FaHome />, "Dashboard")}

        {/* Store Dropdown */}
        <div className="relative group">
          <button
            onClick={() => setStoreOpen(!storeOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/20 transition-all duration-200"
          >
            <span className="flex items-center">
              <FaStore className="text-lg" />
              {isSidebarOpen && <span className="ml-3 text-sm">Store</span>}
            </span>
            {isSidebarOpen && (storeOpen ? <FaChevronDown /> : <FaChevronRight />)}
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
              <Link to="/store/create" className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm">
                Create Store
              </Link>
              <Link to="/store/update" className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm">
                Update Store
              </Link>
              <Link to="/store/view" className="block hover:bg-white/20 px-3 py-1.5 rounded-md text-sm">
                View Store
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
  );
}
