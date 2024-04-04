import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import { style } from "@vanilla-extract/css";

export const imageContainerStyle = style({
    width: 240,
    height: 160,
    position:"relative",
    "@media":{
        [responsive.mobile]:{
            width: 120,
            height: 120,
        }
    },
})

export const liStyle = style({
    width: "100%",
    height: 160,
    ":hover":{
        opacity: 0.7,
        transition: "opacity 0.3s linear",
    },
})

export const containerStyle = style({
    width: "100%",
    height: "100%",
    display: "flex",
    
})

export const imageStyle = style({
    objectFit:"contain",
})