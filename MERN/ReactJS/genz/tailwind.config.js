/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      neon: {
        pink: '#FF4FCE',
        green: '#39FF14',
        blue: '#00F0FF',
        yellow: '#F9FF00',
      },
    },
    fontFamily: {
      genz: ['"Archivo Black"', 'system-ui', 'sans-serif'],
    },
  },
};
export const darkMode = 'class';
export const plugins = [];
