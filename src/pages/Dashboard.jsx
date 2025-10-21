import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "../contexts/ThemeContext";

export default function Dashboard({ isSidebarOpen }) {
  const { darkMode } = useTheme();

  const data = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 2000 },
    { month: "Apr", sales: 2780 },
    { month: "May", sales: 1890 },
    { month: "Jun", sales: 2390 },
    { month: "Jul", sales: 3490 },
  ];

  const orders = [
    { id: "#1001", customer: "John", product: "Keyboard", status: "Completed", amount: "$99" },
    { id: "#1002", customer: "Jane", product: "Mouse", status: "Pending", amount: "$49" },
    { id: "#1003", customer: "Alex", product: "Headset", status: "Shipped", amount: "$79" },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out min-h-screen p-4 sm:p-6
        ${isSidebarOpen ? "md:ml-64" : "ml-0"}
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Users", value: "1,204" },
            { title: "Orders", value: "342" },
            { title: "Revenue", value: "$12,540" },
            { title: "Products", value: "856" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-gray-800 rounded shadow text-center hover:shadow-md transition"
            >
              <p className="text-sm">{item.title}</p>
              <h2 className="text-xl font-semibold">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#ddd"} />
              <XAxis dataKey="month" stroke={darkMode ? "#ccc" : "#333"} />
              <YAxis stroke={darkMode ? "#ccc" : "#333"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode ? "#1f2937" : "#fff",
                  color: darkMode ? "#fff" : "#000",
                  borderRadius: "6px",
                }}
              />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Table */}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-sm text-left min-w-[500px]">
            <thead className="bg-gray-100 dark:bg-gray-700">
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
                <tr key={o.id} className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
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
