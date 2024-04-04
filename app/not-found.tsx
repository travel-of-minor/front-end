import { mainStyle } from "@/style/css/main.css";
import { containerStyle, divStyle, errorCodeStyle, subTextStyle } from "./not-found.css";

export default async function NotFound() {
  return (
    <main className={`${mainStyle} ${containerStyle}`}>
      <div className={divStyle}>
        <h1 className={errorCodeStyle}>404</h1>
      </div>
      <div className={divStyle}>
        <h3>페이지를 찾을 수 없습니다.</h3>
        <p className={subTextStyle}>
          세계선을 넘어서, 나는 수많은 가능성을 탐구한다. 그리고 결국, 가장
          바람직한 미래를 선택하는 것이 우리의 목표다.
        </p>
      </div>
    </main>
  );
}
