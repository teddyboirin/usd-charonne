import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      0: '0',
      0.25: '4px',
      0.5: '6px',
      1: '8px',
      2: '12px',
      3: '16px',
      3.5: '18px',
      4: '24px',
      4.5: '28px',
      5: '32px',
      5.5: '40px',
      6: '48px',
      7: '56px',
      7.5: '60px',
      8: '64px',
      8.5: '68px',
      9: '72px',
      9.5: '75px',
      10: '80px',
      12: '96px',
      13: '110px',
      15: '120px',
      18: '140px',
      20: '160px',
      25: '200px',
      1000: '1000px',
    },
    extend: {
      backgroundImage: {},
      height: {
      },
      maxWidth: {
        container: '1320px',
      },
      colors: {
        red: '#FF0000',
        blue: '#0000B3',
        filter: 'rgba(0, 0, 0, 0.725)',
        dark: {
          '1': '#1E1E1E',
        }
      },
      backgroundColor: {
        head: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 82.06%)',
      },
      borderRadius:{
        basic: '8px',
      },
      fontSize: {
        // Titles
      '5xl': ['40px', { lineHeight: '44px', letterSpacing: '-0.03em' }],
      '4xl': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      '3xl': ['26px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      '1xl': ['22px', { lineHeight: '28px', letterSpacing: '-0.02em' }],

      // Hero
      hero: ['64px', { lineHeight: '70px', letterSpacing: '-0.03em' }],

      // Statics
      10: ['10px', { lineHeight: '16px', letterSpacing: '0' }],
      11: ['11px', { lineHeight: '16px', letterSpacing: '0' }],
      12: ['12px', { lineHeight: '16px', letterSpacing: '0' }],
      13: ['13px', { lineHeight: '15.6px', letterSpacing: '0' }],
      14: ['14px', { lineHeight: '18px', letterSpacing: '0' }],
      16: ['16px', { lineHeight: '22px', letterSpacing: '0' }],
      18: ['18px', { lineHeight: '24px', letterSpacing: '0' }],
      20: ['20px', { lineHeight: '24px' }],
      26: ['26px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      32: ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      40: ['40px', { lineHeight: '48px', letterSpacing: '0' }],
      24: ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      22: ['22px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
      64: ['64px', { lineHeight: '70px', letterSpacing: '-0.03em' }],
      }
    },
  },
  plugins: [],
}
export default config
