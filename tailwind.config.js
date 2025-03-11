/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          50: '#fff9f0',
          100: '#ffe4c4',
          200: '#ffd199',
          300: '#ffbe6d',
          400: '#ffab42',
          500: '#ff9816',
          600: '#e67f00',
          700: '#b36200',
          800: '#804600',
          900: '#4d2a00',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      height: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
};