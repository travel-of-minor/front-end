import Image from "next/image";
import { tasteListStyle, tasteSectionStyle } from "./taste-section.css";
import TastePreview from "@/components/base/organism/taste-preview";

const tmpURL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDehPCOiUa8t0BIQYhK5g3GvH57RDH3b-aIgewbVEbxg&s";

export default function TasteSection() {
  return (
    <section className={tasteSectionStyle}>
      <ul className={tasteListStyle}>
        <TastePreview
          title="임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목 임시 제목"
          imgURL="/images/brand-image.webp"
          id={"1"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies mauris et cursus lacinia. Donec quis risus quis neque facilisis porttitor. Curabitur ut facilisis orci. In consequat porttitor odio, et rutrum massa elementum id. "
        />
        <TastePreview
          title="임시 제목"
          imgURL="/images/brand-image.webp"
          id={"1"}
        />
        <TastePreview
          title="임시 제목"
          imgURL="/images/brand-image.webp"
          id={"1"}
        />
        <TastePreview
          title="임시 제목"
          imgURL="/images/brand-image.webp"
          id={"1"}
        />
        <TastePreview
          title="임시 제목"
          imgURL="/images/brand-image.webp"
          id={"1"}
        />
        <TastePreview
          title="임시 제목"
          imgURL="/images/brand-image.webp"
          id={"1"}
        />
      </ul>
    </section>
  );
}
