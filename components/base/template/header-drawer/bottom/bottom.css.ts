import { globalPadding } from "@/style/padding-theme.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const bottomStyle = style({
    backgroundColor: colorThemeVar.greys[200],
    color: "#000",
    boxSizing:"border-box",
    height: "100%",
    width: "100%",
    borderRadius: "20px 20px 0 0",
    paddingTop: 16,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
})

export const iconStyle = style({
    padding: 12,
})

export const textStyle = style({
    fontWeight: typoThemeVar.weight.thin,
    margin: 0,
    width: "100%",
    textAlign: "center",
    borderBottom: `1px solid #ddd`,
    padding: `${sizeThemeVar.void[12]} 0`,
})
