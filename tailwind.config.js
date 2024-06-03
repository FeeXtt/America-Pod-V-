/** @type {import('tailwindcss').Config} */



export default {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements-react/dist/js/**/*.js"],
  

  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
      },
      rotate:{
        '360': '360deg',
      }
    },
    fontFamily: {
      'notable': ["Notable"],
      'mate':["Mate"]
    },
  },

  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
}