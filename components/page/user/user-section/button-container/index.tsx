"use client";

import Button from "@/components/base/atom/button";
import { buttonStyle, containerStyle } from "./button-container.css";
import IconButton from "@/components/base/atom/button/icon-button";

interface PropType {
  id: string;
}

export default function ButtonContainer({ id }: PropType) {
  return (
    <div className={containerStyle}>
      <IconButton src="/icons/edit-icon.svg" fit={false}>정보 수정하기</IconButton>
      <IconButton src="/icons/add-icon.svg" fit={false}>보물 추가하기</IconButton>
    </div>
  );
}
