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
        'desktop': '1025px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};  