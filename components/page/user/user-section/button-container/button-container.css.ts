import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
    gap: sizeThemeVar.void[12],
    display: "flex",
    flexWrap: "wrap",
    padding: `${sizeThemeVar.void[24]} 0`,
})

export const buttonStyle = style({
    borderBottom: `1px solid ${colorThemeVar.greys[300]} !important`,
    flex: 1,
    maxWidth: 140,
})

