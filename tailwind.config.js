/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': "#222222",
        'secondary': "#666666",
        'accent': "#9891e6",
      },
      textColor: {
        'primary': "#aaaaaa",
        'secondary': "#222222",
        'accent': "#9891e6",
      },
      borderColor: {
        'primary': "#222222",
        'secondary': "#666666",
        'accent': "#9891e6",
      },
    },
  },
  plugins: [],
}

