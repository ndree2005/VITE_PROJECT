/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // folder app kamu
    './components/**/*.{js,ts,jsx,tsx}', // kalau ada
    './pages/**/*.{js,ts,jsx,tsx}', // optional (kalau masih pakai pages)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}