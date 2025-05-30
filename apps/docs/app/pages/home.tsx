// app/page.tsx or pages/index.tsx (depending on your routing setup)
import { useState } from "react";
import "./home.css";
import Header from "@tarviks/ui/Components/Header/Header";
import AnimatedCover from "@tarviks/ui/Components/PixelDiv/PixelDiv";
import Footer from "./footer";
import Hero from "./hero";
import Features from "./features";
import ComponentsShowcase from "./ComponentsShowcase";
import ComponentPreview from "./ComponentPreview";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <div className="home-container">
      <AnimatedCover variant="particles" opacity={0.9} />
      <Header
        brand="PixelUI"
        logo={
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
        }
        height="50px"
        navLinks={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/Components" },
          { label: "Documentation", href: "/Documentation" },
          { label: "Examples", href: "/Examples" },
          { label: "Community", href: "/Community" },
        ]}
      />
      <Hero />
      <Features />
      <ComponentsShowcase />
      <ComponentPreview />
      <main>
        <section id="docs" className="docs-section">
          <div className="section-inner">
            <h2 className="section-title">Documentation</h2>
            <p className="section-description">
              Comprehensive guides and API documentation for all PixelUI
              components.
            </p>
            <div className="section-buttons">
              <button className="btn btn-primary">View Documentation</button>
            </div>
          </div>
        </section>
        <section style={{ height: "320px" }}></section>
        <section id="community" className="community-section">
          <div className="section-inner">
            <h2 className="section-title">Join Our Community</h2>
            <p className="section-description">
              Connect with other developers, share feedback, and contribute to
              PixelUI.
            </p>
            <div className="section-buttons">
              <button className="btn btn-primary">Join Discord</button>
              <button className="btn btn-secondary">GitHub Discussions</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
