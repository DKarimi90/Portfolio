/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        360: '360deg'
      },
      backgroundImage: {
        hero: 'url("./images/1.jpg")', 
      },
            keyframes : {
        navbar: {
          '0%' : {top: '-10vh', left: '0',},
          '100%' : {top: '0', left: '0',}
        },
        project: {
          '0%' : {top: '0', left: '-100%',},
          '100%' : {top: '0', left: '0',}
        },
        about: {
          '0%' : {right: '-100%'},
          '100%' : {right: '0'}
        },
      }, 
      animation: {navbar: 'navbar 5s ease-in-out', project: 'project 7s ease-in-out', about: 'about 5s ease-in-out'}
    },
  },
  plugins: [],
}