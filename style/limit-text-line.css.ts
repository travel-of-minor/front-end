import { recipe } from "@vanilla-extract/recipes";

export const limitTextLines = recipe({
  base: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  variants: {
    line: {
      2: { WebkitLineClamp: 2 },
      3: { WebkitLineClamp: 3 },
      4: { WebkitLineClamp: 4 },
      5: { WebkitLineClamp: 5 },
    },
  },
});
