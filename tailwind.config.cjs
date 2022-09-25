/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:"5rem"
    },
    extend: {},
    fontFamily: {
      'sf-pro-display': ['SFPRODISPLAYREGULAR',
        'SFPRODISPLAYMEDIUM', 'SFPRODISPLAYBLACKITALIC',
        'SFPRODISPLAYBOLD', 'SFPRODISPLAYHEAVYITALIC',
        'SFPRODISPLAYLIGHTITALIC', 'SFPRODISPLAYSEMIBOLDITALIC', 'SFPRODISPLAYTHINITALIC',
        'SFPRODISPLAYULTRALIGHTITALIC'],
    },
  },
  plugins: [],
  corePlugins: {
  tableLayout: true,
  }
}
