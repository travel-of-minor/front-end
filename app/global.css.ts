import { globalStyle } from "@vanilla-extract/css";
import typoThemeVar from "@/theme/typo-theme.css";
import colorThemeVar from "@/theme/color-theme.css";

globalStyle("h1 ", {
  fontSize: typoThemeVar.size.h1,
  fontWeight: typoThemeVar.weight.bold,
});

globalStyle("h2", {
  fontSize: typoThemeVar.size.h2,
  fontWeight: typoThemeVar.weight.semiBold,
});

globalStyle("h3", {
  fontSize: typoThemeVar.size.h3,
  fontWeight: typoThemeVar.weight.semiBold,
});

globalStyle("a", {
  textDecoration: "none",
  cursor: "pointer",
  color: "#000"
});

globalStyle("body", {
  background: `linear-gradient(to bottom, ${colorThemeVar.background.dark}, ${colorThemeVar.background.regular})`,
  margin: 0,
  padding: 0,
});
