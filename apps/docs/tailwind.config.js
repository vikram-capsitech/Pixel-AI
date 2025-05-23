const sharedConfig = require("../../packages/ui/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // 👈 important
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // shared UI components
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "pixel-dark": "#1A202C",
        "pixel-purple": "#8B5CF6",
        "pixel-indigo": "#6366F1",
      },
    },
  },
};
