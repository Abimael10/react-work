module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        concert: ['Concert One'],
        roboto: ['Roboto'],
        mont: ['Montserrat']
      },
      backgroundImage: theme => ({

        'wave': "url('./images/wave.svg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
