import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function ViewStore() {
  const { darkMode } = useTheme();

  const stats = [
    { label: "Total Products", value: 124 },
    { label: "Monthly Revenue", value: "$8,420" },
    { label: "Active Orders", value: 36 },
    { label: "Total Customers", value: 980 },
  ];

  const chartData = [70, 45, 85, 60, 90, 50]; // Example % values for chart bars

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Title */}
      <h1
        className={`text-3xl font-bold mb-8 ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Store Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl p-5 flex flex-col items-center justify-center border shadow-md transition-all duration-300
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-blue-50 border-blue-200 hover:shadow-lg"
              }`}
          >
            <h2
              className={`font-semibold text-lg mb-2 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {item.label}
            </h2>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div
        className={`w-full max-w-4xl rounded-2xl p-6 border shadow-md transition-all duration-300
          ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-blue-50 border-blue-200"
          }`}
      >
        <h3
          className={`text-xl font-semibold mb-4 text-center ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Weekly Sales Chart
        </h3>
        <div className="flex items-end justify-between h-40 px-6">
          {chartData.map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-6 rounded-t-md transition-all duration-500 ${
                  darkMode ? "bg-blue-500" : "bg-blue-600"
                }`}
                style={{ height: `${val}%` }}
              ></div>
              <span
                className={`text-xs mt-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                W{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div
        className={`mt-8 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Last updated:{" "}
        <span
          className={`font-medium ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          October 25, 2025
        </span>
      </div>
    </div>
  );
}
