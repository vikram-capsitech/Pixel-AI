"use client";

import { CodeBlock } from "@repo/ui/components/CodeBlock";
import { PixelAIButton } from "@repo/ui/components/PixelAIButton";
import React from "react";

const ButtonComponentDoc = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-indigo-400 mb-6">
        AI-Powered Button
      </h2>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">
          Description
        </h3>
        <p className="text-gray-300 leading-relaxed">
          The <code className="bg-gray-700 p-1 rounded">PixelAIButton</code> is
          more than just a clickable element; it's an intelligent component
          designed to enhance user experience through subtle AI-driven
          adaptations. This button dynamically adjusts its visual feedback and
          potentially its text suggestions based on user interaction patterns
          and contextual data within your application. Imagine a button that
          subtly changes its shade to indicate urgency or suggests a more
          relevant action based on the user's journey.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          While the core AI logic is integrated into our backend services, the
          frontend component provides a seamless interface for these smart
          features, ensuring your UI is always responsive and intuitive.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">
          Installation
        </h3>
        <p className="text-gray-300">
          To use the{" "}
          <code className="bg-gray-700 p-1 rounded">PixelAIButton</code> in your
          project, ensure you have Pixel-AI installed.
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
          {`import { PixelAIButton } from 'pixel-ai';

function MyComponent() {
  return (
    <PixelAIButton onClick={() => console.log('Button clicked!')}>
      Click Me
    </PixelAIButton>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">
          Usage Examples
        </h3>
        <p className="text-gray-300 mb-4">
          Here are a few examples of the button with different variants and
          sizes:
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <PixelAIButton variant="primary" size="md">
            Primary Button
          </PixelAIButton>
          <PixelAIButton variant="secondary" size="md">
            Secondary Button
          </PixelAIButton>
          <PixelAIButton variant="outline" size="md">
            Outline Button
          </PixelAIButton>
          <PixelAIButton variant="ghost" size="md">
            Ghost Button
          </PixelAIButton>
          <PixelAIButton variant="primary" size="sm">
            Small Button
          </PixelAIButton>
          <PixelAIButton variant="primary" size="lg">
            Large Button
          </PixelAIButton>
        </div>
        <CodeBlock>
          {`<PixelAIButton variant="primary">Primary Button</PixelAIButton>
<PixelAIButton variant="secondary">Secondary Button</PixelAIButton>
<PixelAIButton variant="outline">Outline Button</PixelAIButton>
<PixelAIButton variant="ghost">Ghost Button</PixelAIButton>
<PixelAIButton variant="primary" size="sm">Small Button</PixelAIButton>
<PixelAIButton variant="primary" size="lg">Large Button</PixelAIButton>`}
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
                <td className="py-3 px-4 text-gray-300">
                  The content displayed inside the button.
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">className</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">''</td>
                <td className="py-3 px-4 text-gray-300">
                  Additional Tailwind CSS classes to apply to the button.
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">variant</td>
                <td className="py-3 px-4 text-purple-300">
                  'primary' | 'secondary' | 'outline' | 'ghost'
                </td>
                <td className="py-3 px-4 text-gray-400">'primary'</td>
                <td className="py-3 px-4 text-gray-300">
                  Defines the visual style of the button.
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">size</td>
                <td className="py-3 px-4 text-purple-300">
                  'sm' | 'md' | 'lg'
                </td>
                <td className="py-3 px-4 text-gray-400">'md'</td>
                <td className="py-3 px-4 text-gray-300">
                  Sets the size of the button.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-200">onClick</td>
                <td className="py-3 px-4 text-purple-300">function</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">
                  Callback function invoked when the button is clicked.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ButtonComponentDoc;
