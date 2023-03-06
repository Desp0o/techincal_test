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

      backgroundImage: {
        'gradient-Active': 'linear-gradient(180deg, #2C2F30 0%, rgba(44, 47, 48, 0.37) 100%)',
        'gradient-deactive': 'linear-gradient(180deg, #1E2021 0%, rgba(30, 32, 33, 0.37) 100%)'
      },
    
    },

      
  },
  plugins: [],
}
