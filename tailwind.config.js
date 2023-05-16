/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        garamond: "Cormorant Garamond, serif;",
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        normal: 400,
        light: 300,
        extralight: 200,
      },
      boxShadow: {
        shadowHeader: "0px 5px 20px -5px rgba(0,0,0,0.05)",
        actionCard:
          "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);",
        insetShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        display: [
          "4.25rem",
          {
            // 68px
            letterSpacing: "-0.078rem", // -1.25px
            lineHeight: "5.525rem", // 130%
          },
        ],
        headline1: [
          "3.5625rem",
          {
            // 57px
            letterSpacing: "0rem", // 0%
            lineHeight: "4.631rem", // 130%
          },
        ],
        headline2: [
          "2.9375rem",
          {
            // 47px
            letterSpacing: "0rem", // 0%
            lineHeight: "3.819rem", // 130%
          },
        ],
        headline3: [
          "2.5rem",
          {
            // 40px
            letterSpacing: "0rem", // 0%
            lineHeight: "3.25rem", // 130%
          },
        ],
        headline4: [
          "2.0625rem",
          {
            // 33px
            letterSpacing: "0rem", // 0%
            lineHeight: "2.681rem", // 130%
          },
        ],
        headline5: [
          "1.6875rem",
          {
            // 27px
            letterSpacing: "0rem", // 0%
            lineHeight: "2.363rem", // 140%
          },
        ],
        headline6: [
          "1.375rem",
          {
            // 22px
            letterSpacing: "0rem", // 0%
            lineHeight: "1.925rem", // 140%
          },
        ],
        lg: [
          "1.1875rem",
          {
            // 19px
            letterSpacing: "0rem", // 0%
            lineHeight: "1.78125rem", // 150%
          },
        ],
        base: [
          "1rem",
          {
            // 16px
            letterSpacing: "0rem", // 0%
            lineHeight: "1.5rem", // 150%
          },
        ],
        sm: [
          "0.875rem",
          {
            // 14px
            letterSpacing: "0rem", // 0%
            lineHeight: "1.3125rem", // 150%
          },
        ],
        xs: [
          "0.8125rem",
          {
            // 13px
            letterSpacing: "0rem", // 0%
            lineHeight: "1.21875rem", // 150%
          },
        ],
        xxs: [
          "0.75rem",
          {
            // 12px
            letterSpacing: "0rem", // 0%
            lineHeight: "0.75rem", // 100%
          },
        ],
      },
      colors: {
        primary: "#158aff",
        white: "#fff",
        black: "#292b2c",
        grey: "#fefefe",
        darkGrey: "#343A40",
        lightGrey: "#ebf1f4",
      },
    },
  },
  plugins: [],
};
