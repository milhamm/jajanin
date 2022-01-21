import { ListMenu, Menu, Photo, Review, Store, User } from "@prisma/client";
import { GenericResponse } from "./common";

export type MenuWithListMenu = Array<Menu & { list_menus: Array<ListMenu> }>;

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
      menus: MenuWithListMenu;
    })
  | null;

export type StoreDetailResponse = GenericResponse<StoreDetailType>;
