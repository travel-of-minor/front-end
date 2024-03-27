import { Noto_Sans } from "next/font/google";

/**
 * If i use multiple Fonts,
 * Set the variable of each font.
 * After set, use variable not className.
 * refer: https://medium.com/@a.pirus/simplifying-multiple-fonts-styling-in-next-js-13-with-css-variables-cb57e9707693
 */
const notoSans = Noto_Sans({
  weight: ["200", "400", "600", "800"],
  display: "swap",
  subsets: ["latin"],
});

const globalFonts = `${notoSans.className}`;
export default globalFonts;
