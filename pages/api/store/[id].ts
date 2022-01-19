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
          _count: {
            select: { reviews: true },
          },
        },
      });
      const aggregations = await prisma.review.aggregate({
        where: {
          store_id: store?.id,
        },
        _avg: {
          rating: true,
        },
        _count: {
          rating: true,
        },
      });
      console.log(aggregations);
      const response = {
        avg_rating: aggregations._avg.rating,
        count_rating: aggregations._count.rating,
        ...store,
      };
      res.json(genericResponse<any | null>(true, 200, response));
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
