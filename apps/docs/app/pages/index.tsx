"use client"

import Header from "@tarviks/ui/Components/Header/Header";
import React from "react";

const DocsHomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "0 20px",
          fontFamily: "Arial, sans-serif",
          color: "#333",
        }}
      >
        <h2>PixelUI Documentation</h2>
        <p>
          Welcome to the official PixelUI docs. Here you can find everything
          you need to get started building beautiful UIs.
        </p>
        {/* More docs content here */}
      </main>
    </div>
  );
};

export default DocsHomePage;
