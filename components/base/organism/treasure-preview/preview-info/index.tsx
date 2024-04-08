import {
  authorStyle,
  containerStyle,
  descriptionStyle,
  titleStyle,
} from "./preview-info.css";

interface PropType {
  title: string;
  author?: string;
  description?: string;
}

export default function PreviewInfo({
  title,
  author = "작자 미상",
  description,
}: PropType) {
  return (
    <div className={containerStyle}>
      <p className={titleStyle}>{title}</p>
      <p className={authorStyle}>{author}</p>
      <p className={descriptionStyle}>{description}</p>
    </div>
  );
}
