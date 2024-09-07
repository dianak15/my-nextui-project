
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|navbar|ripple).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Primary color
        secondary: '#F59E0B', // Secondary color
        accent: '#FDE68A', // Accent color
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'sm': '0.875rem', // Default size for small text
        'base': '1rem',   // Default size for base text
        'md': '1rem',     // Default size for medium text
        'lg': '1.125rem', // Default size for large text
        'xl': '1.25rem',  // Default size for extra large text
      },
    },
  },
  plugins: [nextui()], 
};