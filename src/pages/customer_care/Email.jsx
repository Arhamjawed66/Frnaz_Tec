import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Email() {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <FaEnvelope /> Email Support
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Send us an email and we respond within 24 hours.
      </p>

      <a
        href="mailto:support@yourstore.com"
        className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
      >
        Send Email
      </a>
    </div>
  );
}

