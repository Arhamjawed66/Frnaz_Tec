import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Update_Category() {
  const { darkMode } = useTheme();

  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Category:", category);
    alert("✅ Category Updated Successfully!");
    // TODO: API call for updating category
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-4 py-6 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-lg rounded-2xl shadow-xl border p-8 transition-all duration-500 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Update Category
          </h2>
          <p
            className={`text-sm mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Modify details of an existing category
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category Name */}
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Category Name
            </label>
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
              }`}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Description
            </label>
            <textarea
              name="description"
              value={category.description}
              onChange={handleChange}
              placeholder="Enter category description"
              rows="3"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
              }`}
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Category Image URL
            </label>
            <input
              type="text"
              name="image"
              value={category.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
              }`}
            />
          </div>

          {/* Preview */}
          {category.image && (
            <div className="flex justify-center mt-4">
              <img
                src={category.image}
                alt="Preview"
                className={`h-24 w-24 object-cover rounded-lg border ${
                  darkMode ? "border-gray-600" : "border-gray-300"
                }`}
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
}
