import { HttpResponse, delay, http } from "msw";
import { treasureData } from "../data/treasure";

export const treasureHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/treasure/:id`,
  async ({ params }) => {
    await delay(1500);
    const { id } = params;
    const treasure = treasureData.find((e) => e.id === id);
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
