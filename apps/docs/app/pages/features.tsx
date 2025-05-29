import {
  Zap,
  Shield,
  Palette,
  GitBranch,
  Smartphone,
  Puzzle,
} from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./features.css";

const features = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimized components with minimal bundle size and maximum performance. Tree-shaking support and lazy loading built-in.",
    delay: "delay-100",
  },
  {
    icon: Shield,
    title: "Accessibility Ready",
    description:
      "WCAG 2.1 compliant components with proper ARIA attributes, keyboard navigation, and screen reader support.",
    delay: "delay-200",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Extensive theming system with CSS-in-JS support. Override any style while maintaining design consistency.",
    delay: "delay-300",
  },
  {
    icon: GitBranch,
    title: "TypeScript Native",
    description:
      "Written in TypeScript with comprehensive type definitions. Get autocomplete and type safety out of the box.",
    delay: "delay-100",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Responsive components that work perfectly on all devices. Touch-friendly interactions and adaptive layouts.",
    delay: "delay-200",
  },
  {
    icon: Puzzle,
    title: "Modular Design",
    description:
      "Import only what you need. Each component is independently packaged with minimal dependencies.",
    delay: "delay-300",
  },
];

export default function Features() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section className="pixel-features-section">
      <div className="pixel-features-wrapper">
        <div
          ref={ref}
          className={`pixel-features-header ${isIntersecting ? "animate-fade-in-up" : ""}`}
        >
          <h2 className="pixel-features-title">Why Choose PixelUI?</h2>
          <p className="pixel-features-subtitle">
            Built with modern React patterns and best practices in mind
          </p>
        </div>

        <div className="pixel-features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`pixel-feature-card ${isIntersecting ? `animate-fade-in-up ${feature.delay}` : ""}`}
              >
                <div className="pixel-feature-icon">
                  <Icon size={24} />
                </div>
                <h3 className="pixel-feature-title">{feature.title}</h3>
                <p className="pixel-feature-description">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
