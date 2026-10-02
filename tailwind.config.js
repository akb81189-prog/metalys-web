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
        silver: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        metallic: {
          light: '#f4f6f8',
          chrome: '#e8edf2',
          sheen: '#d6dee6',
          steel: '#5a6878',
          dark: '#1e2631',
        },
        industrial: {
          orange: '#e65100',
          amber: '#f57c00',
          blue: '#0284c7',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        industrial: ['Barlow', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Barlow', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif']
      },
      boxShadow: {
        'silver': '0 4px 20px -2px rgba(148, 163, 184, 0.25)',
        'silver-lg': '0 10px 30px -4px rgba(100, 116, 139, 0.2)',
        'metallic': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 4px 15px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
