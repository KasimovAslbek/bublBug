/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        "sm" :	"640px"	,
        "md" :	"768px"	,
        "lg" : "1024px",
        "xl" :	"1280px",
        "2xl" :	"1536px",
        '1.5xl': '1440px"'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/banner-2.jpg')",
        'hero-mobil': "url('/src/img/banner-mb.jpg')"
      },
      fontFamily: {
        "roboto": "Roboto"
      },
    },
  },
  plugins: [],
}

