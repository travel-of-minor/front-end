import Link from "next/link";
import Image from "next/image";
import { leftStyle, pStyle } from "./left.css";

export default function Left(){
    return(
        <Link href="/" className={leftStyle}>
            <Image src="/icons/naver-icon.svg" width={24} height={24} alt="민어의 여행"/>
            <p className={pStyle}>민어의 여행</p>
        </Link>
    )
}