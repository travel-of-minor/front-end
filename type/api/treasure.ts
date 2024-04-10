export interface TreasureType{
    id: string;
    userId: string;
    userName:string;
    title: string;
    author: string;
    imgURL: string;
    description: string;
    publisher: string;
    type?: "general" | "foreign" | "comic" | "others";
}