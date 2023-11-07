/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#002030',
          800: '#01434f',
        },
      },
      fontFamily: {
        'body': ['Nunito'],
      },
    },
  },
  plugins: [],
}

