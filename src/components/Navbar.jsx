import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMotorcycle, FaBox, FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";

export default function Header({ isOpen, setIsOpen }) {
  const [accountOpen, setAccountOpen] = useState(false); // ✅ Added state

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left: logo + toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            aria-label="Toggle sidebar"
          >
            <FaBars />
          </button>

          <Link to="/" className="text-2xl font-bold text-pink-600 tracking-wide">
            FRANZ FOOD
          </Link>
        </div>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/delivery" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
            <FaMotorcycle /> Delivery
          </Link>
          <Link to="/pickup" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
            <FaBox /> Pickup
          </Link>
          <Link to="/store/view" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4v2h18V4H3zm2 4v12h6V8H5zm8 0v12h6V8h-6z"/></svg>
            Shops
          </Link>
          <Link to="/caterers" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
            Caterers
          </Link>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <Link to="/cart" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
            <FaShoppingCart /> Cart
          </Link>

          {/* Account Button */}
          <button
            onClick={() => setAccountOpen((prev) => !prev)}
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition"
          >
            <FaUser /> Account
          </button>

          {/* Account Dropdown */}
          {accountOpen && (
            <div className="absolute top-14 right-10 bg-white shadow-md rounded p-3 space-y-2">
              <Link to="/login" className="block text-gray-700 hover:text-pink-600 transition">Login</Link>
              <Link to="/signup" className="block text-gray-700 hover:text-pink-600 transition">Signup</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* Could add mobile menu here if needed */}
        </div>

      </div>
    </header>
  );
}

  

