import { Review } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../client/prisma";
import { errorHandler } from "../../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../../helper/response";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const session = (await getSession({ req })) as any;
      const id = req.query.id as string;
      const data = req.body;
      // const user_id = req.body.user_id;

      try {
        const review: Review = await prisma.review.create({
          data: { ...data, store_id: id, user_id: session?.user.id },
        });

        res.send(genericResponse<Review>(true, 200, review));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
  }
}
