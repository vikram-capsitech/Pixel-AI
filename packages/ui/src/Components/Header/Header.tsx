"use client";
import React, { useState, useEffect, useCallback, CSSProperties } from "react";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({
  brand = "MyBrand",
  logo, // NEW: SVG or ReactNode
  logoSrc = "", // Optional fallback to URL
  navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ],
  backgroundColor = "rgba(255, 255, 255, 0.95)",
  scrolledBackgroundColor = "rgba(255, 255, 255, 0.7)",
  textColor = "#000",
  scrolledTextColor = "#222",
  transitionSpeed = "0.3s",
  blurOnScroll = true,
  radiusOnScroll = "1rem",
  mobileBreakpoint = 768,
  height = "50px",
  styleOverrides,
  styles = {},
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= mobileBreakpoint);
  }, [mobileBreakpoint]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    setMounted(true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const headerStyle: CSSProperties = {
    position: "fixed",
    top: isScrolled ? 10 : 0,
    left: isScrolled ? "1rem" : 0,
    width: isScrolled ? "calc(100% - 2rem)" : "100%",
    height,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "0.8rem 1.2rem" : "1rem 2rem",
    background: isScrolled ? scrolledBackgroundColor : backgroundColor,
    color: isScrolled ? scrolledTextColor : textColor,
    backdropFilter: blurOnScroll && isScrolled ? "blur(10px)" : "none",
    borderRadius: isScrolled ? radiusOnScroll : "0",
    boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
    transition: `all ${transitionSpeed} ease-in-out`,
    zIndex: 999,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(-100%)",
    transitionDelay: mounted ? "0s" : "0.2s",
    ...styleOverrides,
    ...styles.wrapper,
  };

  const navLinkStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "0.5rem" : "1.5rem",
    marginTop: isMobile ? "0.5rem" : 0,
    alignItems: isMobile ? "flex-start" : "center",
    ...styles.navContainer,
  };

  const linkStyle: CSSProperties = {
    color: "inherit",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.2rem",
    transition: "color 0.3s",
    position: "relative",
    ...styles.navLink,
  };

  return (
    <>
      <style>{`
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: #0070f3;
          transition: width 0.3s ease;
        }
      `}</style>

      <header style={headerStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            ...styles.brand,
          }}
        >
          {logo ? (
            <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
              {logo}
            </div>
          ) : logoSrc ? (
            <img
              src={logoSrc}
              alt="logo"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
                ...styles.logo,
              }}
            />
          ) : null}
          <span style={{ fontSize: "2.4rem", fontWeight: 700 }}>{brand}</span>
        </div>

        <nav style={navLinkStyle}>
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="nav-link"
              style={linkStyle}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
