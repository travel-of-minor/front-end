import { globalPadding } from "@/style/padding-theme.css";
import { style } from "@vanilla-extract/css";

export const topStyle = style({
  width: "100%",
  height: 66,
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "flex-end",
  "@media": globalPadding({}),
});
