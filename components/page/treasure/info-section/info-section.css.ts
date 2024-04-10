import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const sectionStyle = style({
  width: "100%",
  background: `linear-gradient(to bottom, ${colorThemeVar.greys[300]}, ${colorThemeVar.background.dark})`,
  textAlign: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `${sizeThemeVar.void[16]} ${sizeThemeVar.void[8]}`,
  boxSizing: "border-box",
});

export const imageStyle = style({
  objectFit: "contain",
});

export const imageContainerStyle = style({
  width: 450,
  height: 300,
  position: "relative",
  "@media":{
    [responsive.mobile]:{
        width: 300,
        height: 200,
    }
  }
});

export const titleStyle = style({
  width: "100%",
  margin: `${sizeThemeVar.void[12]} 0`,
  "@media": {
    [responsive.mobile]: {
      fontSize: typoThemeVar.size.h3,
    },
    [responsive.tablet]: {
      fontSize: typoThemeVar.size.h2,
    },
  },
});

export const authorStyle = style({
  width: "100%",
  fontWeight: typoThemeVar.weight.semiBold,
  "@media": {
    [responsive.mobile]: {
      fontSize: typoThemeVar.size.body2,
    },
  },
});

export const publisherStyle = style({
  width: "100%",
  fontWeight: typoThemeVar.weight.thin,
  fontSize: typoThemeVar.size.body2,
  margin: `${sizeThemeVar.void[8]} 0`,
  "@media": {
    [responsive.mobile]: {
      fontSize: typoThemeVar.size.small,
    },
  },
});
