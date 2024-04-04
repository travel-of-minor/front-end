import { responsive } from "@/style/responsive.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
    margin: `${sizeThemeVar.void[16]} 0`,
    display: "flex",
    gap: sizeThemeVar.void[16]
})

export const buttonStyle = style({
    "@media":{
        [responsive.tablet]:{
            fontSize:typoThemeVar.size.small,
        }
    }
})