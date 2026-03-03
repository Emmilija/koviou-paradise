/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      // 🌊 Modern Coastal Color System
      colors: {
        // Base
        white: "#FFFFFF",
        light: "#F4F1EC",       // Soft Sand Background
        stone: "#DAD6CF",       // Soft Neutral
        dark: "#1F2933",        // Modern Charcoal

        // Brand Colors
        primary: "#1E3A5F",     // Deep Aegean Blue
        sunset: "#E8A75D",      // Sunset Gold-Orange
        bronze: "#B98A55",      // Luxury Bronze Accent

        // Utility
        footer: "#1E3A5F",      // Dark footer (same as primary for consistency)
      },

      // Fonts
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },

      // Spacing
      spacing: {
        128: "32rem",
        144: "36rem",
      },

      // Border Radius
      borderRadius: {
        xl: "1rem",
      },

      // Box Shadows
      boxShadow: {
        "lg-soft": "0 10px 30px rgba(0, 0, 0, 0.08)",
      },

      // Optional modern gradient background
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to top, rgba(30,58,95,0.75), rgba(30,58,95,0.2))",
      },
    },
  },
  plugins: [],
};