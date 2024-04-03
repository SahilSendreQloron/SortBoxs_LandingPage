/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      'hero-pattern': "url('/image/lines.svg')",
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

