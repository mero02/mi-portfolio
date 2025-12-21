/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema oscuro
        dark: {
          primary: '#000000',
          secondary: '#111111',
          accent: '#FF0000',
          text: '#FFFFFF',
          'text-secondary': '#CCCCCC',
        },
        // Tema claro
        light: {
          primary: '#F8F9FA',
          secondary: '#FFFFFF',
          accent: '#007BFF',
          text: '#212529',
          'text-secondary': '#6C757D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}