import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#17181d',
          900: '#1f2027',
          800: '#292b33',
          700: '#34363f',
          600: '#3f414b',
          500: '#404250',
          400: '#5a5c6e',
          300: '#8a8c9e',
          200: '#b0b2c2',
          100: '#d4d5df',
          50:  '#f2f2f5',
        },
        accent: {
          600: '#e6c000',
          500: '#FFD100',
          400: '#FFE040',
          300: '#FFED80',
        },
        cyan: {
          400: '#00c8ff',
          500: '#00b4e6',
          600: '#0099cc',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
