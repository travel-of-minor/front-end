import { style } from "@vanilla-extract/css";
import { responsive } from "../responsive.css";

export const mainStyle = style({
  display: "flex",
  "@media": {
    [responsive.mobile]: {
      flexDirection: "column",
    },
  },
});
