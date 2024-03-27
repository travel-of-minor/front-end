import colorTheme from "./color-theme.css";
import typoTheme from "./typo-theme.css";

const themeClass = `${colorTheme[0]} ${typoTheme[0]}`;
const themeVar = { ...typoTheme[1], ...colorTheme[1] };

export { themeClass };
export default themeVar;
