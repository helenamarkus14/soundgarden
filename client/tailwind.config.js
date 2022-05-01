module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'red': '#CA054D',
        'turquoise': '#45F0DF',
        'yellow': '#F3CA40',
        'black': '#33312E',
      },
      backgroundImage: {
        'crowd': "url('/public/images/crowd.jpg')",
        'logo': "url('/public/images/SGLogo.jpg')",
      },
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
      heading: ['Raleway', 'sans-serif'],
    }
  },
  plugins: [],
}
