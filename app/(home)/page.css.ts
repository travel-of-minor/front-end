import { globalPadding } from "@/theme/padding-theme.css";
import { style } from "@vanilla-extract/css";

export const mainStyle = style({
    display: 'flex',
    height: '100vh',
    width: "100%",
    "@media":globalPadding({mobile:{
        flexDirection: 'column',
    }}),
    boxSizing: "border-box"
})