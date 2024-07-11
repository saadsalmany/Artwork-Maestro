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
      },
      colors: {
        'secondary-blue': '#272C6E',
        'primary-red': '#EF4344',
        'charcoal': '#343434',
        
      },
      screens: {
        // iPhone 14 Pro Max (typical range)
        'mobile': { min: '390px', max: '428px' },
        // iPad Pro (typical range)
        'tablet': { min: '768px', max: '1024px' },
        // Desktop (flexible range)
        'desktop': { min: '1024px', max: '1536px' },
      },

    },
  },
  plugins: [],
};
