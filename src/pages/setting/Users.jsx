"use client";
import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

export default function Users() {
  const { darkMode } = useTheme();

  const [users, setUsers] = useState([
    { id: 1, name: "Sophie Turner", email: "sophie@email.com", role: "Admin" },
    { id: 2, name: "John Carter", email: "john@email.com", role: "Editor" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", email: "", role: "" });

  const openModal = (user = null) => {
    setForm(
      user
        ? user
        : { id: null, name: "", email: "", role: "" }
    );
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (form.id) {
      setUsers(users.map((u) => (u.id === form.id ? form : u)));
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm opacity-70">Manage system users</p>
        </div>

        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <FaPlus /> Add User
        </button>
      </div>

      {/* Table */}
      <div
        className={`rounded-xl shadow-lg overflow-hidden border ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <table className="w-full">
          <thead
            className={`text-left text-sm ${
              darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100"
            }`}
          >
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {users.map((user) => (
              <tr
                key={user.id}
                className={`border-t ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3 flex gap-4 justify-center">
                  <FaEdit
                    onClick={() => openModal(user)}
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                  />
                  <FaTrash
                    onClick={() => deleteUser(user.id)}
                    className="cursor-pointer text-red-500 hover:text-red-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-xl w-96 shadow-xl ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">{form.id ? "Edit User" : "Add User"}</h2>

            <input
              placeholder="Name"
              className="w-full px-3 py-2 mb-3 rounded border"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full px-3 py-2 mb-3 rounded border"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Role"
              className="w-full px-3 py-2 mb-4 rounded border"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />

            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 rounded" onClick={() => setModalOpen(false)}>
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                {form.id ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
