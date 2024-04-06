import { globalStyle } from "@vanilla-extract/css";
import typoThemeVar from "@/theme/typo-theme.css";
import colorThemeVar from "@/theme/color-theme.css";
import { globalPadding } from "@/style/padding-theme.css";

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

globalStyle("p", {
  padding: 0,
  margin: 0,
});

globalStyle("a", {
  textDecoration: "none",
  cursor: "pointer",
  color: "#000",
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  height: "100vh",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
});

globalStyle("ul", {
  margin: 0,
  padding: 0,
});

globalStyle("li", {
  listStyle: "none",
});

globalStyle("main", {
  "@media": globalPadding({}),
  flexGrow: 1,
  width: "100%",
  boxSizing: "border-box",
  background: `linear-gradient(to top, ${colorThemeVar.background.dark}, ${colorThemeVar.background.regular})`,
});
