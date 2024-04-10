import { delay, http, HttpResponse } from "msw";
import { userData } from "../data/user";
import { treasureData } from "../data/treasure";

export const userHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/users/:id`,
  async ({ params }) => {
    await delay(1500);
    const { id } = params;
    const user = userData.find((e) => e.id === id);
    if (user) {
      return HttpResponse.json(user);
    }

    // not found
    throw new HttpResponse(null, { status: 404 });
  }
);



export const treasureByUserHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/users/:id/treasures`,
  async ({ params }) => {
    await delay(1500);
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