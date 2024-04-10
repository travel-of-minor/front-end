import { UserType } from "@/type/api/user";
import { http, HttpResponse } from "msw";

export const userHandler = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/user/:id`,
  ({ params }) => {
    const { id } = params;
    const users: UserType[] = [
      {
        id: "1",
        name: "나윤상",
        bio: "안녕하세요 제 이름은 나윤상입니다. 제가 살면서 많은 영감을 받는 작품을 소개합니다.",
        treasures: [
          {
            id: "1",
            userId: "1",
            userName: "나윤상",
            title: "잘자 푼푼",
            author: "아사노 이니오",
            imgURL:
              "https://i.namu.wiki/i/iud-U3NhhUS5gJSWylCqs3mY-I3ON6EdXi1Dv8feDCOolYOv18UWCVECreEZUOnIR7EOoJQJtXOc6A9skU3bFCmQLtUZYO3jXdDzXNs24s2HlcuLcptf5bnasXWUTyMgmuSCr9yDmKsR1m2mTqX62w.webp",
            description: "뒤틀린 성장기에 대해",
          },
          {
            id: "2",
            userId: "1",
            userName: "나윤상",
            title: "Komm, süsser Tod",
            author: "아리안 슈라이버",
            imgURL:
              "https://i1.sndcdn.com/artworks-000290083122-e4fiug-t500x500.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies mauris et cursus lacinia. Donec quis risus quis neque facilisis porttitor. Curabitur ut facilisis orci. In consequat porttitor odio, et rutrum massa elementum id.",
          },
          {
            id: "3",
            userId: "1",
            userName: "나윤상",
            title: "극장판 짱구는 못말려: 어른제국의 역습",
            author: "하라 케이이치",
            imgURL:
              "https://i.namu.wiki/i/hT_bdaH72rX1dANr7JPIegtd0u33a1JXqCrNL99j9-9djRQLzNK12m1VOYAsZhqFmAYRKF_GD_oi3fcnRI8nuUjvamRQVjq_zKCIQ-Emd8hR-GP-zjaLuiXO9ubB8C-73--29Rg9Bk2n27ostEfnrQ.webp",
            description: "",
          },
          {
            id: "4",
            userId: "1",
            userName: "나윤상",
            title: "잘자 푼푼",
            author: "아사노 이니오",
            imgURL:
              "https://i.namu.wiki/i/iud-U3NhhUS5gJSWylCqs3mY-I3ON6EdXi1Dv8feDCOolYOv18UWCVECreEZUOnIR7EOoJQJtXOc6A9skU3bFCmQLtUZYO3jXdDzXNs24s2HlcuLcptf5bnasXWUTyMgmuSCr9yDmKsR1m2mTqX62w.webp",
            description: "뒤틀린 성장기에 대해",
          },
          {
            id: "5",
            userId: "1",
            userName: "나윤상",
            title: "Komm, süsser Tod",
            author: "아리안 슈라이버",
            imgURL:
              "https://i1.sndcdn.com/artworks-000290083122-e4fiug-t500x500.jpg",
            description: "모든것이 망가지는 엔딩",
          },
          {
            id: "6",
            userId: "1",
            userName: "나윤상",
            title: "극장판 짱구는 못말려: 어른제국의 역습",
            author: "하라 케이이치",
            imgURL:
              "https://i.namu.wiki/i/hT_bdaH72rX1dANr7JPIegtd0u33a1JXqCrNL99j9-9djRQLzNK12m1VOYAsZhqFmAYRKF_GD_oi3fcnRI8nuUjvamRQVjq_zKCIQ-Emd8hR-GP-zjaLuiXO9ubB8C-73--29Rg9Bk2n27ostEfnrQ.webp",
            description: "",
          },
        ],
      },
      {
        id: "2",
        name: "나는엄청난슈퍼맨이다하하",
        bio: "",
        treasures: [],
      },
    ];
    const user = users.find((e) => e.id === id);
    if (user) {
      return HttpResponse.json(user);
    }

    // not found
    throw new HttpResponse(null, { status: 404 });
  }
);
