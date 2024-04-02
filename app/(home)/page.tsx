import Button from "@/components/base/atom/button";
import LoginSection from "@/components/page/home/login-section";
import MainSection from "@/components/page/home/main-section";
import { mainStyle } from "./page.css";

export default function Home() {
  return (
    <main className={mainStyle}>
      <MainSection/>
      <LoginSection/>
    </main>
  );
}
