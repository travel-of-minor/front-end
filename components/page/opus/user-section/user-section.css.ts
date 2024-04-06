import { fadeInUpStyle } from "@/style/animation/fade-in-up.css";
import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const sectionStyle = style({
    width: 640,
    "@media":{
        [responsive.mobile]:{
            width: "100%"
        }
    },
    padding: `0 ${sizeThemeVar.void[12]} ${sizeThemeVar.void[32]}  ${sizeThemeVar.void[12]}`,
    color: "#fff",
    boxSizing: "border-box",
    backgroundColor: colorThemeVar.background.dark,
})

export const userNameStyle = style({
    padding: 0,
    width: "100%",
    "@media":{
        [responsive.mobile]:{
            fontSize: typoThemeVar.size.h3,
        }
    }
})

export const userNameSpanStyle = style({
    color: colorThemeVar.greys[300],
    fontSize: typoThemeVar.size.body2,
    "@media":{
        [responsive.mobile]:{
            fontSize: typoThemeVar.size.small,
        }
    },
    marginLeft: sizeThemeVar.void[4],
})

export const descriptionStyle = style([fadeInUpStyle,{
    fontWeight: typoThemeVar.weight.thin,
}])
