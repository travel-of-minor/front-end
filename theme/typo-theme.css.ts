import { createTheme } from "@vanilla-extract/css";

const [typoThemeClass, typoThemeVar] = createTheme({
  weight: { thin: "200", regular: "400", semiBold: "600", bold: "800" },
  size: {
    small: "12px",
    body2: "14px",
    body1: "16px",
    h3: "24px",
    h2: "28px",
    h1: "32px",
    ex2: "48px",
    ex1: "64px",
  },
});

export { typoThemeClass };
export default typoThemeVar;
