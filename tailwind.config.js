/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        column: {
          1: 'hsl(31, 77%, 52%)',
          2: 'hsl(184, 100%, 22%)',
          3: 'hsl(179, 100%, 13%)',
          general: 'hsl(0, 0%, 95%)'
        },
        project: {
          white: '#f2f2f2'
        }
      },
      fontSize: {
        'column-small-content': '15px',
        'column-title': '40px',
        'column-title-md': '44px'
      },
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
        'big-shoulder': ['Big Shoulders Display', 'sans-serif']
      }
    }
  },
  plugins: []
}
