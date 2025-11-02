import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import ImageSlider from "../components/ImageSlider";

export default function Dashboard() {
  const { darkMode } = useTheme();

  const orders = [
    { id: "#1001", customer: "John", product: "Keyboard", status: "Completed", amount: "$99" },
    { id: "#1002", customer: "Jane", product: "Mouse", status: "Pending", amount: "$49" },
    { id: "#1003", customer: "Alex", product: "Headset", status: "Shipped", amount: "$79" },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-8">

        {/* ✅ Image Slider on Top */}
        <ImageSlider />

        {/* Header */}
        <h1 className="text-3xl font-semibold">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Users", value: "1,204" },
            { title: "Orders", value: "342" },
            { title: "Revenue", value: "$12,540" },
            { title: "Products", value: "856" },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl p-5 border shadow-sm transition hover:shadow-md ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.title}
              </p>
              <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Overview Section */}
        <div
          className={`rounded-xl p-5 border shadow-sm ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold mb-2">Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Welcome back! Here’s a quick summary of your recent activity.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div
              className={`p-4 rounded-lg border ${
                darkMode
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <h3 className="font-medium">New Signups</h3>
              <p className="text-2xl font-bold mt-2">85</p>
            </div>
            <div
              className={`p-4 rounded-lg border ${
                darkMode
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <h3 className="font-medium">Monthly Sales</h3>
              <p className="text-2xl font-bold mt-2">$4,230</p>
            </div>
            <div
              className={`p-4 rounded-lg border ${
                darkMode
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <h3 className="font-medium">Active Users</h3>
              <p className="text-2xl font-bold mt-2">342</p>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div
          className={`rounded-xl p-5 border shadow-sm overflow-x-auto ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-sm text-left min-w-[500px]">
            <thead
              className={`${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100"
              }`}
            >
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Product</th>
                <th className="p-3">Status</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr
                  key={o.id}
                  className={`border-t transition ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">{o.id}</td>
                  <td className="p-3">{o.customer}</td>
                  <td className="p-3">{o.product}</td>
                  <td className="p-3">{o.status}</td>
                  <td className="p-3 font-medium">{o.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
