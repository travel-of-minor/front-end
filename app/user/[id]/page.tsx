import TreasureSection from "@/components/page/user/treasure-section";
import UserSection from "@/components/page/user/user-section";
import { mainStyle } from "@/style/css/main.css";
import { UserType } from "@/type/api/user";

interface PropType {
  params?: { id: string };
}

export default async function Page({ params }: PropType) {
  const userData = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${params?.id}`
  ).then((res) => res.json())) as UserType;
  return (
    <main className={mainStyle}>
      <UserSection name={userData.name} bio={userData.bio} />
      <TreasureSection data={userData.treasures} />
    </main>
  );
}
