import { ListMenu, Menu, Photo, Review, Store, User } from "@prisma/client";
import { GenericResponse } from "./common";

export type MenuWithListMenu = Array<Menu & { list_menus: Array<ListMenu> }>;

export type ReviewWithUser = Review & {
  user: Pick<User, "name" | "image" | "id">;
  _count: { votes: number };
};

export type StoreDetailType =
  | (Store & {
      average_rating: number | null;
      count_rating: number;
      reviews: Array<ReviewWithUser>;
      photos: Array<Photo>;
      menus: MenuWithListMenu;
    })
  | null;

export type StoreResponse = GenericResponse<Array<Store>>;
export type StoreDetailResponse = GenericResponse<StoreDetailType>;
