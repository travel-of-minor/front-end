import { style } from "@vanilla-extract/css";
import { globalPadding } from "../padding-theme.css";

export const mainStyle = style({
  display: "flex",
  height: "100vh",
  width: "100%",
  "@media": globalPadding({
    mobile: {
      flexDirection: "column",
    },
  }),
  boxSizing: "border-box",
});
