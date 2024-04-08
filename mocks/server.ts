import { setupServer } from "msw/node";
import { handlers } from "./handlers"; // 핸들러 파일 경로를 확인하세요

const server = setupServer(...handlers);
export default server;

