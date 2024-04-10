import { treasureHandler } from "./handler/treasure";
import { treasureByUserHandler, userHandler } from "./handler/user";

export const handlers = [userHandler,treasureHandler,treasureByUserHandler];
