import {
  authorStyle,
  imageContainerStyle,
  imageStyle,
  sectionStyle,
  titleStyle,
} from "./info-section.css";
import Image from "next/image";

interface PropType {
  imgURL: string;
  title: string;
  author: string;
}

export default function InfoSection({
  imgURL,
  title,
  author,
}: PropType) {
  return (
    <section className={sectionStyle}>
      <div className={imageContainerStyle}>
        <Image src={imgURL} alt={title} fill priority className={imageStyle} />
      </div>
      <h1 className={titleStyle}>{title}</h1>
      <p className={authorStyle}>{author}</p>
    </section>
  );
}
