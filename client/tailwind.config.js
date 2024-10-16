/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7E1515",
        secondary: "#1B2950",
        tertiary: "#F8F1F1",
        neutral: "#F7E5D2",
        grey: "#F2F4F5",
        "error-state": "#EC473C",
        "dark-grey": "#5C5C5C",
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(to right, #7E1515 54%, #F34848 93%)",
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.5rem",
        h1: "3rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.75rem",
        h5: "1.25rem",
        h6: "1rem",
      },
      borderRadius: {
        DEFAULT: "8px",
        md: "1.25rem",
        lg: "1.875rem",
        full: "9999px",
      },
      screens: {
        '3xl': '1600px'
      }
    },
  },
  plugins: [],
};
