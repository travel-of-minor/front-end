import TreasureSection from "@/components/page/user/treasure-section";
import TreasureSectionSkeleton from "@/components/page/user/treasure-section/treasure-section.skeleton";
import UserSection from "@/components/page/user/user-section";
import UserSectionSkeleton from "@/components/page/user/user-section/user-section.skeleton";
import { mainStyle } from "@/style/css/main.css";
import { Suspense } from "react";

interface PropType {
  params: { id: string };
}

export default async function Page({ params }: PropType) {
  return (
    <main className={mainStyle}>
      <Suspense fallback={<UserSectionSkeleton />}>
        <UserSection id={params.id} />
      </Suspense>
      <Suspense fallback={<TreasureSectionSkeleton />}>
        <TreasureSection id={params.id} />
      </Suspense>
    </main>
  );
}
