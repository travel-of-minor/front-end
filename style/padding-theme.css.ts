import { CSSProperties } from "@vanilla-extract/css";
import { responsive } from "./responsive.css";
import sizeThemeVar from "../theme/size-theme.css";

export function globalPadding({
  mobile,
  tablet,
  desktop,
}: {
  mobile?: CSSProperties;
  tablet?: CSSProperties;
  desktop?: CSSProperties;
}) {
  return {
    [responsive.mobile]: {
      padding: `0 ${sizeThemeVar.void[16]}`,
      ...mobile,
    },
    [responsive.tablet]: {
      padding: `0 ${sizeThemeVar.void[32]}`,
      ...tablet,
    },
    [responsive.desktop]: {
      padding: `0 ${sizeThemeVar.void[64]}`,
      ...desktop,
    },
  };
}
