/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#448c74',
        primaryDark: '#357b5d',
        primaryLight: '#82b3a2',
        secondary: '#f7f7f7',
        gray: {
          light: '#f9f9f9',
          DEFAULT: '#gray-500',
          dark: '#gray-700',
          divider: '#e5e5e5', // For divider lines
          hover: '#f1f1f1', // Subtle hover color
        },
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        7: '1.75rem',
        10: '2.5rem',
        4: '1rem', // Frequently used gap size
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        150: '150ms', // Smooth interactions
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};
