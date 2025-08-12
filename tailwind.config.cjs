/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: { accent: '#0a66c2' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
