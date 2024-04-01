import Link from "next/link";
import Image from "next/image";
import { leftStyle, pStyle } from "./left.css";
import Icon from "@/components/base/atom/icon";

export default function Left(){
    return(
        <Link href="/" className={leftStyle}>
            <Icon src="/icons/naver-icon.svg" alt="민어의 여행" size="xlarge"/>
            <p className={pStyle}>민어의 여행</p>
        </Link>
    )
}