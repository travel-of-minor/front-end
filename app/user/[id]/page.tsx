import TasteSection from "@/components/page/user/taste-section";
import UserSection from "@/components/page/user/user-section";
import { mainStyle } from "@/style/css/main.css";

export default function Page() {
  return (
    <main className={mainStyle}>
      <UserSection />
      <TasteSection />
    </main>
  );
}
