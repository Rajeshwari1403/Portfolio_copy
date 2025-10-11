/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      // Colors Used
      colors: {
        primary: "#071C34",
        secondary: "#144361",
        background: "#87B2CC",
        accent: "#C0CED1",
        cement: "#6298BC",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #144361 0%, #6298BC 100%)',
    },
  },
  plugins: [],
}
}

