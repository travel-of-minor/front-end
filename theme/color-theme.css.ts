import { createTheme } from "@vanilla-extract/css";

const colorTheme = createTheme({
  greys: {
    100: "#FFFFFF",
    200: "#F5F5F5",
    300: "#888888",
    400: "#232323",
    500: "#000000",
  },
  primary: "#1EA7FD",
  secondary: "#FF4785",
  background: { regular: "#17212B", dark: "#0A0E14" },
  positive: "#1DB954",
  warn: "#FFD600",
});

export default colorTheme;
