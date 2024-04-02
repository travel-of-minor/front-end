import { responsive } from "@/style/responsive.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    "@media":{
        [responsive.tablet]:{
            height: "50%"
        },
        [responsive.desktop]:{
            height: "50%",
        }
    }
})