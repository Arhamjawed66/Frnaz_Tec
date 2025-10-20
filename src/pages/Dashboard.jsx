import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useTheme } from "../contexts/ThemeContext";

export default function Dashboard() {
  const { darkMode } = useTheme();

  const salesData = [
    { month: "Jan", sales: 4000, revenue: 2400 },
    { month: "Feb", sales: 3000, revenue: 1398 },
    { month: "Mar", sales: 2000, revenue: 9800 },
    { month: "Apr", sales: 2780, revenue: 3908 },
    { month: "May", sales: 1890 },
    { month: "Jun", sales: 2390, revenue: 3800 },
    { month: "Jul", sales: 3490, revenue: 4300 },
  ];

  const recentOrders = [
    { id: "#1234", customer: "John Doe", product: "Wireless Keyboard", status: "Completed", amount: "$99.99" },
    { id: "#1235", customer: "Jane Smith", product: "Gaming Mouse", status: "Pending", amount: "$49.99" },
    { id: "#1236", customer: "Bob Johnson", product: "VR Headset", status: "Shipped", amount: "$299.99" },
    { id: "#1237", customer: "Alice Brown", product: "Bluetooth Speaker", status: "Completed", amount: "$79.99" },
    { id: "#1238", customer: "Charlie Wilson", product: "Smart Watch", status: "Processing", amount: "$199.99" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-600";
      case "Pending": return "text-yellow-600";
      case "Shipped": return "text-blue-600";
      case "Processing": return "text-purple-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Dashboard Overview</h1>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card Template */}
          {[
            { title: "Total Users", value: "1,204", trend: "+12%", color: "blue", icon: "👥" },
            { title: "Orders Today", value: "342", trend: "+8%", color: "green", icon: "🛒" },
            { title: "Revenue", value: "$12,540", trend: "+15%", color: "purple", icon: "💰" },
            { title: "Total Products", value: "856", trend: "-2%", color: "orange", icon: "📦" },
          ].map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{card.title}</p>
                  <h2 className={`text-3xl font-bold mt-2 text-${card.color}-600 dark:text-${card.color}-400`}>{card.value}</h2>
                  <p className="text-green-500 text-sm mt-1">{card.trend} from last period</p>
                </div>
                <div className={`bg-${card.color}-100 dark:bg-${card.color}-900 p-3 rounded-full`}>
                  <span className="text-2xl">{card.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Sales Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Sales Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="month" stroke={darkMode ? "#9ca3af" : "#6b7280"} fontSize={12} />
                <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? "#1f2937" : "#ffffff", border: "none", borderRadius: "8px", color: darkMode ? "#ffffff" : "#000000" }} />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Trends */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Revenue Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="month" stroke={darkMode ? "#9ca3af" : "#6b7280"} fontSize={12} />
                <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: darkMode ? "#1f2937" : "#ffffff", border: "none", borderRadius: "8px", color: darkMode ? "#ffffff" : "#000000" }} />
                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={order.id} className={`border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-750"}`}>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">{order.customer}</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">{order.product}</td>
                    <td className="px-6 py-4"><span className={`font-medium ${getStatusColor(order.status)}`}>{order.status}</span></td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
