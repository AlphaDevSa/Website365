export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Blue 600
          dark: '#1D4ED8', // Blue 700
          light: '#60A5FA', // Blue 400
        },
        secondary: {
          DEFAULT: '#1E293B', // Slate 800
          dark: '#0F172A', // Slate 900
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
