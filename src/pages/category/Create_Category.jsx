import React, { useState } from "react";

const Create_Category = () => {
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
    alert("Category Created Successfully!");
    setCategoryName("");
    setCategoryDescription("");
    setStatus("active");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Create New Category
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Name */}
          <div>
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 
                         dark:text-gray-100 placeholder-gray-400"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="categoryDescription"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Description
            </label>
            <textarea
              id="categoryDescription"
              rows="3"
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
              placeholder="Write short description..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 
                         dark:text-gray-100 placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 
                         dark:text-gray-100"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg 
                       transition-all duration-200"
          >
            Create Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create_Category;
