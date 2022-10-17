/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./*.html"],
  theme: {
    extend: {
      fontFamily:{
        arialSans:['Arial','sans-serif',]
      },
      spacing:{
        spacing6:"0.375rem",
        89.66:"5.6041875rem",
        9:"0.5625rem",
        15:"0.9375rem",
        23:"1.4375rem",

      },
      fontSize:{
        13:"0.8125rem"
      },
      minHeight:{
        screen80vh:'80vh'
      },
      colors:{
        brandblue:{
          light:"#1a73e8",
          DEFAULT:"#1a0dab",
          dark:"#1b66c9"
        }
      },
      opacity:{
        87:"0.87"
      },
      borderRadius:{
        "4xl":"2.5rem"
      }
      
    },
  },
  plugins: [],
}
