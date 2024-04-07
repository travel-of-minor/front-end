import { TreasureType } from "./treasure";

export interface UserType {
    id: string;
    name: string;
    bio: string;
    treasures: TreasureType[];
}