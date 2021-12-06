module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      mint: {
        DEFAULT: "#79d2a6",
        middle: "#85adad",
        dark: "#476b6b",
        light: "#83afaf"
      },
      white: {
        DEFAULT: "#ffffff"
      },
      gray: {
        DEFAULT: "#4B5563",
        dark: "#1F2937",
        light: "#D1D5DB",
        darkest: "#283747"
      },
      orange: {
        DEFAULT: "#FF7F50"
      }
    },
    fontFamily: {
      satoshi: 'Satoshi, sans-serif',
      inter: 'Inter, sans-serif'
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
