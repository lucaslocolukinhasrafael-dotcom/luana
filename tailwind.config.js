import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "primary": "#4A0E0E",
          "primary-container": "#4A0E0E", 
          "on-primary-container": "#F5F1E9", 
          "secondary": "#A68966", 
          "surface": "#C4B299", 
          "on-surface": "#2D0909", 
          "surface-container": "#F5F1E9", 
          "surface-container-low": "#EFE9DE",
          "surface-container-high": "#F5F1E9",
          "surface-container-highest": "#E8DFD0",
          "outline": "#8C7356",
          "outline-variant": "rgba(140, 115, 86, 0.2)"
      },
      fontFamily: {
          "headline": ["Noto Serif", "serif"],
          "body": ["Manrope", "sans-serif"],
          "label": ["Manrope", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "1rem", "full": "9999px"},
    },
  },
  plugins: [forms, containerQueries],
}
