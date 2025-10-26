import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function UpdateStore() {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Store updated successfully!");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-2 transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-3xl border shadow-md rounded-2xl p-8 transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-blue-50 border-blue-200"
        }`}
      >
        {/* Header */}
        <h1
          className={`text-3xl font-bold text-center mb-8 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Update Store
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Store Name */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Store Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter store name"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-blue-300 text-gray-800"
              }`}
              required
            />
          </div>

          {/* Owner Name */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Owner Name
            </label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              placeholder="Enter owner name"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-blue-300 text-gray-800"
              }`}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-blue-300 text-gray-800"
              }`}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-blue-300 text-gray-800"
              }`}
              required
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label
              className={`block text-sm font-medium mb-2 ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter store address"
              rows="3"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-blue-300 text-gray-800"
              }`}
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-sm"
            >
              Update Store
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
