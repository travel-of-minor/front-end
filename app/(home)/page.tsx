import LoginSection from "@/components/page/home/login-section";
import MainSection from "@/components/page/home/main-section";
import { mainStyle } from "@/style/css/main.css";


export default function Page() {
  return (
    <main className={mainStyle}>
      <MainSection/>
      <LoginSection/>
    </main>
  );
}
