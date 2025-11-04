// import React from "react";
// import { useTheme } from "../contexts/ThemeContext";
// import ImageSlider from "../components/ImageSlider";

// export default function Dashboard() {
//   const { darkMode } = useTheme();

//   const orders = [
//     { id: "#1001", customer: "John", product: "Keyboard", status: "Completed", amount: "$99" },
//     { id: "#1002", customer: "Jane", product: "Mouse", status: "Pending", amount: "$49" },
//     { id: "#1003", customer: "Alex", product: "Headset", status: "Shipped", amount: "$79" },
//   ];

//   return (
//     <div
//       className={`min-h-screen p-6 transition-all duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto space-y-8">

//         {/* ✅ Image Slider on Top */}
//         <ImageSlider />

//         {/* Header */}
//         <h1 className="text-3xl font-semibold">Dashboard</h1>

//         {/* Stats Section */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {[
//             { title: "Users", value: "1,204" },
//             { title: "Orders", value: "342" },
//             { title: "Revenue", value: "$12,540" },
//             { title: "Products", value: "856" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`rounded-xl p-5 border shadow-sm transition hover:shadow-md ${
//                 darkMode
//                   ? "bg-gray-800 border-gray-700"
//                   : "bg-white border-gray-200"
//               }`}
//             >
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 {item.title}
//               </p>
//               <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
//             </div>
//           ))}
//         </div>

//         {/* Overview Section */}
//         <div
//           className={`rounded-xl p-5 border shadow-sm ${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           }`}
//         >
//           <h2 className="text-lg font-semibold mb-2">Overview</h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Welcome back! Here’s a quick summary of your recent activity.
//           </p>

//           <div className="grid sm:grid-cols-3 gap-4 mt-4">
//             <div
//               className={`p-4 rounded-lg border ${
//                 darkMode
//                   ? "border-gray-700 bg-gray-900"
//                   : "border-gray-200 bg-gray-50"
//               }`}
//             >
//               <h3 className="font-medium">New Signups</h3>
//               <p className="text-2xl font-bold mt-2">85</p>
//             </div>
//             <div
//               className={`p-4 rounded-lg border ${
//                 darkMode
//                   ? "border-gray-700 bg-gray-900"
//                   : "border-gray-200 bg-gray-50"
//               }`}
//             >
//               <h3 className="font-medium">Monthly Sales</h3>
//               <p className="text-2xl font-bold mt-2">$4,230</p>
//             </div>
//             <div
//               className={`p-4 rounded-lg border ${
//                 darkMode
//                   ? "border-gray-700 bg-gray-900"
//                   : "border-gray-200 bg-gray-50"
//               }`}
//             >
//               <h3 className="font-medium">Active Users</h3>
//               <p className="text-2xl font-bold mt-2">342</p>
//             </div>
//           </div>
//         </div>

//         {/* Orders Table */}
//         <div
//           className={`rounded-xl p-5 border shadow-sm overflow-x-auto ${
//             darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//           }`}
//         >
//           <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
//           <table className="w-full text-sm text-left min-w-[500px]">
//             <thead
//               className={`${
//                 darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100"
//               }`}
//             >
//               <tr>
//                 <th className="p-3">ID</th>
//                 <th className="p-3">Customer</th>
//                 <th className="p-3">Product</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((o) => (
//                 <tr
//                   key={o.id}
//                   className={`border-t transition ${
//                     darkMode
//                       ? "border-gray-700 hover:bg-gray-700"
//                       : "border-gray-200 hover:bg-gray-50"
//                   }`}
//                 >
//                   <td className="p-3">{o.id}</td>
//                   <td className="p-3">{o.customer}</td>
//                   <td className="p-3">{o.product}</td>
//                   <td className="p-3">{o.status}</td>
//                   <td className="p-3 font-medium">{o.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import ImageSlider from "../components/ImageSlider";

export default function Dashboard() {
  const { darkMode } = useTheme();

  const inventoryItems = [
    { item: "Apples", category: "Food", stock: "180 g", supplier: "Bread", cost: "$450" },
    { item: "Bread", category: "Bakery", stock: "60 g", supplier: "Milk", cost: "$460" },
    { item: "Milk", category: "Storage", stock: "20 g", supplier: "Chicken", cost: "$250" },
    { item: "Chicken", category: "Potato", stock: "600 g", supplier: "Sauce", cost: "$120" },
    { item: "Tomatoes", category: "Fruit", stock: "20 g", supplier: "Tomatoes", cost: "$450" },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-blue-50 text-gray-900"
      }`}
    >
      {/* ✅ Image Slider on Top */}
      <ImageSlider />

      <div className="max-w-7xl mx-auto mt-10 space-y-8">
        {/* ✅ Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Store Main</h1>
          <div className="flex items-center space-x-3">
            <button
              className={`p-2 rounded-full shadow transition ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-white hover:bg-blue-100 text-gray-700"
              }`}
            >
              🔍
            </button>
            <button
              className={`p-2 rounded-full shadow transition ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-white hover:bg-blue-100 text-gray-700"
              }`}
            >
              👤
            </button>
          </div>
        </div>

        {/* ✅ Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chart Card */}
          <div
            className={`col-span-2 rounded-xl p-5 shadow border transition ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-blue-100"
            }`}
          >
            <h2 className="text-lg font-semibold mb-3">Sales for the Week</h2>
            <div className="flex items-end justify-between h-40">
              {[40, 70, 50, 90].map((height, i) => (
                <div
                  key={i}
                  className={`w-10 rounded-t-lg ${
                    darkMode ? "bg-blue-500" : "bg-blue-400"
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div
              className={`flex justify-between text-sm mt-3 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                In Sales value{" "}
                <span
                  className={`font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  $23,450
                </span>
              </p>
              <p>
                Low Stock Items{" "}
                <span
                  className={`font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  12 items
                </span>
              </p>
            </div>
          </div>

          {/* Reminder Card */}
          <div className="bg-orange-400 text-white rounded-xl p-5 shadow flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Restock Reminder</h2>
              <p>Order Bananas from Greenfield Produce</p>
            </div>
            <button className="mt-5 py-2 px-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-100">
              Reorder
            </button>
          </div>
        </div>

        {/* ✅ Right-side Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Todays Sale", value: "$5,000" },
            { title: "Low in stock", value: "12 Products" },
            { title: "Due Payments", value: "$2,150" },
            { title: "Pending Delivery", value: "3 Orders" },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl shadow border transition ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-blue-100"
              }`}
            >
              <h3
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-500"
                } text-lg font-bold`}
              >
                {card.title}
              </h3>
              <p className="text-md font-bold mt-1">{card.value}</p>
              {card.sub && (
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {card.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Table */}
        <div
          className={`rounded-xl shadow border overflow-x-auto p-5 transition ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-blue-100"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Inventory Items</h2>
            <input
              type="text"
              placeholder="Search items..."
              className={`px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border border-gray-600 text-gray-100 focus:ring-blue-500"
                  : "bg-white border border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>

          <table className="w-full text-sm text-left">
            <thead
              className={`${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-blue-100"
              }`}
            >
              <tr>
                <th className="p-3">Item</th>
                <th className="p-3">Category</th>
                <th className="p-3">In Stock</th>
                <th className="p-3">Supplier</th>
                <th className="p-3">Unit Cost</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((i, index) => (
                <tr
                  key={index}
                  className={`border-t transition ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "hover:bg-blue-50"
                  }`}
                >
                  <td className="p-3">{i.item}</td>
                  <td className="p-3">{i.category}</td>
                  <td className="p-3">{i.stock}</td>
                  <td className="p-3">{i.supplier}</td>
                  <td className="p-3 font-semibold">{i.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
