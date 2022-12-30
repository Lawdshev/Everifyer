module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   fontFamily: {
      'workSans': ['"Work Sans"', 'sans-serif'],
      'openSans' : ['"Open Sans"'],
      'inter':['Inter'],
      'poppins':['Poppins'],
      'roboto':['Roboto']
    },
    extend: {
      screens: {
        '3xl': '1800px',
        '4xl': '2200px',
        '5xl': '2800px',
      }
  },
  },
  plugins: [],
}