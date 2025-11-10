import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatUpp() {
  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <FaWhatsapp /> WhatsApp Support
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Chat with us on WhatsApp for instant response.
      </p>

      <a
        href="https://wa.me/923000000000"
        target="_blank"
        className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}

