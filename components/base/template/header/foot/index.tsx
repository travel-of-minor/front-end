import Link from "next/link";
import { anchorStyle, footStyle } from "./foot.css";

export default function Foot(){
    return (
        <nav className={`${footStyle}`}>
            <Link href="/user/1" className={anchorStyle}>나의 바다</Link>
            <Link href="/" className={anchorStyle}>타인의 바다</Link>
        </nav>
    )
}