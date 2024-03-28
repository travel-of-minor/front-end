import { globalStyle } from "@vanilla-extract/css";
import typoThemeVar from "@/theme/typo-theme.css";

globalStyle('h1',{
  fontSize: typoThemeVar.size.h1,
  fontWeight: typoThemeVar.weight.bold
})

globalStyle('h2',{
  fontSize: typoThemeVar.size.h2,
  fontWeight: typoThemeVar.weight.semiBold
})


globalStyle('h3',{
  fontSize: typoThemeVar.size.h3,
  fontWeight: typoThemeVar.weight.semiBold
})