"use client"

import { AICard } from '@repo/ui/components/AICard';
import { CodeBlock } from '@repo/ui/components/CodeBlock';
import React from 'react';

const AICardComponentDoc = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-indigo-400 mb-6">AI-Powered Card</h2>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Description</h3>
        <p className="text-gray-300 leading-relaxed">
          The <code className="bg-gray-700 p-1 rounded">AICard</code> component is a versatile container that can dynamically adapt its content or presentation based on AI-driven insights. It can prioritize information, highlight key details, or even suggest related actions based on user context and historical data. This makes your UI more intelligent and personalized, guiding users effectively through complex information.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          Potential AI features include: content summarization, related content suggestions, personalized recommendations, or adaptive layout changes based on user engagement.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Installation</h3>
        <p className="text-gray-300">
          To use the <code className="bg-gray-700 p-1 rounded">AICard</code> in your project, ensure you have Pixel-AI installed.
        </p>
        <CodeBlock>
          {`# For npm
npm install pixel-ai

# For yarn
yarn add pixel-ai`}
        </CodeBlock>
        <p className="text-gray-300 mt-4">
          Then, import and use the component:
        </p>
        <CodeBlock>
          {`import { AICard } from 'pixel-ai';

function MyComponent() {
  return (
    <AICard title="Smart Insights">
      <p>This card provides AI-driven insights based on your recent activity.</p>
    </AICard>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Usage Examples</h3>
        <p className="text-gray-300 mb-4">
          Here are a few examples of the AI Card:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AICard title="AI-Driven Summary">
            <p>This is a dynamically generated summary of a longer article, optimized for quick comprehension.</p>
          </AICard>
          <AICard title="Recommended Actions">
            <p>Based on your usage, we recommend reviewing your pending tasks and updating your profile.</p>
          </AICard>
          <AICard>
            <p>A simple card without a title, demonstrating basic usage. Content can be personalized.</p>
          </AICard>
        </div>
        <CodeBlock>
          {`<AICard title="AI-Driven Summary">
  <p>This is a dynamically generated summary of a longer article, optimized for quick comprehension.</p>
</AICard>

<AICard title="Recommended Actions">
  <p>Based on your usage, we recommend reviewing your pending tasks and updating your profile.</p>
</AICard>

<AICard>
  <p>A simple card without a title, demonstrating basic usage. Content can be personalized.</p>
</AICard>`}
        </CodeBlock>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Props</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="py-3 px-4">Prop</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Default</th>
                <th className="py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">children</td>
                <td className="py-3 px-4 text-purple-300">ReactNode</td>
                <td className="py-3 px-4 text-gray-400">Required</td>
                <td className="py-3 px-4 text-gray-300">The content displayed inside the card.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">title</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">Optional title for the card.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">className</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">''</td>
                <td className="py-3 px-4 text-gray-300">Additional Tailwind CSS classes to apply to the card.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-200">onClick</td>
                <td className="py-3 px-4 text-purple-300">function</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">Callback function invoked when the card is clicked.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AICardComponentDoc;
