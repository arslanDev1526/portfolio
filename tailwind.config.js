

const flowbitePlugin = require('flowbite/plugin');
const scrollBarPlugin = require('tailwind-scrollbar');

module.exports = {
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {}, 
  },

  plugins: [
    flowbitePlugin, 
    scrollBarPlugin
  ],
};


