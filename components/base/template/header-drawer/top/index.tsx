import { useContext } from "react";
import { HeaderDrawerContext } from "..";
import IconButton from "@/components/base/atom/button/icon-button";
import { topStyle } from "./top.css";

export default function Top() {
  const { setIsOpen } = useContext(HeaderDrawerContext);
  return (
    <div className={topStyle}>
      <IconButton
        src="/icons/close-icon.svg"
        name="close"
        iconColor="white"
        iconSize="xlarge"
        onClick={() => {
          setIsOpen(false);
        }}
        flat
      />
    </div>
  );
}
