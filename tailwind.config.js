/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedadRegular: ["Estedad-Regular", "sans-serif"],
        estedadBold: ["Estedad-Bold", "sans-serif"],
        estedadMedium: ["Estedad-Medium", "sans-serif"],
        estedadSemiBold: ["Estedad-SemiBold", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      primaryGreen: "#417F56",
      tint: {
        1: "#E5F2E9",
        2: "#CAE4D3",
        3: "#B0D7BD",
        4: "#96C9A7",
        5: "#7CBC91",
        6: "#61AE7B",
        7: "#4E9968",
      },
      shade: {
        1: "#396F4B",
        2: "#315F41",
        3: "#294F36",
        4: "#21402B",
        5: "#183020",
        6: "#102016",
        7: "#08100B",
      },
      white: "#FFFFFF",
      gray: {
        1: "#F9F9F9",
        2: "#E1E1E1",
        3: "#EDEDED",
        4: "#CBCBCB",
        5: "#ADADAD",
        6: "#757575",
        7: "#717171",
        8: "#353535",
      },
      black: "#0C0C0C",
      error: {
        DEFAULT: "#C30000",
        light: "#ED2E2E",
        extralight: "#FFF2F2",
      },
      success: {
        DEFAULT: "#00966D",
        light: "#00BA88",
        extralight: "#F3FDFA",
      },
      warnning: {
        DEFAULT: "#A9791C",
        light: "#F4B740",
        extralight: "#FFF8E1",
      },
    },
  },
  plugins: [],
};
