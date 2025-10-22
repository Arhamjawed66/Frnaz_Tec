import React, { useState } from "react";

const Update_Category = () => {
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
    // TODO: Add API call for updating category
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Update Category
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Category Name */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Category Name
          </label>
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Enter category name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={category.description}
            onChange={handleChange}
            placeholder="Enter category description"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Category Image URL
          </label>
          <input
            type="text"
            name="image"
            value={category.image}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Preview */}
        {category.image && (
          <div className="flex justify-center mt-4">
            <img
              src={category.image}
              alt="Preview"
              className="h-24 w-24 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Update Category
        </button>
      </form>
    </div>
  );
};

export default Update_Category;
