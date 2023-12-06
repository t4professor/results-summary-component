/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "376px",
        desktop: "1440px",
      },
      colors: {
        red: {
          default: "hsl(0, 100%, 67%)",
          light: "hsla(0, 100%, 67%,.1)",
        },
        "orangey-yellow": {
          default: "hsl(39, 100%, 56%)",
          light: "hsla(39, 100%, 56%,.1)",
        },
        "green-teal": {
          default: "hsl(166, 100%, 37%)",
          light: "hsla(166, 100%, 37%,.1)",
        },
        "cobalt-blue": {
          default: "hsl(234, 85%, 45%)",
          light: "hsla(234, 85%, 45%, .1)",
        },
        "pale-blue": "hsl(221, 100%, 96%)",
        "slate-blue-light": "hsl(252, 100%, 67%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "gray-blue-dark": "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
