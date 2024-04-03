import { responsive } from "@/style/responsive.css";
import { style } from "@vanilla-extract/css";

export const rightStyle = style({
  flexGrow: 1,
  justifyContent: "flex-end",
  display: "flex",
  gap: 24,
  alignItems: "center",
});

export const pStyle = style({
  color: "#fff",
});

export const iconStyle = style({
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  "@media": {
    [responsive.desktop]: {
      display: "none",
    },
    [responsive.tablet]: {
      display: "none",
    },
  },
});
