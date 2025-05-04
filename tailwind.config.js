// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,css,js,jsx,ts,tsx}"], // Make sure this is correct
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1rem)' },
        },
      },
      animation: {
        'bounce-delay-1': 'bounce 1s infinite 0.1s',
        'bounce-delay-2': 'bounce 1s infinite 0.2s',
        'bounce-delay-3': 'bounce 1s infinite 0.3s',
      },
      colors: {
        'portfolio-blue-dark': '#0a192f',
        'portfolio-blue-mid': '#112240',
        'portfolio-accent': '#64ffda',
        'portfolio-gray-mid': '#8892b0',
      }
    },
  },
  plugins: [],
};
