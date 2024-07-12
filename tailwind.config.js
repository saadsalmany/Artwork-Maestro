/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      colors: {
        'secondary-blue': '#272C6E',
        'primary-red': '#EF4344',
        'charcoal': '#343434',
      },
      screens: {
        'mobile': '0px',
        'tablet': '640px',
        'desktop': '1026px',
      }
    },
  },
  plugins: [],
};