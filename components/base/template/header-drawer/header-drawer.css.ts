import colorThemeVar from "@/theme/color-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
    width: "100%",
    height: "100%",
    backgroundColor: colorThemeVar.background.regular,
    color: "white",
})