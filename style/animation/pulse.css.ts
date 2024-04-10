import { keyframes, style } from "@vanilla-extract/css";

export const pulseAnimation = keyframes({
  "0%": {
    opacity: 0.3,
  },
  "50%": {
    opacity: 0.7,
  },
  "100%": {
    opacity: 0.3,
  },
});

// "pulse" 스타일을 적용하는 CSS
export const pulseStyle = style({
  animationName: pulseAnimation,
  animationDuration: "2s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
});
