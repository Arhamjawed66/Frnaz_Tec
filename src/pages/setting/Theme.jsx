"use client";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaMoon, FaSun, FaPalette } from "react-icons/fa";

export default function Theme() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Page title */}
      <div>
        <h1 className="text-3xl font-bold tracking-wide flex gap-3 items-center">
          <FaPalette className="text-blue-500" />
          Theme Settings
        </h1>
        <p className="opacity-70 text-sm mt-1">Customize your application appearance</p>
      </div>

      {/* ——— Layout Grid ——— */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        {/* 🟦 Left Card: Theme Toggle */}
        <div
          className={`rounded-2xl shadow-lg border transition p-6 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Mode</h2>
          <p className="text-sm opacity-70 mb-6">Switch between Light & Dark theme</p>

          {/* Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-full flex justify-between items-center border px-5 py-3 rounded-xl shadow-sm transition ${
              darkMode
                ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                : "bg-gray-100 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {/* Left */}
            <span className="font-medium text-sm">{darkMode ? "Dark Mode" : "Light Mode"}</span>

            {/* Icon */}
            {darkMode ? (
              <FaMoon className="text-yellow-300 text-xl" />
            ) : (
              <FaSun className="text-yellow-500 text-xl" />
            )}
          </button>
        </div>

        {/* 🟣 Right Card: Live Preview */}
        <div
          className={`rounded-2xl shadow-lg border p-6 transition ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <p className="text-sm opacity-70 mb-6">See how your theme looks</p>

          <div
            className={`rounded-xl p-6 h-48 flex items-center justify-center border text-center shadow-inner transition ${
              darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-gray-300"
            }`}
          >
            <span className="text-lg opacity-70">
              {darkMode ? "Dark Mode Active 🌙" : "Light Mode Active ☀️"}
            </span>
          </div>
        </div>
      </div>

      {/* ——— Theme Cards ——— */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Choose Theme Color</h2>
      <div className="flex gap-4">
        <div className="h-28 w-28 bg-blue-600 rounded-xl shadow cursor-pointer hover:ring-4 hover:ring-blue-300"></div>
        <div className="h-28 w-28 bg-green-600 rounded-xl shadow cursor-pointer hover:ring-4 hover:ring-green-300"></div>
        <div className="h-28 w-28 bg-purple-600 rounded-xl shadow cursor-pointer hover:ring-4 hover:ring-purple-300"></div>
      </div>
      <p className="mt-2 text-sm opacity-60">(* Color theme selection optional)</p>
    </div>
  );
}

