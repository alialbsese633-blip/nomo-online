/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12091F",
        violet: "#5B21B6",
        blue: "#2451C4",
        yellow: "#F5C518",
        paper: "#F7F4FB",
        muted: "#6E6485",
        hairline: "#DCD4EE",
      },
    },
  },
  plugins: [],
};
