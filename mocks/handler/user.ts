import { http, HttpResponse } from "msw";
import { userData } from "../data/user";

export const userHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/users/:id`,
  ({ params }) => {
    const { id } = params;
    const user = userData.find((e) => e.id === id);
    if (user) {
      return HttpResponse.json(user);
    }

    // not found
    throw new HttpResponse(null, { status: 404 });
  }
);
