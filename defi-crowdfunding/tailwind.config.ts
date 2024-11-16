const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { addBase, theme } = require("tailwindcss");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sky: {
          300: "#7dd3fc",
        },
        pink: {
          300: "#f9a8d4",
        },
        green: {
          300: "#86efac",
        },
        yellow: {
          300: "#fde047",
        },
        red: {
          300: "#f87171",
        },
        purple: {
          300: "#c4b5fd",
        },
        blue: {
          300: "#60a5fa",
        },
        indigo: {
          300: "#a5b4fc",
        },
        violet: {
          300: "#d8b4fe",
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
