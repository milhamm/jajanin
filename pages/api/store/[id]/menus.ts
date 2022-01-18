import { Menu } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../client/prisma";
import { errorHandler } from "../../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const id = req.query.id as string;
      const data = req.body;

      try {
        const menu: Menu = await prisma.menu.create({
          data: { ...data, store_id: id },
        });

        res.send(genericResponse<Menu>(true, 200, menu));
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
