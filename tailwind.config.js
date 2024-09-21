import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import kuiPlugin from '@kamona-ui/vue/tw-plugin'

export default {
  darkMode: 'class',
  content: [
    './index.html', 
    './src/**/*.{js,jsx}',
    './node_modules/@kamona-ui/vue/src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        't-lg':
          'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [forms, kuiPlugin],
}
