/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
    },
    fontSize: {
      s: '0.4rem',
      ss: '0.5rem',
      sss: '0.6rem',
      ssss: '0.7rem',
      small: '13px',
    }

  },
  plugins: [],
}
