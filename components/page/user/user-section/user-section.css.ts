import { fadeInUpStyle } from "@/style/animation/fade-in-up.css";
import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const userSectionStyle = style({
  color: "#fff",
  padding: sizeThemeVar.void[64],
  "@media":{
    [responsive.mobile]:{
      padding: `${sizeThemeVar.void[64]} ${sizeThemeVar.void[8]}`,
    },
    [responsive.tablet]:{
      padding: `${sizeThemeVar.void[64]} ${sizeThemeVar.void[16]}`,
    }
  }
});

export const nameStyle = style({
  width: "100%",
  margin: 0,
  padding: `${sizeThemeVar.void[8]} 0`,
  borderBottom: `1px solid ${colorThemeVar.greys[300]}`,
  boxSizing:"border-box",
});

export const bioStyle = style([
  fadeInUpStyle,
  {
    width: "100%",
    fontWeight: typoThemeVar.weight.thin,
  },
]);
