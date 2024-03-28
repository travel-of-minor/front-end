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
  },
  variants: {
    color: {
      primary: {
        background: colorThemeVar.primary,
        borderColor: colorThemeVar.primary,
      },
      negative: { background: colorThemeVar.negative, borderColor: colorThemeVar.negative, },
      positive: { background: colorThemeVar.positive, borderColor: colorThemeVar.positive, },
      warn: { background: colorThemeVar.warn, borderColor: colorThemeVar.warn, },
    },
    size: {
      small: {
        padding: sizeThemeVar.void[4],
        minWidth: 50,
        borderRadius: 7,
        height: 30,
        gap: 5,
        fontSize: typoThemeVar.size.body2,
      },
      medium: {
        padding: sizeThemeVar.void[12],
        minWidth: 80,
        borderRadius: 15,
        height: 36,
        gap: 10,
        fontSize: typoThemeVar.size.body1,
      },
      large: {
        padding: sizeThemeVar.void[24],
        minWidth: 110,
        borderRadius: 20,
        height: 45,
        gap: 15,
        fontSize: typoThemeVar.size.body1,
      },
    },
    fullWidth: {
      true: { width: "100%" },
    },
  },
});

export default buttonStyle;
