/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'media'
}
