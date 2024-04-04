"use client";

import Button from "@/components/base/atom/button";
import { buttonStyle, containerStyle } from "./button-container.css";

interface PropType {
  id: string;
}

export default function ButtonContainer({ id }: PropType) {
  return (
    <div className={containerStyle}>
      <Button name="내 정보 수정하기" className={buttonStyle}>
        내 정보 수정하기
      </Button>
      <Button color="positive" name="새 보물 추가하기" className={buttonStyle}>
        새 보물 추가하기
      </Button>
    </div>
  );
}
