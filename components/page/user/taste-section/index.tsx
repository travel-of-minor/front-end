import Image from "next/image";
import { tasteListStyle, tasteSectionStyle } from "./taste-section.css";
import TastePreview from "@/components/base/organism/taste-preview";
import { TreasureType } from "@/type/api/treasure";

const tmpURL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDehPCOiUa8t0BIQYhK5g3GvH57RDH3b-aIgewbVEbxg&s";

interface PropType {
  data: TreasureType[];
}

export default function TasteSection({ data }: PropType) {
  return (
    <section className={tasteSectionStyle}>
      <ul className={tasteListStyle}>
        {data.map((e) => (
          <TastePreview
            title={e.title}
            imgURL={e.imgURL}
            id={e.id}
            key={e.id}
            description={e.description}
            author={e.author}
          />
        ))}
      </ul>
    </section>
  );
}
