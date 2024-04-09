import InfoSection from "@/components/page/treasure/info-section";
import { mainStyle } from "./page.css";
import UserSection from "@/components/page/treasure/user-section";
import { TreasureType } from "@/type/api/treasure";

interface PropType {
  params: { id: string };
}

export default async function Page({ params }: PropType) {
  const treasureData = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/treasure/${params?.id}`
  ).then((res) => res.json())) as TreasureType;
  return (
    <main className={mainStyle}>
      <InfoSection
        title={treasureData.title}
        author={treasureData.author}
        imgURL={treasureData.imgURL}
      />
      <UserSection
        userName={treasureData.userName}
        description={treasureData.description}
      />
    </main>
  );
}
