/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F9FAFC",
          dark: "#121826",
        },
        border: {
          light: "#E5E7EB",
          dark: "#4D5562",
        },
        accent: {
          light: "#FFFFFF",
          dark: "#212936",
        },
        "custom-blue": "#3662E3",
      },
    },
  },
  plugins: [],
};
