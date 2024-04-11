"use client";

import { buttonStyle, containerStyle } from "./button-container.css";
import IconButton from "@/components/base/atom/button/icon-button";

interface PropType {
  id: string;
}

export default function ButtonContainer({ id }: PropType) {
  return (
    <div className={containerStyle}>
      <IconButton
        src="/icons/edit-icon.svg"
        fit={false}
        className={buttonStyle}
      >
        정보 수정
      </IconButton>
      <IconButton src="/icons/add-icon.svg" fit={false} className={buttonStyle}>
        보물 추가
      </IconButton>
    </div>
  );
}
