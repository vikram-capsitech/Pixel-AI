"use client";

import React from "react";

// AI Card Component
export const AICard = ({ children, title, className = "", onClick }: any) => {
  return (
    <div
      className={`bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 flex flex-col transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-bold text-indigo-400 mb-3">{title}</h3>
      )}
      <div className="text-gray-300 leading-relaxed flex-grow">{children}</div>
    </div>
  );
};
