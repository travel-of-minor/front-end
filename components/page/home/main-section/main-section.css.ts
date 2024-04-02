import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    color: "#fff",
})

export const titleStyle = style({
    margin: 0,
})

export const textStyle = style({
    fontWeight: typoThemeVar.weight.thin,
    margin: sizeThemeVar.void[4],
    color: colorThemeVar.greys[200],
})