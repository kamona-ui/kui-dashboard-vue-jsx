import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        't-lg':
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        dark: {
          bg: '#151823',
          'eval-1': '#222738',
          'eval-2': '#2A2F42',
          'eval-3': '#2C3142',
        },
      },
    },
  },
  plugins: [forms],
}
