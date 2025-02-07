/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#9a92d9",
        golden: "#8f8064",
        darkPurple: '#800080'
      },
      fontFamily: {
        taviraj: ["var(--taviraj-regular)", "serif"], // Use the custom CSS variable for Taviraj-Regular
        tavirajItalic: ["var(--taviraj-italic)", "serif"], // For Taviraj-Italic
        workSans: ["var(--worksans-variableFont)", "sans-serif"], // For Work Sans
      },
      fontWeight: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
