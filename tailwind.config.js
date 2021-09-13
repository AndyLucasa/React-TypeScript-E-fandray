module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-orange': {
          400: '#FF742E',
        },
        
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'] ,
        'karla': ["Karla", 'sans-serif'],
        'rubik': ["Rubik", 'sans-serif'],
        'righteous' : ["Righteous",'cursive'],
        'roboto' :["Roboto", 'sans-serif' ]
      },
      gridTemplateRows: {
        // Simple 9 row grid
       '9': 'repeat(9, minmax(0, 1fr))',
       '12': 'repeat(12, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-11': 'span 11 / span 11',
      },
      gridTemplateColumns: {
        // Simple 14 column grid
       '14': 'repeat(14, minmax(0, 1fr))',

        // Complex site-specific column configuration
       'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
       }
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
