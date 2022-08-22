module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'matte-gray': '#55B6E',
      'dark-green': '#89B0AE',
      'light-green': '#BEE3DB',
      'off-white': '#FAF9F9',
      'beige': '#FFD6BA',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};