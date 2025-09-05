/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'violent-shake': 'violent-shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        'violent-shake': {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '10%': { transform: 'translateX(-10px) rotate(-2deg)' },
          '20%': { transform: 'translateX(10px) rotate(2deg)' },
          '30%': { transform: 'translateX(-8px) rotate(-1deg)' },
          '40%': { transform: 'translateX(8px) rotate(1deg)' },
          '50%': { transform: 'translateX(-6px) rotate(-1.5deg)' },
          '60%': { transform: 'translateX(6px) rotate(1.5deg)' },
          '70%': { transform: 'translateX(-4px) rotate(-0.5deg)' },
          '80%': { transform: 'translateX(4px) rotate(0.5deg)' },
          '90%': { transform: 'translateX(-2px) rotate(-0.25deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
