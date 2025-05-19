/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2c1b11',
        secondary: '#fff9f9',
        tertiary: '#d6b16a',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-out',
      },
    },
  },
  plugins: [],
};