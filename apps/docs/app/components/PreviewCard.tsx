import { JSX, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/copyToClipboard';
import './PreviewCard.css';

interface Preview {
  title: string;
  demoType: 'button' | 'input' | 'card' | 'badge';
  code: string;
}

interface PreviewCardProps {
  preview: Preview;
}

const DemoComponents: Record<Preview['demoType'], () => JSX.Element> = {
  button: () => (
    <button 
      className="demo-button"
      onClick={() => {}}
    >
      Click Me
    </button>
  ),
  input: () => (
    <input
      type="text"
      className="demo-input"
      placeholder="Enter text..."
    />
  ),
  card: () => (
    <div className="demo-card">
      <h4 className="demo-card-title">Card Title</h4>
      <p className="demo-card-text">This is a card component with some content.</p>
    </div>
  ),
  badge: () => (
    <span className="demo-badge">New</span>
  )
};

export default function PreviewCard({ preview }: PreviewCardProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(preview.code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const DemoComponent = DemoComponents[preview.demoType];

  return (
    <div className="preview-card">
      <div className="preview-card-header">
        <h3 className="preview-title">{preview.title}</h3>
        <button 
          className="copy-btn"
          onClick={handleCopy}
          style={{ backgroundColor: copied ? '#3bb78f' : '#4f46e5' }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="preview-demo">
        {DemoComponent && <DemoComponent />}
      </div>
      <div className="preview-code">
        <code>{preview.code}</code>
      </div>
    </div>
  );
}
