import Link from "next/link";
import { anchorStyle, footStyle } from "./foot.css";

export default function Foot(){
    return (
        <nav className={`${footStyle}`}>
            <Link href="/" className={anchorStyle}>나</Link>
            <Link href="/" className={anchorStyle}>여행</Link>
        </nav>
    )
}