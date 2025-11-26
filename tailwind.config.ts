import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        accent: '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'InterVariable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

