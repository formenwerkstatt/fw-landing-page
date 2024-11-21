/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "375px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },

    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#F5F5F5",
        black: "#121723",
        dark: "#1D2430",
        primary: "#0052a5",
        yellow: "#FBB040",
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },

      fontSize: {
        xs: "0.875rem",
        sm: "1rem",
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.375rem",
        "2xl": "1.75rem",
        "3xl": "2.125rem",
        "4xl": "2.5rem",
        "5xl": "3.125rem",
        "6xl": "3.875rem",
        "7xl": "4.875rem",
        "8xl": "6.125rem",
        "9xl": "7.625rem",
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },

      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },

      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "100%": { transform: "translateY(100%)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "stagger-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "slide-in-left": "slide-in-left 0.7s ease-out",
        "slide-in-right": "slide-in-right 0.7s ease-out",
        "slide-in-top": "slide-in-top 0.7s ease-out",
        "fade-in": "fade-in 0.5s ease-in",
        "fade-in-delayed": "fade-in 0.5s ease-in 0.3s both",
        "pop-in": "pop-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "stagger-in": "stagger-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
