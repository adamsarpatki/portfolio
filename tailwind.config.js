const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Montserrat'],
      'heading': ['Montserrat'],
      'body': ['Raleway'],
      'subheading': ['Raleway']
    },
    fontSize: {
      'footer': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'h1': '3.051875rem',
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },

    extend: {
      screens: {
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },

      spacing: {
        '184': '11.5rem',
        '54': '3.375rem',
        '162': '10.125rem',
        '296': '18.5rem',
        '10%': '10%',
        '696': '43.5rem',
      },

      dropShadow: {
        'navbar': '0 4px 45px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
