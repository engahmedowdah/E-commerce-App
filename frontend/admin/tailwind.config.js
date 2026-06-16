/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'on-primary': '#ffffff',
        'primary-container': '#e0e7ff',
        'on-primary-container': '#312e81',
        'primary-fixed': '#e0e7ff',
        'on-primary-fixed': '#312e81',
        'primary-fixed-dim': '#c7d2fe',

        secondary: '#0ea5e9',
        'secondary-container': '#bae6fd',
        'on-secondary-container': '#082f49',
        'secondary-fixed': '#e0f2fe',
        'on-secondary-fixed': '#082f49',

        tertiary: '#8b5cf6',
        'tertiary-container': '#ede9fe',
        'on-tertiary-container': '#4c1d95',
        'tertiary-fixed': '#ede9fe',
        'tertiary-fixed-dim': '#ddd6fe',

        surface: '#ffffff',
        'on-surface': '#0f172a',
        'on-surface-variant': '#64748b',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f8fafc',
        'surface-container': '#f1f5f9',
        'surface-container-high': '#f1f5f9',
        'surface-container-highest': '#e2e8f0',

        outline: '#94a3b8',
        'outline-variant': '#cbd5e1',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
