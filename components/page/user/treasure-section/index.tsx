import TreasurePreview from "@/components/base/organism/treasure-preview";
import { treasureListStyle, treasureSectionStyle } from "./treasure-section.css";
import { TreasureType } from "@/type/api/treasure";

const tmpURL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDehPCOiUa8t0BIQYhK5g3GvH57RDH3b-aIgewbVEbxg&s";

interface PropType {
  data: TreasureType[];
}

export default function TreasureSection({ data }: PropType) {
  return (
    <section className={treasureSectionStyle}>
      <ul className={treasureListStyle}>
        {data.map((e) => (
          <TreasurePreview
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
