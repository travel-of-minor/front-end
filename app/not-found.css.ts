import { fadeInUpStyle } from "@/style/animation/fade-in-up.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  color: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

export const errorCodeStyle = style({
  fontSize: typoThemeVar.size.ex1,
  rotate: "10deg",
});

export const divStyle = style({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const subTextStyle = style([
  fadeInUpStyle,
  {
    fontSize: typoThemeVar.size.body1,
    fontWeight: typoThemeVar.weight.thin,
  },
]);
