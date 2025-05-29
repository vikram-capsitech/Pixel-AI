import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import CategoryCard from '../components/CategoryCard';
import './ComponentsShowcase.css';
import { JSX } from 'react';

type ComponentStatus = 'ready' | 'beta';

interface ComponentItem {
  name: string;
  status: ComponentStatus;
}

interface ComponentCategory {
  title: string;
  count: number;
  components: ComponentItem[];
}

const componentCategories: ComponentCategory[] = [
  {
    title: 'Form Controls',
    count: 12,
    components: [
      { name: 'Button', status: 'ready' },
      { name: 'Input', status: 'ready' },
      { name: 'Select', status: 'ready' },
      { name: 'Checkbox', status: 'beta' },
      { name: 'Radio', status: 'beta' }
    ]
  },
  {
    title: 'Navigation',
    count: 8,
    components: [
      { name: 'Navbar', status: 'ready' },
      { name: 'Sidebar', status: 'ready' },
      { name: 'Breadcrumb', status: 'ready' },
      { name: 'Pagination', status: 'beta' },
      { name: 'Tabs', status: 'ready' }
    ]
  },
  {
    title: 'Data Display',
    count: 15,
    components: [
      { name: 'Table', status: 'ready' },
      { name: 'Card', status: 'ready' },
      { name: 'Avatar', status: 'ready' },
      { name: 'Badge', status: 'ready' },
      { name: 'Progress', status: 'beta' }
    ]
  },
  {
    title: 'Feedback',
    count: 6,
    components: [
      { name: 'Alert', status: 'ready' },
      { name: 'Toast', status: 'ready' },
      { name: 'Modal', status: 'ready' },
      { name: 'Tooltip', status: 'beta' },
      { name: 'Spinner', status: 'ready' }
    ]
  }
];

export default function ComponentsShowcase(): JSX.Element {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="components" className="components-section">
      <div className="components-wrapper">
        <div
          ref={ref}
          className={`components-header ${isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="components-title">Component Library</h2>
          <p className="components-subtitle">
            Explore our comprehensive collection of production-ready components
          </p>
        </div>

        <div className="components-grid">
          {componentCategories.map((category, index) => (
            <div
              key={index}
              className={`components-grid-item ${
                isIntersecting ? `animate-fade-in-up delay-${((index % 3) + 1) * 100}` : ''
              }`}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
