import { responsive } from "@/style/responsive.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const iconButtonStyle = style({
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: 1,
    border: "none",
    cursor: "pointer",
    "@media":{
        [responsive.mobile]:{
            display:"flex"
        }
    }
})