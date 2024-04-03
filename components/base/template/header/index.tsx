import Foot from "./foot";
import { headerStyle } from "./header.css";
import Top from "./top";

export default function Header(){
    return(
        <header className={`${headerStyle}`}>
            <Top/>
            <Foot/>
        </header>
    )
}