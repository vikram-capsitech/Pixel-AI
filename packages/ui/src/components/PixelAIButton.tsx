"use client";

import React from "react";

// Helper component for displaying a customizable button
export const PixelAIButton = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
}: any) => {
  let baseStyles =
    "font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75";
  let variantStyles = "";
  let sizeStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl focus:ring-purple-500";
      break;
    case "secondary":
      variantStyles =
        "bg-gray-700 text-gray-200 border border-gray-600 hover:bg-gray-600 focus:ring-gray-500";
      break;
    case "outline":
      variantStyles =
        "bg-transparent text-purple-400 border border-purple-500 hover:bg-purple-900 hover:text-white focus:ring-purple-500";
      break;
    case "ghost":
      variantStyles =
        "bg-transparent text-purple-400 hover:bg-purple-900 focus:ring-purple-500";
      break;
    default:
      variantStyles =
        "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl focus:ring-purple-500";
  }

  switch (size) {
    case "sm":
      sizeStyles = "text-sm py-1.5 px-3";
      break;
    case "lg":
      sizeStyles = "text-lg py-3 px-6";
      break;
    case "md":
    default:
      sizeStyles = "text-base py-2.5 px-5";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
