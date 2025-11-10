import React, { useState } from "react";
import Call from "./Call";
import Email from "./Email";
import WhatUpp from "./Whatsapp";

export default function CustomerCare() {
  const [activeTab, setActiveTab] = useState("call");

  return (
    <div className="p-6 min-h-screen transition-colors duration-300 
      bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">

      <h1 className="text-2xl font-semibold mb-6">Customer Care</h1>

      {/* Tabs */}
      <div className="flex gap-3 border-b dark:border-gray-700 pb-2">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === "call"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("call")}
        >
          Call
        </button>

        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === "email"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("email")}
        >
          Email
        </button>

        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === "WhatUpp"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setActiveTab("WhatUpp")}
        >
          WhatsApp
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "call" && <Call />}
        {activeTab === "email" && <Email />}
        {activeTab === "WhatUpp" && <WhatUpp />}
      </div>
    </div>
  );
}
