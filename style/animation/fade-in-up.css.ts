import { keyframes, style } from "@vanilla-extract/css";

const fadeInUpAnimation = keyframes({
  "0%": {
    opacity: 0.1,
    transform: "translateY(5px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const fadeInUpStyle = style({
  animationName: fadeInUpAnimation,
  animationDuration: "1s",
  animationFillMode: "both",
});
