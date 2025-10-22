import React, { useEffect, useState } from "react";

const View_Category = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedStatus, setEditedStatus] = useState("");

  // Dummy Data
  useEffect(() => {
    setCategories([
      { id: 1, name: "Electronics", description: "Devices and gadgets", status: "Active" },
      { id: 2, name: "Clothing", description: "Men and women fashion", status: "Inactive" },
      { id: 3, name: "Groceries", description: "Daily household items", status: "Active" },
      { id: 4, name: "Furniture", description: "Home and office furniture", status: "Active" },
    ]);
  }, []);

  // Filtered categories
  const filteredCategories = categories.filter((cat) => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || cat.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Edit modal open
  const handleEdit = (category) => {
    setSelectedCategory(category);
    setEditedName(category.name);
    setEditedDescription(category.description);
    setEditedStatus(category.status);
    setEditModalOpen(true);
  };

  // Delete modal open
  const handleDelete = (category) => {
    setSelectedCategory(category);
    setDeleteModalOpen(true);
  };

  // Save edit
  const handleSaveEdit = () => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategory.id
          ? { ...cat, name: editedName, description: editedDescription, status: editedStatus }
          : cat
      )
    );
    setEditModalOpen(false);
  };

  // Confirm delete
  const confirmDelete = () => {
    setCategories((prev) => prev.filter((cat) => cat.id !== selectedCategory.id));
    setDeleteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          View All Categories
        </h2>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-1/4 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white text-sm">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Category Name</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-2 px-4 text-gray-700 dark:text-gray-200">{index + 1}</td>
                    <td className="py-2 px-4 font-medium text-gray-800 dark:text-gray-100">
                      {cat.name}
                    </td>
                    <td className="py-2 px-4 text-gray-600 dark:text-gray-300">
                      {cat.description}
                    </td>
                    <td
                      className={`py-2 px-4 font-medium ${
                        cat.status === "Active"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-500 dark:text-red-400"
                      }`}
                    >
                      {cat.status}
                    </td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="text-blue-600 hover:underline dark:text-blue-400 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(cat)}
                        className="text-red-600 hover:underline dark:text-red-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Edit Category
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                           dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                           dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <select
                value={editedStatus}
                onChange={(e) => setEditedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                           dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex justify-end mt-5 gap-3">
              <button
                onClick={() => setEditModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 dark:text-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-80 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-medium text-red-500">{selectedCategory?.name}</span>?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-600 dark:text-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default View_Category;

