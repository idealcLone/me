/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0a0f29',
        secondary: '#f2f2f2',
        gradientEnd: '#050a14',
      },
      screens: {
        '3xl': { max: '1792px' },
        '2xl': { max: '1536px' },
        xl: { max: '1280px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to bottom, ${theme('colors.primary')}, ${theme('colors.gradientEnd')})`,
        'gradient-secondary': `linear-gradient(to top, ${theme('colors.primary')}, ${theme('colors.gradientEnd')})`,
      }),
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
