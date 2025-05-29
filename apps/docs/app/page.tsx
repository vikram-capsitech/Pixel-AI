import AnimatedCover from "@repo/ui/Components/PixelDiv/PixelDiv";
import styles from "./page.module.css";
import Header from "@repo/ui/Components/Header/Header";

export default function Home() {
  return (
    <>
      <AnimatedCover variant="particles" opacity={0.9} />
      <Header
        logoSrc="https://cdn.vectorstock.com/i/1000v/82/80/lorem-ipsum-business-logo-template-vector-36328280.jpg"
        brand="TestBrand"
        navLinks={[
          { label: "Dashboard", href: "#dashboard" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        backgroundColor="#fff"
        scrolledBackgroundColor="#e0e0e0"
        textColor="#000"
        scrolledTextColor="#111"
        transitionSpeed="0.3s"
        blurOnScroll={true}
        radiusOnScroll="12px"
        mobileBreakpoint={768}
      />
      <main style={{ marginTop: '120px', padding: '2rem' }}>
        <h1>Scroll down 👇</h1>
        <div style={{ height: '2500px' }}>
          So Welcome All
        </div>
      </main>
    </>
  );
}
