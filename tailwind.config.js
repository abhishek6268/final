/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        locationtext:["Lugrasimo" ,"serif"],
        text:["Playfair Display"]
      },
      colors:{
        primary:"#842925",
        secondary:"#fff1d4",
        tertiary:"#F15C27"
      },
      screens:{
        'mobile':{'max':'1079px'}, // 0px to 1080px
        'web':{'min':'1080px', 'max':'3000px'}, // 1080px to 1440p
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}