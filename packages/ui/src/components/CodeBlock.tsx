"use client";

import React from "react";

// Helper component for displaying code snippets
export const CodeBlock = ({ children, language = "javascript" }: any) => (
  <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mt-4">
    <code className={`language-${language}`}>{children}</code>
  </pre>
);
