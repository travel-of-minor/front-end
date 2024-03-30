import sizeThemeVar from "@/theme/size-theme.css";
import { style } from "@vanilla-extract/css";

const socialLoginButtonStyle = style({
  justifyContent: "flex-start !important",
  gap: sizeThemeVar.void[24],
  border: "2px outset buttonface",
  ":active": {
    borderStyle: "inset",
  }
});

export default socialLoginButtonStyle
