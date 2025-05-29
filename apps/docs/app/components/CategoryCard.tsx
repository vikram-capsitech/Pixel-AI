import './CategoryCard.css';
import { JSX } from 'react';

interface Component {
  name: string;
  status: 'ready' | 'beta';
}

interface Category {
  title: string;
  count: number;
  components: Component[];
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps): JSX.Element {
  return (
    <div className="category-card">
      <div className="category-card-header">
        <h3 className="category-title">{category.title}</h3>
        <p className="category-count">{category.count} Components</p>
      </div>
      <div className="category-card-content">
        {category.components.map((component, index) => (
          <div key={index} className="component-item">
            <span className="component-name">{component.name}</span>
            <span
              className={`component-status ${
                component.status === 'ready' ? 'status-ready' : 'status-beta'
              }`}
            >
              {component.status === 'ready' ? 'Ready' : 'Beta'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
