import { HttpResponse, http } from "msw";
import { treasureData } from "../data/treasure";

export const treasureHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/users/:id/treasures`,
  ({ params }) => {
    const { id } = params;
    const treasure = treasureData.filter((e) => e.userId === id);
    if (treasure) {
      return HttpResponse.json(treasure);
    }
    // not found
    throw new HttpResponse(null, {
      status: 404,
      statusText: "Hello world!",
    });
  }
);
