import Icon from "@/components/base/atom/icon";
import { bottomStyle, iconStyle, textStyle } from "./bottom.css";
import Link from "next/link";
import Button from "@/components/base/atom/button";

const tmpData = ["나", "여행"];

export default function Bottom() {
  return (
    <nav className={bottomStyle}>
      <Icon
        src={"/icons/brand-icon.svg"}
        alt="icon"
        color="black"
        size="large"
        className={iconStyle}
      />

      {tmpData.map((e, i) => (
        <Link href="/" key={i} className={textStyle}>
          <p>{e}</p>
        </Link>
      ))}
      <Button flat fullWidth size="large" className={textStyle}><p>로그인</p></Button>
      <Button flat fullWidth size="large" className={textStyle} color="negative"><p>로그아웃</p></Button>
    </nav>
  );
}
