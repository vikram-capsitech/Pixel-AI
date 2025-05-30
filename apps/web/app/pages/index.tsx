"use client";

import Header from "@tarviks/ui/Components/Header/Header";
import React from "react"; // Your UI package

const WebHomePage: React.FC = () => {
  return (
    <div>
      <Header
        brand="PixelAI"
        navLinks={[
          { label: "Overview", href: "#overview" },
          { label: "Features", href: "#features" },
          { label: "Docs", href: "#docs" },
          { label: "GitHub", href: "https://github.com/pixelai" },
        ]}
        transitionSpeed="0.5s"
        blurOnScroll={true}
        radiusOnScroll="15px"
        mobileBreakpoint={768}
      />
      
      <main style={{ marginTop: "120px" }}>
        <section>
          <h2>Welcome to PixelAI UI 🌈</h2>
          <p>
            AI meets UI with smart components. Scroll to see the sticky header!
          </p>
          <div style={{ height: "2500px" }}></div>
        </section>
      </main>
    </div>
  );
};

export default WebHomePage;
