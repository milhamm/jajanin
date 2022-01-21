import { StoreDetailResponse } from "../types/store";

export const detailStoreMock: StoreDetailResponse = {
  success: true,
  code: 200,
  data: {
    average_rating: 4.5,
    count_rating: 2,
    id: "ckyiz33es0000mwfyj463ha20",
    owner_id: null,
    store_name: "Asmoking Restaurant",
    phone_number: "082239473609",
    address: "Jalan jalan",
    average_cost: 10000,
    longitude: -1.1,
    latitude: 1.1,
    slug: "asmoking-restaurant",
    more_info: "Smoking,Toilet",
    reviews: [
      {
        id: "ckyk97qzn008120d6f3gkm98z",
        store_id: "ckyiz33es0000mwfyj463ha20",
        user_id: "ckyk8gnkl000620d6shni7lzz",
        rating: 5,
        comment: "Ini comment",
        user: {
          name: "Muhammad Farhan Akbar",
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GhpkOacTxcQ8GUo791CV_CoG0CQaQEbNH629CAoRQ=s96-c",
        },
        _count: {
          votes: 0,
        },
      },
      {
        id: "ckylmxq0z0317v0d6twrwfcwe",
        store_id: "ckyiz33es0000mwfyj463ha20",
        user_id: "ckyk1r6cj0010fsfytl2noq4p",
        rating: 4,
        comment: "Ini comment",
        user: {
          name: "Muhammad Ilham Mubarak",
          image:
            "https://lh3.googleusercontent.com/a-/AOh14Ghlk5uXq0rAGxu6WRM_iOko6MtFeqyhDsHYW_STBg=s96-c",
        },
        _count: {
          votes: 0,
        },
      },
    ],
    photos: [
      {
        store_id: "ckyiz33es0000mwfyj463ha20",
        photos:
          "https://media.discordapp.net/attachments/822793364587151400/933346174834978886/6054801497f35.png",
      },
    ],
    menus: [
      {
        id: "ckylnbi460001hcd6x3xnmndb",
        store_id: "ckyiz33es0000mwfyj463ha20",
        menu_type: "Beverages",
        list_menus: [],
      },
    ],
  },
};
