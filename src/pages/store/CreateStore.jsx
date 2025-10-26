import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function CreateStore() {
  const { darkMode } = useTheme();

  // Form state
  const [form, setForm] = useState({
    name: "",
    owner: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Store Created:", form);
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-lg p-8 rounded-2xl shadow-xl border transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <h1
          className={`text-2xl font-bold mb-6 text-center ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Create Store
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Store Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Store Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg transition-all duration-300 focus:ring-2 
                ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                    : "bg-blue-50 border-blue-300 focus:ring-blue-500"
                }`}
              placeholder="Enter store name"
              required
            />
          </div>

          {/* Owner */}
          <div>
            <label className="block mb-2 text-sm font-medium">Owner Name</label>
            <input
              type="text"
              name="owner"
              value={form.owner}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg transition-all duration-300 focus:ring-2 
                ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                    : "bg-blue-50 border-blue-300 focus:ring-blue-500"
                }`}
              placeholder="Enter owner name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg transition-all duration-300 focus:ring-2 
                ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                    : "bg-blue-50 border-blue-300 focus:ring-blue-500"
                }`}
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg transition-all duration-300 focus:ring-2 
                ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                    : "bg-blue-50 border-blue-300 focus:ring-blue-500"
                }`}
              placeholder="+92XXXXXXXXXX"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 text-sm font-medium">Address</label>
            <textarea
              name="address"
              rows="3"
              value={form.address}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg transition-all duration-300 focus:ring-2 
                ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 focus:ring-blue-500"
                    : "bg-blue-50 border-blue-300 focus:ring-blue-500"
                }`}
              placeholder="Store address"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
          >
            Create Store
          </button>
        </form>
      </div>
    </section>
  );
}
