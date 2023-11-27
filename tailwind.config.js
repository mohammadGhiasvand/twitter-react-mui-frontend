/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-bird-twitter": "#1DA1F2",
        "blue-lighter": "#1D9BF0",
        "red-danger": "#ff0033",
        "gray-light-background": "#EFF3F4",
      },
    },
  },
  plugins: [],
};
