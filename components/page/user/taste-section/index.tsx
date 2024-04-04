import Image from "next/image";
import { tasteSectionStyle } from "./taste-section.css";

const tmpURL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDehPCOiUa8t0BIQYhK5g3GvH57RDH3b-aIgewbVEbxg&s";

export default function TasteSection() {
  return (
    <section className={tasteSectionStyle}>
      <div style={{ width: "200px", height: "200px" }}>
        <Image
          src={tmpURL}
          width={200}
          height={200}
          alt=""
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </section>
  );
}
