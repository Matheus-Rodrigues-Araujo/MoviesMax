/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(124deg, rgb(3, 15, 86), rgb(0, 43, 231) 88%)",
      },
      colors: {
        cyan: "cyan",
        "blue-1": "rgb(3, 15, 86)",
        "blue-2": "rgb(0, 43, 231)",
      },
    },
  },
  plugins: [],
};
