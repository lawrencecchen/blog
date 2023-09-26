const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 600
            },
            h2: {
              fontWeight: 600
            },
            li: {
              marginTop: em(4, 14),
              marginBottom: em(4, 14),
            },
            '> ul > li p': {
              marginTop: em(4, 14),
              marginBottom: em(4, 14),
            },
            '> ul > li > *:first-child': {
              marginTop: em(8, 14),
            },
            '> ul > li > *:last-child': {
              marginBottom: em(8, 14),
            },
            '> ol > li > *:first-child': {
              marginTop: em(8, 14),
            },
            '> ol > li > *:last-child': {
              marginBottom: em(8, 14),
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: em(4, 14),
              marginBottom: em(4, 14),
            },
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
