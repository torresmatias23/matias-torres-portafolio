/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 24px 80px rgba(5, 15, 32, 0.35)',
        neon: '0 0 40px rgba(45, 212, 191, 0.22)',
      },
      colors: {
        glass: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
