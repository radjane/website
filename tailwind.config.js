// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    // div 
    container: {
      center: true,
    },
    keyframes: {
      translate: {
        '0%': {
          transform: 'translateY(50%)',
        },
        '100%': {
          transform: 'translateY(0)',
        },
      },
      opacity: {
        '60%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    animation: {
      //combining the two together like this says https://stackoverflow.com/questions/26986129/play-multiple-css-animations-at-the-same-time doesnt work, in the browser the keyframes disappear
      issue: 'translate 1s ease-in-out infinite, opacity 1s linear infinite',
      //works
      translate: 'translate 1s ease-in-out infinite',
      opacity: 'opacity 1.5s linear infinite',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
