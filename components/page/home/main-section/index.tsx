import Image from "next/image";
import { sectionStyle } from "../section.css";
import { containerStyle, titleStyle } from "./main-section.css";

export default function MainSection() {
  return (
    <section className={sectionStyle}>
      <div className={containerStyle}>
        <Image
          src="/images/brand-image.webp"
          alt="민어의 여행"
          width={200}
          height={200}
        />
        <h1 className={titleStyle}>민어의 여행</h1>
        <p>나만의 취향을 여행하기</p>
      </div>
    </section>
  );
}
