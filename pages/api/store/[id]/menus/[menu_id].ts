import { ListMenu } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../client/prisma";
import { errorHandler } from "../../../../../helper/errorHandler";
import {
  genericException,
  genericResponse,
} from "../../../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const menu_id = req.query.menu_id as string;
      const data = req.body;

      try {
        const list_menu: ListMenu = await prisma.listMenu.create({
          data: { ...data, menu_id },
        });

        res.send(genericResponse<ListMenu>(true, 200, list_menu));
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
