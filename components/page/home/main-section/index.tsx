import Image from "next/image";
import { sectionStyle } from "../section.css";
import { containerStyle, textStyle, titleStyle } from "./main-section.css";

export default function MainSection() {
  return (
    <section className={sectionStyle}>
      <div className={containerStyle}>
        <Image
          src="/images/brand-image.webp"
          alt="민어의 여행"
          width={200}
          height={200}
          priority
        />
        <h1 className={titleStyle}>민어의 여행</h1>
        <p className={textStyle}>Travel of minor</p>
        <p className={textStyle}>새로운 취향을 여행하고 나의 취향을 이해한다.</p>
      </div>
    </section>
  );
}
