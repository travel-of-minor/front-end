import colorThemeVar from "@/theme/color-theme.css";
import { globalPadding } from "@/theme/padding-theme.css";
import { style } from "@vanilla-extract/css";

export const topStyle = style({
  display: "flex",
  justifyContent: "space-between",
  height: 64,
  alignItems: "center",
  color: colorThemeVar.greys[100],
  "@media": globalPadding({mobile:{
    borderBottom: "2px solid white"
  }}),
});
