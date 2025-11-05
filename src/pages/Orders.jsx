import React from "react";

export default function Orders() {
  const orders = [
    {
      id: "ORD-1001",
      customer: "Ali Khan",
      date: "2025-10-18",
      total: "$245",
      status: "Deliver",
    },
    {
      id: "ORD-1002",
      customer: "Sara Ahmed",
      date: "2025-10-19",
      total: "$320",
      status: "Panding",
    },
    {
      id: "ORD-1003",
      customer: "Bilal Qureshi",
      date: "2025-10-17",
      total: "$120",
      status: "Cancelled",
    },
  ];

  const statusColor = {
    Delivered: "text-green-600 bg-green-100 dark:bg-green-900/40 dark:text-green-300",
    Pending: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-300",
    Cancelled: "text-red-600 bg-red-100 dark:bg-red-900/40 dark:text-red-300",
  };

  return (
    <div className="ml-64 p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        📦 Orders
      </h1>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-blue-600 dark:bg-blue-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {order.customer}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {order.total}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
