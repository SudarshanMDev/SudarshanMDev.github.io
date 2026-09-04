/** @type {import('tailwindcss').Config} */
export default {
  // Dark mode is toggled by adding/removing the `dark` class on <html>.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ─────────────────────────────────────────────────────────────
      // ACCENT COLOR — change the whole site's accent here.
      // Replace this emerald scale with any Tailwind color scale
      // (e.g. copy the values of `blue`, `indigo`, `sky`, `amber`…).
      // Everything in the UI references `accent-*`.
      // ─────────────────────────────────────────────────────────────
      colors: {
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
