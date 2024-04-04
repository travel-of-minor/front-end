import { responsive } from "@/style/responsive.css";
import sizeThemeVar from "@/theme/size-theme.css";
import { style } from "@vanilla-extract/css";

export const tasteSectionStyle = style({
    flex: 1.4,
    "@media":{
        [responsive.mobile]:{
            flex: 1.7,
        }
    }
})

export const tasteListStyle = style({
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: sizeThemeVar.void[16],
    padding: `${sizeThemeVar.void[16]} 0`
})