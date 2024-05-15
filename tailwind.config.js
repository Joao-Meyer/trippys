/** @type {import('tailwindcss').Config} */

const colors = require('./src/presentation/style/palette/colors.json');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.tsx'],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('scrollbar', '&::-webkit-scrollbar');
    }),
    plugin(({ addBase }) => {
      addBase({
        '*': {
          scrollbarColor: '#00000063 transparent',
          scrollbarWidth: 'thin'
        },
        '*::-webkit-scrollbar': {
          height: '6px',
          width: '6px'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#00000063',
          borderRadius: '10px'
        },
        '*::-webkit-scrollbar-track-piece': {
          backgroundColor: 'transparent',
          borderRadius: '10px'
        }
      });
    })
  ],
  theme: {
    colors,
    extend: {
      boxShadow: {
        base: '0px 0px 7px 2px rgba(0,0,0,0.2)'
      },
      keyframes: {
        floatUpDown: {
          '0%, 100%': { top: 'calc(0% + 4px)' },
          '65%': { top: 'calc((100% - 48px) - 4px)' }
        }
      },
      animation: {
        'float-up-down': 'floatUpDown 1.5s ease-in-out infinite'
      }
    },
    fontFamily: {
      superCool: ['Super Cool'],
      orbitron: ['Orbitron']
    },
    screens: {
      desktop: '1281px',
      laptop: '1024px',
      tablet: '768px'
    }
  }
};
