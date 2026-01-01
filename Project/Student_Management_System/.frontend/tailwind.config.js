/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        secondary: '#1a1a1a',
        accent: '#00d4ff',
        danger: '#ff4444',
      },
    },
  },
  plugins: [],
}
