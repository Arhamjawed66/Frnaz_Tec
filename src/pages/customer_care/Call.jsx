import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Call() {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <FaPhoneAlt /> Call Support
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Need quick assistance? Call our support team.
      </p>

      <a
        href="tel:+923000000000"
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Call Now
      </a>
    </div>
  );
}
