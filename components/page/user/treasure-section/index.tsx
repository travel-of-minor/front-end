import TreasurePreview from "@/components/base/organism/treasure-preview";
import {
  treasureListStyle,
  treasureSectionStyle,
} from "./treasure-section.css";
import { TreasureType } from "@/type/api/treasure";

interface PropType {
  id: string;
}

export default async function TreasureSection({ id }: PropType) {
  const treasure = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}/treasures`
  ).then((res) => res.json())) as TreasureType[];
  return (
    <section className={treasureSectionStyle}>
      <ul className={treasureListStyle}>
        {treasure.map((e) => (
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
