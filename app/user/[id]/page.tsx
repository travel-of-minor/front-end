import TreasureSection from "@/components/page/user/treasure-section";
import UserSection from "@/components/page/user/user-section";
import { mainStyle } from "@/style/css/main.css";
import { UserType } from "@/type/api/user";

interface PropType {
  params: { id: string };
}

export default async function Page({params}:PropType) {
  return (
    <main className={mainStyle}>
      <UserSection id={params.id} />
      <TreasureSection id={params.id} />
    </main>
  );
}
