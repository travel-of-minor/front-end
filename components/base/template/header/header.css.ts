import colorThemeVar from "@/theme/color-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  position: "relative",
  top: "0",
  backgroundColor: `${colorThemeVar.background.regular}`,
  fontSize: `${typoThemeVar.size.body1}`,
});
