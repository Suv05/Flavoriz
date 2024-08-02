/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fda218",
      },
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
      backgroundImage: {
        "hero-img":
          "url('https://media.istockphoto.com/id/1436956975/photo/chef-pouring-special-sauce-on-pork-ribs-in-the-kitchen.webp?b=1&s=170667a&w=0&k=20&c=dqjedk3BRtemi6aGrR62j4_HQ7NVZIsGNyTHOedV4_o=')",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
