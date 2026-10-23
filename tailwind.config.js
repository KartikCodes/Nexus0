/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: '#f4f6fa',
          card: '#ffffff',
          border: '#e2e8f0',
          navy: '#0b132b',
          'navy-light': '#1c2541',
          'navy-muted': '#64748b',
          primary: '#2563eb',
          'primary-hover': '#1d4ed8',
          'primary-subtle': '#eff6ff',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#ef4444',
          // Dark theme accents for Landing Page
          dark: '#070b19',
          'dark-card': '#0e1629',
          'dark-card-hover': '#141e36',
          'dark-border': '#1e293b',
          'dark-border-highlight': '#334155'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(37, 99, 235, 0.35)',
        'glow-cyan': '0 0 35px -8px rgba(6, 182, 212, 0.3)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
}
