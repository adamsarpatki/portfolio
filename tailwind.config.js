const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'xsm': '375px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'desktop': '1440px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

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
      'h3': '1.953125rem',
      'h4': '1.5625rem',
      'display': '4.768125rem',
      'display-smaller': '3.815rem',
      '38': '2.375rem',
      '12.8': '0.8rem',

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
        '510': '31.875rem',
        '608': '38rem',
        '276': '17.25rem',
        '496': '31rem',
        '470': '29.375rem',
        '27': '1.6875rem',
        '770': '48.125rem',
        '56': '3.5rem',
        '177': '11.0625rem',
        '72': '4.5rem',
        '166': '10.375rem',
        '382': '23.875rem',
        '288': '18rem',
        '266': '16.625rem',
        '400': '25rem',
        '343': '21.4375rem',
      },

      maxWidth: {
        '1184': '74rem',
      },

      lineHeight: {
        '48': '3rem',
       },

      dropShadow: {
        'navbar': '0 4px 45px rgba(0, 0, 0, 0.25)',
        'card': '4px 4px 24px rgba(0, 0, 0, 0.22)',
      },

      backgroundImage: theme => ({
        'rulebook-card-desktop': "url('/src/assets/study-card-desktop@2x.png')",
        'rulebook-card-tablet': "url('/src/assets/study-card-tablet@2x.png')",
        'rulebook-card-mobile': "url('/src/assets/study-card-mobile@2x.png')",
        'rulebook-card-small': "url('/src/assets/study-card-small@2x.png')",
       })
    },
  },
  variants: {
    extend: {

      stroke: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
