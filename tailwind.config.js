/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./index.html",
  flowbite.content(),],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
      },
    },
    fontFamily: {
      'notable': ["Notable"],
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}