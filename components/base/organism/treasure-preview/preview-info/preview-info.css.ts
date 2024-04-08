import { limitTextLines } from "@/style/limit-text-lines.css";
import { responsive } from "@/style/responsive.css";
import colorThemeVar from "@/theme/color-theme.css";
import sizeThemeVar from "@/theme/size-theme.css";
import typoThemeVar from "@/theme/typo-theme.css";
import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  color: `${colorThemeVar.greys[200]}`,
  padding: `0 ${sizeThemeVar.void[4]}`,
  fontSize: typoThemeVar.size.small,
  fontWeight: typoThemeVar.weight.thin,
  "@media": {
    [responsive.desktop]: {
      fontSize: typoThemeVar.size.body2,
      padding: `${sizeThemeVar.void[4]} ${sizeThemeVar.void[8]}`,
    },
  },
  flexGrow: 1,
  flexBasis: 0,
});

export const titleStyle = style([
  {
    color: "#fff",
    fontSize: typoThemeVar.size.body2,
    fontWeight: typoThemeVar.weight.regular,
    "@media": {
      [responsive.desktop]: {
        fontSize: typoThemeVar.size.body1,
      },
    },
  },
  limitTextLines({ line: 2 }),
]);

export const authorStyle = style({
  borderBottom: `1px solid ${colorThemeVar.greys[300]}`,
  width: "100%",
  margin: `${sizeThemeVar.void[2]} 0`,
  padding: `${sizeThemeVar.void[2]} 0`,
});

export const descriptionStyle = style([{}, limitTextLines({ line: 2 })]);
