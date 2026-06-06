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
          950: '#0a1628',
          900: '#0f1f3d',
          800: '#1a3260',
          700: '#1e4080',
          600: '#2255a4',
          500: '#2d6bc7',
          400: '#4d87d6',
          300: '#7aaae0',
          200: '#b3ccee',
          100: '#d9e8f8',
          50:  '#eff6ff',
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
