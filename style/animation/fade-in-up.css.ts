import { keyframes, style } from "@vanilla-extract/css";

const fadeInUpAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const fadeInUpStyle = style({
  animationName: fadeInUpAnimation,
  animationDuration: "1.5s",
  animationFillMode: "both",
});
