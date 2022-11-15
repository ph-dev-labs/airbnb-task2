/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xlx": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xlx: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgx: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdx: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smx: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xsx: { max: "480px" },
      },
      fontSize: {
        "6xl": "3.5rem",
      },
      zIndex: {
        1000: 1000,
      },
      colors: {
        primary: "#a02279",
        bordercolor: "#a3a3a3",
        input: "rgba(247, 247, 247, 0.1)",
        placeholdertext: "#b8b8b8",
        token: "#f7f7f7",
        collection: "#d7d7d7",
        collection_bg:
          "linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%)",
        tinytext: "#434343",
        footer: "#1d1d1e",
        secondary: "linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%)",
      },
    },
  },
  plugins: [],
};
