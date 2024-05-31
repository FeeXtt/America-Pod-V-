/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
      }
    },
    fontFamily: {
      'notable': ["Notable"],
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}