/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          glow: 'rgba(239, 68, 68, 0.35)',
        },
        dark: {
          base: '#08080c',
          surface: '#0f0f15',
          card: '#14141d',
          cardHover: '#1a1a26',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
          muted: '#8e8ea0',
        },
        light: {
          base: '#f8fafc',
          surface: '#ffffff',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          borderSubtle: '#f1f5f9',
          muted: '#64748b',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(239, 68, 68, 0.3)',
        'glow-red-sm': '0 0 15px -3px rgba(239, 68, 68, 0.25)',
        'card-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
