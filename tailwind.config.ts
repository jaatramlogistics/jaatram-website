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
        navy: {
          DEFAULT: '#1A2B5E',
          dark: '#101d45',
          light: '#243577',
        },
        gold: {
          DEFAULT: '#F5A623',
          light: '#FBBF50',
          dark: '#D48A10',
        },
        'light-blue': '#EEF2FB',
        'mid-blue': '#C5CEEC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A2B5E 0%, #243577 60%, #1a3a7e 100%)',
      },
    },
  },
  plugins: [],
}

export default config
