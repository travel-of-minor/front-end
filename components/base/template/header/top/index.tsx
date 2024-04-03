import Left from "./left";
import Right from "./right";
import { topStyle } from "./top.css";

export default function Top() {
  return (
    <div className={topStyle}>
      <Left />
      <Right />
    </div>
  );
}
