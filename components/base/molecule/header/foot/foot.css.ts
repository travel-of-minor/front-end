import colorThemeVar from "@/theme/color-theme.css";
import { globalPadding } from "@/theme/padding-theme.css";
import { responsive } from "@/theme/responsive.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const footStyle = style({
  height: 48,
  fontWeight: typoThemeVar.weight.thin,
  display: "none",
  alignItems: "center",
  gap: 24,
  backgroundColor: colorThemeVar.greys[100],
  borderRadius: "20% 20% 0 0",
  "@media": globalPadding({
    tablet: { display: "flex" },
    desktop: { display: "flex" },
  }),
  
});

export const anchorStyle = style({
  width: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
