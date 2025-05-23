"use client";

import React from "react";

// AI Input Component
export const AIInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}: any) => {
  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={label}
          className="block text-gray-300 text-sm font-semibold mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
      />
      {/* Placeholder for AI suggestions/feedback */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 text-sm italic pointer-events-none">
        {/* Example: AI suggestions could appear here */}
      </div>
    </div>
  );
};
