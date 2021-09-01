module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hosting': "url('/assets/host.jpg')"
      }),
      backgroundPosition: {
        '33-center': '33% center'
      },
      gridTemplateColumns: {
        'one': '1fr',
        '11': '1fr 1fr',
        '121': '1fr 2fr 1fr',
        '80p': 'repeat(4, 80%)'
      },
      gridTemplateRows: {
        'one': '1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
