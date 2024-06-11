/** @type {import('tailwindcss').Config} */



export default {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements-react/dist/js/**/*.js"],
  

  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      height: {
        '128': '32rem',
        '256': '42rem',
      },
      maxHeight: {
        '128': '32rem',
      },
      rotate:{
        '360': '360deg',
      },
      dropShadow: {
        'slate800': '5px 5px 0 rgba(30, 41, 59, 1)',
        'slate900': '5px 5px 0 rgba(15, 23, 42, 1)',
        'element': '0 0 12px rgba(15, 23, 42, 1)',
      },
      translate:{
        '0.25': '0.06rem'
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