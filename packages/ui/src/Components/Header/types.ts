import { CSSProperties } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type HeaderStyles = {
  wrapper?: CSSProperties;
  brand?: CSSProperties;
  logo?: CSSProperties;
  navContainer?: CSSProperties;
  navLink?: CSSProperties;
};

export type HeaderProps = {
  children? : React.ReactNode;
  brand?: string;
  logoSrc?: string;
  logo?: React.ReactNode;
  navLinks?: NavLink[];
  backgroundColor?: string;
  scrolledBackgroundColor?: string;
  textColor?: string;
  scrolledTextColor?: string;
  transitionSpeed?: string;
  blurOnScroll?: boolean;
  radiusOnScroll?: string;
  mobileBreakpoint?: number;
  height?: string;
  styleOverrides?: CSSProperties;
  styles?: HeaderStyles;
};
