import { slideRightStyle } from "@/style/animation/slide-right.css";
import { style } from "@vanilla-extract/css";

export const drawerContainerStyle = style([
  slideRightStyle,
  {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  },
]);
