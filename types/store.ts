import { ListMenu, Menu, Photo, Review, Store, User } from "@prisma/client";
import { GenericResponse } from "./common";

export type StoreDetailType =
  | (Store & {
      average_rating: number | null;
      count_rating: number;
      reviews: Array<
        Review & {
          user: Pick<User, "name" | "image">;
          _count: { votes: number };
        }
      >;
      photos: Array<Photo>;
      menus: Array<Menu & { list_menus: Array<ListMenu> }>;
    })
  | null;

export type StoreDetailResponse = GenericResponse<StoreDetailType>;
