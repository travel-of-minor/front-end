import {
  authorStyle,
  imageContainerStyle,
  imageStyle,
  publisherStyle,
  sectionStyle,
  titleStyle,
} from "./info-section.css";
import Image from "next/image";

interface PropType {
  imgURL: string;
  title: string;
  author: string;
  publisher: string;
}

export default function InfoSection({
  imgURL,
  title,
  author,
  publisher,
}: PropType) {
  return (
    <section className={sectionStyle}>
      <div className={imageContainerStyle}>
        <Image src={imgURL} alt={title} fill priority className={imageStyle} />
      </div>
      <h1 className={titleStyle}>{title}</h1>
      <p className={authorStyle}>{author}</p>
      <p className={publisherStyle}>{publisher}</p>
    </section>
  );
}
