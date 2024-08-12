/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#473BF0",
      secondary: "#161C2D",
      tertiary: "#EAEAFD",
      "error-state": "#EC473C",
      neutral: "#FFFFFF",
      grey: "#F2F4F5",
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
  },
  plugins: [],
};
