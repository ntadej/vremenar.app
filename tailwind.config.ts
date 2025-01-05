import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import opentype from 'tailwindcss-opentype'
import { amber, zinc } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/app/**/*.{tsx,mdx}',
    './src/components/**/*.{tsx,mdx}',
    './node_modules/@ntadej/style/components/**/*.{tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: amber,
        special1: '#FFDB4F',
        special2: '#FF9500',
        brand: {
          primary: amber[400],
          secondary: amber[500],
        },
        prose: {
          light: zinc[700],
          dark: zinc[300],
        },
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    typography,
    // @ts-expect-error Old library
    opentype,
  ],
  darkMode: 'class',
} satisfies Config
