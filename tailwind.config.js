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
      'h2': '2.44125rem',
      'display': '4.768125rem',
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
        '536': '33.5rem',
        '100': '6.25rem',
        '456': '28.5rem',
        '984': '61.5rem',
        '245': '15.3125rem',
        '409': '25.5625rem',
        '344.5': '21.53125rem',
        '82': '5.125rem',
        '68': '4.25rem',
        '720': '45rem',
        '333': '20.8125rem',
        '124': '7.75rem',
        '90': '5.625rem',
      },

      dropShadow: {
        'navbar': '0 4px 45px rgba(0, 0, 0, 0.25)',
        'card': '4px 4px 24px rgba(0, 0, 0, 0.22)',
      },

      backgroundImage: theme => ({
        'rulebook-card-desktop': "url('/src/assets/dnd-rulebook-card-background.png')",
        'rulebook-card-tablet': "url('/src/assets/dnd-rulebook-card-background-tablet.png')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
