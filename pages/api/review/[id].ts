import { Review } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../helper/response";

export type ReviewUpdateRequest = {
  comment: string;
  rating: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "PUT": {
      const id = req.query.id as string;
      const data: ReviewUpdateRequest = req.body;

      try {
        const place = await prisma.review.update({
          where: {
            id: id,
          },
          data: {
            comment: data.comment,
            rating: data.rating,
          },
        });
        res.json(genericResponse<Review>(true, 200, place));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    case "DELETE": {
      const id = req.query.id as string;

      await prisma.review.delete({
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
