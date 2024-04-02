import { keyframes, style } from "@vanilla-extract/css";

const slideRightAnimation = keyframes({
  "0%": {
    transform: "translateX(100%)",
    opacity: 0.5,
  },
  "100%": {
    transform: "translateX(0)",
    opacity: 1,
  },
});

export const slideRightStyle = style({
  animation: `${slideRightAnimation} 0.5s ease-out forwards`,
});
