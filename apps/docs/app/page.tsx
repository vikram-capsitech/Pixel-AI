"use client";
// import styles from "./page.module.css";
import { ThemeProvider } from "@repo/ui/theme/ThemeProvider";
import { useState } from "react";
import HomePageContent from "./src/HomePageContent";
import ButtonComponentDoc from "./src/ButtonComponentDoc";
import AIInputComponentDoc from "./src/AIInputComponentDoc";
import AICardComponentDoc from "./src/AICardComponentDoc";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("home");
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
        <header className="bg-gray-800 shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-50 rounded-b-xl">
          <div className="text-3xl font-extrabold text-white">
            <span className="text-purple-400">Pixel</span>-AI
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-200"
                  onClick={() => setActiveComponent("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-200"
                  onClick={() => setActiveComponent("button")}
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-200"
                  onClick={() => alert("Docs section coming soon!")}
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-200"
                  onClick={() => alert("GitHub link coming soon!")}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
          {" "}
          {/* Adjust height for header */}
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 bg-gray-800 p-6 shadow-xl md:rounded-tr-xl md:rounded-br-xl">
          <nav className="space-y-4">
            <h3 className="text-xl font-bold text-gray-200 mb-4">Components</h3>
            <ul>
              <li>
                <button
                  onClick={() => setActiveComponent('button')}
                  className={`w-full text-left py-2 px-4 rounded-lg transition duration-200 ${
                    activeComponent === 'button'
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Button
                </button>
              </li>
              {/* New component links */}
              <li className="mt-2">
                <button
                  onClick={() => setActiveComponent('input')}
                  className={`w-full text-left py-2 px-4 rounded-lg transition duration-200 ${
                    activeComponent === 'input'
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Input
                </button>
              </li>
              <li className="mt-2">
                <button
                  onClick={() => setActiveComponent('card')}
                  className={`w-full text-left py-2 px-4 rounded-lg transition duration-200 ${
                    activeComponent === 'card'
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Card
                </button>
              </li>
              {/* Placeholder for more components */}
              <li className="mt-2">
                <button
                  onClick={() => alert('More components coming soon!')}
                  className="w-full text-left py-2 px-4 rounded-lg text-gray-500 cursor-not-allowed"
                  disabled
                >
                  Modal (Coming Soon)
                </button>
              </li>
            </ul>
          </nav>
        </aside>
          {/* Content Display Area */}
          <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          {activeComponent === 'home' && <HomePageContent setActiveComponent={setActiveComponent} />}
          {activeComponent === 'button' && <ButtonComponentDoc />}
          {activeComponent === 'input' && <AIInputComponentDoc />} {/* New rendering */}
          {activeComponent === 'card' && <AICardComponentDoc />} {/* New rendering */}
          {/* Render other component docs based on activeComponent state */}
        </main>

        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-center py-6 px-4 mt-0">
          <p>
            &copy; {new Date().getFullYear()} Pixel-AI. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with <span className="text-red-500">&hearts;</span> and
            powered by intelligent components.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
