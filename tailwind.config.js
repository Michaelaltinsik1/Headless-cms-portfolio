/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      tablet: '769px',
      desktop: '1201px',
      xldesktop: '1929px',
    },
    colors: {
      primaryBG: '#d5e0b5',
      navBG: '#f8f4c4',
      cardBG: '#a5c3a7',
      extraBG_1: '#6d8b89',
      extraBG_2: '#47667b',
      darkText: '#212121',
      lightText: '#FAFAFA',
    },
  },
  plugins: [],
};
