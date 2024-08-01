/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#473BF0',
      secondary: '#161C2D',
      tertiary: '#EAEAFD',
      'error-state': '#EC473C',
      neutral: '#FFFFFF'
    },
  },
  plugins: [],
};
