/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'0px', 'max':'768px'},
        'xl': {'min':'1500px', 'max':''}
      },

      colors: {
        'dark-navy': '#161819',
        'lighter-navy': '#181A1B',
        'dark-grey': '#252728',
        'medium-grey': '#989898',
        'accent-red': '#E40641',
        'light-grey': '#EAECEF'
      },
    
    },

      
  },
  plugins: [],
}
