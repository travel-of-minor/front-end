import Link from "next/link";
import Image from "next/image";
import {
  containerStyle,
  imageContainerStyle,
  imageStyle,
  liStyle,
} from "./treasure-preview.css"
import PreviewInfo from "./preview-info";

interface PropType {
  imgURL: string;
  id: string;
  title: string;
  author?: string;
  description?: string;
}

export default function TreasurePreview({
  imgURL,
  id,
  title,
  author,
  description,
}: PropType) {
  return (
    <li className={liStyle}>
      <Link
        href={`/treasure/${id}`}
        className={containerStyle}
      >
        <div className={imageContainerStyle}>
          <Image
            src={imgURL}
            alt={title}
            fill
            className={imageStyle}
          />
        </div>
        <PreviewInfo title={title} author={author} description={description} />
      </Link>
    </li>
  );
}
