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
        background: "#87B2CC", //#87B2CC
        accent: "#C0CED1",
        cement: "#6298BC",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6298BC 0%, #6298BC 20%)',
    },
  },
  plugins: [],
}
}

