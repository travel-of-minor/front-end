import { style } from "@vanilla-extract/css";
import { globalPadding } from "../padding-theme.css";

export const mainStyle = style({
  display: "flex",
  "@media": globalPadding({
    mobile: {
      flexDirection: "column",
    },
  }),
});
