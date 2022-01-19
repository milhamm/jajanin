import { ListMenu, Menu, Photo, Review, Store } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../helper/response";

export type StoreResponse =
  | (Store & {
      reviews: Review[];
      photos: Photo[];
      menus: (Menu & {
        list_menus: ListMenu[];
      })[];
    })
  | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const id = req.query.id as string;
      const store = await prisma.store.findFirst({
        where: {
          slug: id,
        },
        include: {
          reviews: true,
          photos: true,
          menus: {
            include: {
              list_menus: true,
            },
          },
        },
      });
      res.json(genericResponse<StoreResponse | null>(true, 200, store));
      break;
    }
    case "PUT": {
      const id = req.query.id as string;
      const data: Store = req.body;
      try {
        const place = await prisma.store.update({
          where: {
            id: id,
          },
          data: {
            ...data,
          },
        });
        res.json(genericResponse<Store>(true, 200, place));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    case "DELETE": {
      const id = req.query.id as string;

      await prisma.store.delete({
        where: {
          id: id,
        },
      });

      res.status(204).end();
      break;
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
