import sizeThemeVar from "@/theme/size-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "50%",
})