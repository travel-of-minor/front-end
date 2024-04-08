import type { Metadata } from "next";
import "./global.css";
import globalFonts from "@/config/global-font";
import { colorThemeClass } from "@/theme/color-theme.css";
import { typoThemeClass } from "@/theme/typo-theme.css";
import { sizeThemeClass } from "@/theme/size-theme.css";
import Header from "@/components/base/template/header";
import IntegrateMSW from "@/mocks/integrate-msw";

export const metadata: Metadata = {
  title: "민어의 여행",
  description: "travel of minor, 나만의 취향 보여주고 새로운 취향 찾기",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${globalFonts} ${typoThemeClass} ${colorThemeClass} ${sizeThemeClass}`}
    >
      <body>
        <IntegrateMSW>
          <Header />
          {children}
          <div id="header-drawer" />
        </IntegrateMSW>
      </body>
    </html>
  );
}
