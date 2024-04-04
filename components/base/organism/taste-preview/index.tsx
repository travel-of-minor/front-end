import Link from "next/link";
import Image from "next/image";
import { containerStyle, imageContainerStyle, liStyle } from "./taste-preview.css";
import PreviewInfo from "./preview-info";

interface PropType {
  imgURL: string;
  id: string;
  title: string;
  author?: string;
  description?: string;
}

export default function TastePreview({
  imgURL,
  id,
  title,
  author,
  description,
}: PropType) {
  return (
    <li className={liStyle}>
      <Link
        href={{ pathname: "opus", query: { id: id } }}
        className={containerStyle}
      >
        <div className={imageContainerStyle}>
          <Image
            src={imgURL}
            //width={240}
            //height={160}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <PreviewInfo title={title} author={author} description={description} />
      </Link>
    </li>
  );
}
