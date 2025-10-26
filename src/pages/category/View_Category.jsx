import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function View_Category() {
  const { darkMode } = useTheme();

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Gadgets, accessories and smart devices.",
      image: "https://cdn-icons-png.flaticon.com/512/1040/1040233.png",
      status: "Active",
    },
    {
      id: 2,
      name: "Fashion",
      description: "Clothing, shoes and accessories.",
      image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      status: "Active",
    },
    {
      id: 3,
      name: "Furniture",
      description: "Home and office furniture collection.",
      image: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      status: "Inactive",
    },
  ];

  return (
    <div
      className={`min-h-screen px-6 py-8 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2
          className={`text-3xl font-bold ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          View All Categories
        </h2>
        <p
          className={`mt-2 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Overview of all product categories with quick status insights
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`rounded-2xl p-6 shadow-lg border transition-all duration-500 hover:scale-[1.02] ${
              darkMode
                ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                : "bg-white border-gray-200 hover:border-blue-400"
            }`}
          >
            {/* Top Section */}
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-blue-300" : "text-blue-700"
                }`}
              >
                {cat.name}
              </h3>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  cat.status === "Active"
                    ? darkMode
                      ? "bg-green-700 text-green-200"
                      : "bg-green-100 text-green-700"
                    : darkMode
                    ? "bg-red-700 text-red-200"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {cat.status}
              </span>
            </div>

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-24 h-24 object-contain rounded-lg"
              />
            </div>

            {/* Description */}
            <p
              className={`text-sm mb-4 leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {cat.description}
            </p>

            {/* Mini chart bar / stats look */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all ${
                  cat.status === "Active"
                    ? "bg-blue-500 w-3/4"
                    : "bg-gray-500 w-1/3"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
