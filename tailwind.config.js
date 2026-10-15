/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafbfc',
        surface: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
        },
        brand: {
          violet: '#7c3aed',
          indigo: '#4f46e5',
          blue: '#2563eb',
          sky: '#0284c7',
          cyan: '#06b6d4',
          lavender: '#8b5cf6',
          emerald: '#059669',
        },
        border: 'rgba(15, 23, 42, 0.08)',
        'border-highlight': 'rgba(99, 102, 241, 0.3)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid-light': 'linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
        'gradient-lavender-sky': 'linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 50%, #e0f2fe 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.85) 100%)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
      },
      boxShadow: {
        'soft-glow': '0 20px 40px -15px rgba(99, 102, 241, 0.12)',
        'soft-card': '0 10px 30px -10px rgba(15, 23, 42, 0.07), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
        'soft-hover': '0 20px 35px -10px rgba(99, 102, 241, 0.18), 0 0 1px 1px rgba(99, 102, 241, 0.2)',
      }
    },
  },
  plugins: [],
}
