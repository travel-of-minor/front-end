import { responsive } from "@/theme/responsive.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const footStyle = style({
    height: 48,
    fontWeight: typoThemeVar.weight.thin,
    display: "none",
    alignItems: "center",
    gap: 24,
    "@media":{
        [responsive.tablet]:{
            display: "flex",
        },
        [responsive.desktop]:{
            display: "flex",
        }
    }
})

export const anchorStyle = style({
    width: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})