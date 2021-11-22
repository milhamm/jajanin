import { Store } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";
import { prisma } from "../../client/prisma";
import { errorHandler } from "../../helper/errorHandler";
import { genericException, genericResponse } from "../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const places: Array<Store> = await prisma.store.findMany();
      res.send(genericResponse<Array<Store>>(true, 200, places));
      break;
    case "POST":
      const data = req.body;
      const slug = slugify(data.store_name, { lower: true });

      try {
        const place: Store = await prisma.store.create({
          data: { ...data, slug },
        });

        res.send(genericResponse<Store>(true, 200, place));
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
