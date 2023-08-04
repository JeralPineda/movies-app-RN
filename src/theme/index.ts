import {normalize} from "../utils";

export const colors = {
  primary: {
    100: "#FFE1E6",
    200: "#D38390",
    300: "#CE6072",
    400: "#C53B52",
    500: "#A41F35",
    600: "#9F0A23",
    700: "#830318",
    800: "#640313",
    900: "#380009",
  },

  secondary: {
    500: "rgba(52, 54, 66, 1)",
  },

  white: {
    neutral: "#ffffff",
    light: "#ffffff",
  },

  neutral: {
    50: "hsla(0, 0%, 99%, 1)",
    100: "hsla(0, 0%, 97%, 1)",
    200: "#dedede",
    300: "#d0d0d0",
    400: "#c1c1c1",
    500: "#b2b2b2",
    600: "#a3a3a3",
    700: "#959595",
    800: "#777777",
    900: "#5e5e5e",
    1000: "#3e3e3e",
    1100: "#2f2f2f",
  },

  success: {
    50: "#E4F3E5",
    500: "#156717",
  },

  error: {
    50: "#fbefeb",
    500: "#d92626",
  },
};

export const fontSizes = {
  xxs: normalize(10),
  xs: normalize(12),
  sm: normalize(14),
  md: normalize(16),
  lg: normalize(20),
  xl: normalize(24),
  xxl: normalize(28),
  xxxl: normalize(32),
};
