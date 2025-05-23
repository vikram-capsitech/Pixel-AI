"use client"

import { AIInput } from '@repo/ui/components/AIInput';
import { CodeBlock } from '@repo/ui/components/CodeBlock';
import React, { useState } from 'react';

const AIInputComponentDoc = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-indigo-400 mb-6">AI-Powered Input</h2>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Description</h3>
        <p className="text-gray-300 leading-relaxed">
          The <code className="bg-gray-700 p-1 rounded">AIInput</code> component goes beyond a standard text field by integrating intelligent features to assist users during data entry. It can provide real-time suggestions, auto-completion, validation feedback, or even context-aware hints based on the user's input patterns and the expected data. This significantly improves data accuracy and user efficiency.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          Imagine an input field that suggests relevant tags as you type, corrects common typos, or provides a helpful hint if the input format is incorrect, all powered by AI.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Installation</h3>
        <p className="text-gray-300">
          To use the <code className="bg-gray-700 p-1 rounded">AIInput</code> in your project, ensure you have Pixel-AI installed.
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
          {`import { AIInput } from 'pixel-ai';

function MyComponent() {
  const [email, setEmail] = useState('');
  return (
    <AIInput
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-gray-200 mb-3">Usage Examples</h3>
        <p className="text-gray-300 mb-4">
          Here are a few examples of the AI Input:
        </p>
        <div className="space-y-4 max-w-md">
          <AIInput
            label="Username"
            placeholder="Enter your username"
            value={inputValue}
            onChange={(e:any) => setInputValue(e.target.value)}
          />
          <AIInput
            label="Search Query"
            placeholder="Search for components..."
            type="search"
          />
          <AIInput
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <CodeBlock>
          {`<AIInput
  label="Username"
  placeholder="Enter your username"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>
<AIInput
  label="Search Query"
  placeholder="Search for components..."
  type="search"
/>
<AIInput
  label="Password"
  placeholder="Enter your password"
  type="password"
/>`}
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
                <td className="py-3 px-4 text-gray-200">label</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">The label for the input field.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">type</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">'text'</td>
                <td className="py-3 px-4 text-gray-300">The HTML input type (e.g., 'text', 'email', 'password').</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">value</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">The current value of the input field.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">onChange</td>
                <td className="py-3 px-4 text-purple-300">function</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">Callback function invoked when the input value changes.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 text-gray-200">placeholder</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-300">Text displayed when the input is empty.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-200">className</td>
                <td className="py-3 px-4 text-purple-300">string</td>
                <td className="py-3 px-4 text-gray-400">''</td>
                <td className="py-3 px-4 text-gray-300">Additional Tailwind CSS classes to apply to the input container.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AIInputComponentDoc;
