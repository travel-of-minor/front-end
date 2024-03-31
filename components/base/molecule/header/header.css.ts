import colorThemeVar from "@/theme/color-theme.css";
import { responsive } from "@/theme/responsive.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const headerStyle = style({
    position: "relative",
    top:"0",
    backgroundColor: `${colorThemeVar.greys[100]}`,
    fontSize: `${typoThemeVar.size.body1}`,
    color: "#000",
    "@media":{
        [responsive.mobile]:{
            padding: `0 ${sizeThemeVar.void[12]}`
        },
        [responsive.tablet]:{
            padding: `0 ${sizeThemeVar.void[24]}`
        },
        [responsive.desktop]:{
            padding: `0 ${sizeThemeVar.void[48]}`
        }
    }
})