import { fadeInUpStyle } from "@/style/animation/fade-in-up.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { keyframes, style } from "@vanilla-extract/css";

export const containerStyle = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    color: "#fff",
})

const fadeInUp = keyframes({
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  });

export const titleStyle = style([fadeInUpStyle,{
    margin: sizeThemeVar.void[4],
}])

export const textStyle = style([fadeInUpStyle,{
    fontWeight: typoThemeVar.weight.thin,
    margin: sizeThemeVar.void[4],
    color: colorThemeVar.greys[200],
}])