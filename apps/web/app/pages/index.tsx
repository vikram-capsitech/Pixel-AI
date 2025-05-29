"use client";

import Header from "@tarviks/ui/Components/Header/Header";
import React from "react"; // Your UI package

const WebHomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <section
        style={{
          maxWidth: "900px",
          margin: "60px auto",
          padding: "0 24px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#222",
        }}
      >
        <h2>Welcome to PixelUI</h2>
        <p>
          PixelUI is your go-to React component library for building sleek and
          consistent interfaces. Explore our components, try demos, and get
          started today.
        </p>
        {/* More marketing content here */}
      </section>
    </div>
  );
};

export default WebHomePage;
