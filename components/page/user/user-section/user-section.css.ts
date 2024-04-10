import { fadeInUpStyle } from "@/style/animation/fade-in-up.css";
import { limitTextLines } from "@/style/limit-text-lines.css";
import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const userSectionStyle = style({
  color: "#fff",
  padding: `${sizeThemeVar.void[64]} 0`,
  width: 280,
  boxSizing: "border-box",
  "@media":{
    [responsive.mobile]:{
      padding: `${sizeThemeVar.void[64]} ${sizeThemeVar.void[8]}`,
      width: "100%",
    },
    [responsive.tablet]:{
      width: 240,
    }
  }
});

export const nameStyle = style({
  width: "100%",
  margin: 0,
  padding: `${sizeThemeVar.void[12]} 0`,
  marginBottom: sizeThemeVar.void[12],
  borderBottom: `1px solid ${colorThemeVar.greys[300]}`,
  boxSizing:"border-box",
  fontWeight: typoThemeVar.weight.semiBold,
  fontSize: typoThemeVar.size.body1,
  "@media":{
    [responsive.desktop]:{
      fontSize:typoThemeVar.size.h3
    }
  }
});

export const bioStyle = style([
  fadeInUpStyle,
  limitTextLines({line:3}),
  {
    width: "100%",
    fontWeight: typoThemeVar.weight.thin,
    fontSize: typoThemeVar.size.body2,
    "@media":{
      [responsive.desktop]:{
        fontSize: typoThemeVar.size.body1
      }
    }
  },
]);
