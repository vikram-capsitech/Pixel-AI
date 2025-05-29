import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import PreviewCard from '../components/PreviewCard';
import './ComponentPreview.css';
import { JSX } from 'react';

interface Preview {
  title: string;
  demoType: string;
  code: string;
}

const componentPreviews: Preview[] = [
  {
    title: 'Button Component',
    demoType: 'button',
    code: `import { Button } from '@pixelui/react';

<Button variant="primary" size="md">
  Click Me
</Button>`
  },
  {
    title: 'Input Component',
    demoType: 'input',
    code: `import { Input } from '@pixelui/react';

<Input 
  placeholder="Enter text..."
  onChange={handleChange}
/>`
  },
  {
    title: 'Card Component',
    demoType: 'card',
    code: `import { Card } from '@pixelui/react';

<Card>
  <Card.Header>Card Title</Card.Header>
  <Card.Body>
    This is a card component.
  </Card.Body>
</Card>`
  },
  {
    title: 'Badge Component',
    demoType: 'badge',
    code: `import { Badge } from '@pixelui/react';

<Badge variant="primary">
  New
</Badge>`
  }
];

export default function ComponentPreview(): JSX.Element {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="examples" className="component-preview-section">
      <div className="container">
        <div 
          ref={ref}
          className={`preview-header ${isIntersecting ? 'animate-fade-in-up' : ''}`}
        >
          <h2 className="preview-title">Live Component Demos</h2>
          <p className="preview-subtitle">
            See our components in action with interactive examples and code snippets
          </p>
        </div>
        
        <div className="preview-grid">
          {componentPreviews.map((preview, index) => (
            <div
              key={index}
              className={`preview-item ${
                isIntersecting ? `animate-fade-in-up delay-${((index % 2) + 1) * 200}` : ''
              }`}
            >
              <PreviewCard preview={preview as any} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
