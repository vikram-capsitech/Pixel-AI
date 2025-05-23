"use client";

import { CodeBlock } from "@repo/ui/components/CodeBlock";
import { PixelAIButton } from "@repo/ui/components/PixelAIButton";
import React from "react"; // Import CodeBlock

const HomePageContent = ({ setActiveComponent }: any) => {
  return (
    <div className="space-y-8">
      <section className="text-center py-16 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl shadow-2xl">
        <h2 className="text-6xl font-extrabold text-white leading-tight mb-4">
          Unleash the Future of UI with{" "}
          <span className="text-purple-400">Pixel-AI</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Revolutionize your applications with intelligent, customizable, and
          AI-powered UI components. Build smarter, design faster.
        </p>
        <div className="flex justify-center gap-4">
          <PixelAIButton
            variant="primary"
            size="lg"
            onClick={() => setActiveComponent("button")}
          >
            Explore Components
          </PixelAIButton>
          <PixelAIButton
            variant="outline"
            size="lg"
            onClick={() => alert("Getting Started section coming soon!")}
          >
            Get Started
          </PixelAIButton>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-indigo-400 mb-6">
          What is Pixel-AI?
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Pixel-AI is a cutting-edge UI library designed for developers who want
          to integrate intelligence directly into their user interfaces. Our
          components are not just visually appealing and highly customizable;
          they are engineered with optional AI capabilities that learn from user
          interactions, adapt to context, and provide a truly dynamic
          experience. From smart buttons to adaptive forms, Pixel-AI empowers
          you to create UIs that are intuitive, efficient, and future-proof.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-indigo-400 mb-6">
          Key Features
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong className="text-purple-300">
              AI-Powered Adaptability:
            </strong>{" "}
            Components that learn and respond to user behavior.
          </li>
          <li>
            <strong className="text-purple-300">Fully Customizable:</strong>{" "}
            Tailor every aspect of our components to match your brand.
          </li>
          <li>
            <strong className="text-purple-300">
              Modular & Component-Wise:
            </strong>{" "}
            Easily integrate only what you need.
          </li>
          <li>
            <strong className="text-purple-300">
              Beautiful & Modern Design:
            </strong>{" "}
            Crafted with attention to detail and aesthetics.
          </li>
          <li>
            <strong className="text-purple-300">Developer-Friendly:</strong>{" "}
            Easy to install, use, and extend.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-indigo-400 mb-6">
          Getting Started
        </h3>
        <p className="text-gray-300 leading-relaxed">
          To begin using Pixel-AI, ensure you have Node.js and npm/yarn
          installed. Then, you can install the library in your React (or
          Next.js) project:
        </p>
        <CodeBlock>
          {`# Using npm
npm install pixel-ai tailwindcss postcss autoprefixer

# Using yarn
yarn add pixel-ai tailwindcss postcss autoprefixer`}
        </CodeBlock>
        <p className="text-gray-300 mt-4">
          After installation, configure Tailwind CSS in your{" "}
          <code className="bg-gray-700 p-1 rounded">tailwind.config.js</code> to
          include Pixel-AI's components:
        </p>
        <CodeBlock language="javascript">
          {`// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this line to include Pixel-AI components
    "./node_modules/pixel-ai/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'pixel-dark': '#1A202C',
        'pixel-purple': '#8B5CF6',
        'pixel-indigo': '#6366F1',
      }
    },
  },
  plugins: [],
}`}
        </CodeBlock>
        <p className="text-gray-300 mt-4">
          Finally, import the base styles in your main CSS file (e.g.,{" "}
          <code className="bg-gray-700 p-1 rounded">./src/index.css</code>):
        </p>
        <CodeBlock language="css">
          {`/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: Add Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}`}
        </CodeBlock>
      </section>
    </div>
  );
};

export default HomePageContent;
