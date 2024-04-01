import { recipe } from "@vanilla-extract/recipes";

/** not valid color for colored svg */
export const iconStyle = recipe({
  base: {},
  variants: {
    color: {
      origin: {},
      black: {
        filter:
          "invert(0%) sepia(0%) saturate(7474%) hue-rotate(121deg) brightness(92%) contrast(106%)",
      },
      white: {
        filter:
          "invert(100%) sepia(100%) saturate(1%) hue-rotate(196deg) brightness(104%) contrast(102%)",
      },
    },
  },
});
