/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./index.html",],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
    fontFamily: {
      'notable': ["Notable"],
    },
  },
  plugins: [],
}