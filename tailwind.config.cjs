/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'c-bg': '#191c25',
        'c-bg-g': '#0D0E13',
        'c-fg': '#ffffff',

        'c-black': '#4b4e57',
        'c-red': '#fe9f7c',
        'c-green': '#92c47e',
        'c-yellow': '#d2b45f',
        'c-blue': '#a0b9d8',
        'c-magenta': '#c6aed7',
        'c-cyan': '#7dc2c7',
        'c-white': '#ffffff',
        'c-teal': '#5de4c7',
        'c-bright_pink': '#f087bd',
        'c-bright_magenta': '#d0679d',
        'c-nexxel-pink' :'#fabec0',

        'c-gray01': '#20222d',
        'c-gray02': '#272935',
        'c-gray03': '#2e313d',
        'c-gray04': '#3c3f4e',
        'c-gray05': '#494c5a',
        'c-gray06': '#6c6f82',
        'c-gray07': '#85889b',

        'c-urgent_red': '#fb4934',
        'c-urgent_yellow': '#fabd2f',
        'c-urgent_green': '#8ec07c',
        'c-urgent_blue': '#91DDF2',

        'spotify-green': '#1fdf64'
      },
    },
  },
  plugins: [],
};
