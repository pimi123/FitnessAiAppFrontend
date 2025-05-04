/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryText: "#FFFFFFF",
        cardBackground: "#1F3D5C", // Custom secondary color
        baseButton: "#07A29D", // Custom accent color
        screenBackground: "#0A1F3C", // Background color
        dark: "#0A1F3C", // Dark theme color
      },
    },
  },
  plugins: [],
};
