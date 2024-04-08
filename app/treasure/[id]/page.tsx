import InfoSection from "@/components/page/opus/info-section";
import { mainStyle } from "./page.css";
import UserSection from "@/components/page/opus/user-section";

export default function Page() {
  return (
    <main className={mainStyle}>
      <InfoSection
        title="임시 제목 임시 제목 임시 제목"
        author="임지 작가 임시 작가"
        imgURL="https://i.namu.wiki/i/7Br6l1vp02FG0WbeBT_CZjvl0CSAYpRdHb92aOUR4VmT27tfE9f1oQPWxvpBAJJ5WXh3bqSt-rwn5h-xHLMSWw.webp"
      />
      <UserSection
        userName="나윤상나윤상나윤상나윤상"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies mauris et cursus lacinia. Donec quis risus quis neque facilisis porttitor. Curabitur ut facilisis orci. In consequat porttitor odio, et rutrum massa elementum id."
      />
    </main>
  );
}
