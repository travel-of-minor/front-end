"use client";

import Button from "@/components/base/atom/button";
import { buttonStyle, containerStyle } from "./button-container.css";

interface PropType {
  id: string;
}

export default function ButtonContainer({ id }: PropType) {
  return (
    <div className={containerStyle}>
      <Button
        name="내 정보 수정"
        className={buttonStyle}
        onClick={() => {
          console.log(
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`).then((res) =>
              res.json()
            )
          );
        }}
      >
        내 정보 수정
      </Button>
      <Button color="positive" name="새 보물 추가" className={buttonStyle}>
        새 보물 추가
      </Button>
    </div>
  );
}
