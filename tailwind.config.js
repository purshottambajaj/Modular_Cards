/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {   
         colors: {
      'custom-add': '#41474E',
      'custom-dark': '#1F2123',
    },
},
  },
  plugins: [],
}
