import { createTheme } from "@vanilla-extract/css";

export const typoTheme = createTheme({
  weight: { thin: "200", regular: "400", semiBold: "600", bold: "800" },
  size: {
    small: "12px",
    body2: "14px",
    body1: "16px",
    h3: "24px",
    h2: "28px",
    h1: "32px",
  },
});

export default typoTheme