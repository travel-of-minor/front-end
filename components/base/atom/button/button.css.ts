import { recipe } from "@vanilla-extract/recipes";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";

const buttonStyle = recipe({
  base: {
    color: colorThemeVar.greys[100],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ":hover": {
      opacity: 0.9,
    },
    boxSizing: 'border-box',
  },
  variants: {
    color: {
      primary: {
        background: colorThemeVar.primary,
        borderColor: colorThemeVar.primary,
      },
      negative: {
        background: colorThemeVar.negative,
        borderColor: colorThemeVar.negative,
      },
      positive: {
        background: colorThemeVar.positive,
        borderColor: colorThemeVar.positive,
      },
      white: {
        background: "#FFF",
        color: "#000",
        borderColor: "#FFF"
      },
    },
    size: {
      small: {
        padding: `${sizeThemeVar.void[4]} ${sizeThemeVar.void[8]}`,
        borderRadius: `${sizeThemeVar.void[8]}`,
        fontSize: typoThemeVar.size.small,
      },
      medium: {
        padding: `${sizeThemeVar.void[8]} ${sizeThemeVar.void[12]}`,
        borderRadius: `${sizeThemeVar.void[12]}`,
        fontSize: typoThemeVar.size.body2,
      },
      large: {
        padding: `${sizeThemeVar.void[12]} ${sizeThemeVar.void[24]}`,
        minWidth: 110,
        borderRadius: `${sizeThemeVar.void[24]}`,
        fontSize: typoThemeVar.size.body1,
      },
    },
    fullWidth: {
      true: { width: "100%" },
    },
  },
});

export default buttonStyle;
