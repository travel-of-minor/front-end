import Link from "next/link";
import Image from "next/image";
import { leftStyle, pStyle } from "./left.css";
import Icon from "@/components/base/atom/icon";

export default function Left(){
    return(
        <Link href="/" className={leftStyle}>
            <Icon src="/icons/brand-icon.svg" alt="아이콘" size="xlarge" color="white"/>
            <p className={pStyle}>민어의 여행</p>
        </Link>
    )
}