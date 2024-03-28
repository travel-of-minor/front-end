import { createTheme } from "@vanilla-extract/css";

const [sizeThemeClass,sizeThemeVar] = createTheme({
    void:{
        4:"4px",
        8:"8px",
        12:"12px",
        16:"16px",
        24:"24px",
        28:"28px",
        32:"32px",
    }
})

export {sizeThemeClass};
export default sizeThemeVar;