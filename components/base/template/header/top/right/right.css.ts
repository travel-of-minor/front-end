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
  "@media": {
    [responsive.mobile]: {
      display: "none",
    },
  },
});

export const iconStyle = style({
  display: "none !important",
  "@media": {
    [responsive.mobile]: {
      display: "flex !important",
    }
  },
});
