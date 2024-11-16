const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
    // This plugin adds each Tailwind color as a global CSS variable, e.g., var(--sky-300).
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable.
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));

  // Generate CSS variables for each color key
  let newVars = Object.fromEntries(
    Object.entries(allColors).flatMap(([key, val]) => {
      // Handle cases for individual color values or nested shades
      if (typeof val === "string" || typeof val === "number") {
        return [[`--${key}`, val]]; // Single color (e.g., `#ff0000`)
      }
      
      // Handle nested shades like `blue: { 100: "#a5b4fc", 200: "#60a5fa" }`
      if (typeof val === "object") {
        return Object.entries(val).map(([shade, color]) => {
          return [`--${key}-${shade}`, color]; // Generate variable for each shade
        });
      }

      return [];
    })
  );

  // Add the variables to the root CSS scope
  addBase({
    ":root": newVars,
  });
}
