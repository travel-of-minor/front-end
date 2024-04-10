import { pulseAnimation } from "@/style/animation/pulse.css";
import { recipe } from "@vanilla-extract/recipes";

export const skeletonStyle = recipe({
  base: {
    height: "1em",
    selectors: {
      "&": { animation: `${pulseAnimation} 2s ease-in-out infinite` },
    },
    boxSizing:"border-box",
  },
  variants: {
    color: {
      white: { backgroundColor: "#fff" },
      black: { backgroundColor: "#000" },
    },
    width: {
      "100%": { width: "100%" },
      "75%": { width: "75%" },
      "50%": { width: "50%" },
      "25%": { width: "25%" },
    },
    height: {
      "1em": { height: "1em" },
      "100%": { height: "100%" },
      "75%": { height: "75%" },
      "50%": { height: "50%" },
      "25%": { height: "25%" },
    },
  },
  defaultVariants: { color: "white", width: "100%", height: "1em" },
});
