import sizeThemeVar from "@/theme/size-theme.css";
import { style } from "@vanilla-extract/css";

export const tasteSectionStyle = style({
    flexGrow: 1,
    flexBasis: 0,
})

export const tasteListStyle = style({
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: sizeThemeVar.void[16],
    padding: `${sizeThemeVar.void[32]} 0`
})