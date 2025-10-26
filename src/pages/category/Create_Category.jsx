import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function Create_Category() {
  const { darkMode } = useTheme();

  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: categoryName,
      description: categoryDescription,
      status,
    });
    alert("✅ Category Created Successfully!");
    setCategoryName("");
    setCategoryDescription("");
    setStatus("active");
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
            Create New Category
          </h2>
          <p
            className={`text-sm mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Add a new product category to your store
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category Name */}
          <div>
            <label
              htmlFor="categoryName"
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
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
              htmlFor="categoryDescription"
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Description
            </label>
            <textarea
              id="categoryDescription"
              rows="3"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
              placeholder="Write short description..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
              }`}
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className={`block text-sm font-medium mb-1 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Create Category
          </button>
        </form>
      </div>
    </div>
  );
}
