// here you can edit the tailwind.config.js to customize your configuration with your own design tokens

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],                          // look for any html files in root folder
  theme: {
    screens: {                                    // screen breakpoints
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {                                   // own-defined colors (you can use hsl or hexcode)
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

