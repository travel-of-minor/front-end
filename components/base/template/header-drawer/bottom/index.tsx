import Icon from "@/components/base/atom/icon";
import { bottomStyle, textStyle } from "./bottom.css";

export default function Bottom() {
  return (
    <nav className={bottomStyle}>
      <Icon
        src={"/icons/brand-icon.svg"}
        alt="icon"
        color="black"
        size="large"
      />
      
        <p className={textStyle}>나</p>
        <p className={textStyle}>여행</p>
      
    </nav>
  );
}
