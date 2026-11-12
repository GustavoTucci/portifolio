/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0B',
        'bg-secondary': '#121215',
        'bg-card': '#18181C',
        'bg-card-hover': '#1F1F25',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'border-accent': '#C9F31D',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA',
        'text-muted': '#52525B',
        'accent-lime': '#C9F31D',
        'accent-lime-hover': '#D8FF3E',
        'accent-dark': '#09090B',
      },
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
