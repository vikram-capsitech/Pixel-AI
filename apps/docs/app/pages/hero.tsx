import { Rocket, Code } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './hero.css';

export default function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const handleGetStartedClick = () => {
    const element = document.querySelector('#getting-started');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleViewComponentsClick = () => {
    const element = document.querySelector('#components');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="pixel-hero">
      <div 
        ref={ref}
        className={`pixel-hero-container ${isIntersecting ? 'animate-fade-in-up' : ''}`}
      >
        <h1 className="pixel-hero-title">Build Faster with PixelUI</h1>
        <p className="pixel-hero-subtitle">
          A comprehensive React component library designed for modern web applications. 
          Beautiful, accessible, and fully customizable components that help you ship faster.
        </p>
        <div className="pixel-hero-buttons">
          <button 
            onClick={handleGetStartedClick}
            className="pixel-btn pixel-btn-primary"
          >
            <Rocket size={20} />
            <span>Get Started</span>
          </button>
          <button 
            onClick={handleViewComponentsClick}
            className="pixel-btn pixel-btn-secondary"
          >
            <Code size={20} />
            <span>View Components</span>
          </button>
        </div>
      </div>
    </section>
  );
}
