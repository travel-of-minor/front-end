import { keyframes, style } from "@vanilla-extract/css";

const slideRightAnimation = keyframes({
  "0%": {
    transform: "translateX(100%)",
    opacity: 0.6,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const slideRightStyle = style({
  animation: `${slideRightAnimation} 0.2s ease-out forwards`,
});
