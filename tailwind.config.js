/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'hourglass': 'hourglass 3.5s ease-in-out infinite',
        'flow': 'flow 3.5s linear infinite',
        'flow-reverse': 'flow 3.5s linear infinite -1.75s',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        hourglass: {
          '0%, 30%': { transform: 'rotate(45deg)' },
          '50%, 80%': { transform: 'rotate(225deg)' },
          '100%': { transform: 'rotate(405deg)' },
        },
        flow: {
          '0%': { transform: 'rotate(45deg) translate(-3%, 50%) scaleX(1.2)' },
          '30%': { transform: 'rotate(45deg) translate(115%, 50%) scaleX(1.2)' },
          '30.001%, 50%': { transform: 'rotate(0deg) translate(-85%, -85%) scaleX(1)' },
          '80%, 100%': { transform: 'rotate(0deg) translate(0%, 0%) scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};