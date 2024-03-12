/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "def-400": "#0C5051",
        "custom-yellow-400": "#F7DDB0",
        "custom-yellow-100": "#FDFEFC",
      },
    },
    fontFamily: {
      Glorious: ["Glorious", "sans-serif"],
      Flexo: ["Flexo", "sans-serif"],
    },
    textShadow: {
      sm: "0 1px 2px var(--tw-shadow-color)",
      DEFAULT: "2px 2px 2px var(--tw-shadow-color)",
      lg: "0 8px 16px var(--tw-shadow-color)",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
