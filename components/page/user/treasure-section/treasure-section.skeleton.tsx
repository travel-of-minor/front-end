import TreasurePreviewSkeleton from "@/components/base/organism/treasure-preview/treasure-preview.skeleton";
import {
  treasureListStyle,
  treasureSectionStyle,
} from "./treasure-section.css";

export default function TreasureSectionSkeleton() {
  return (
    <section className={treasureSectionStyle}>
      <ul className={treasureListStyle}>
        {[1, 2, 3].map((e) => (
          <TreasurePreviewSkeleton key={e} />
        ))}
      </ul>
    </section>
  );
}
