import { responsive } from "@/theme/responsive.css";
import { style } from "@vanilla-extract/css";

export const leftStyle = style({
  display: "flex",
  alignItems: "center",
  gap: 24,
});

export const pStyle = style({
  "@media": {
    [responsive.mobile]: {
      display: "none",
    },
  },
  color: "#fff",
});
