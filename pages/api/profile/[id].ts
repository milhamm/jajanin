import { User } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import { genericException, genericResponse } from "../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const id = req.query.id as string;
      const user: User | null = await prisma.user.findUnique({
        where: {
          email: id,
        },
      });
      res.json(genericResponse<User | null>(true, 200, user));
      break;
    }
    case "PUT": {
      const id = req.query.id as string;
      const data: User = req.body;
      try {
        const user = await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            ...data,
          },
        });
        res.json(genericResponse<User>(true, 200, user));
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    case "DELETE": {
      try {
        const id = req.query.id as string;

        await prisma.user.delete({
          where: {
            id: id,
          },
        });
        res.status(204).end();
        break;
      } catch (error) {
        res.status(404).json(genericException(false, 404, "User not found"));
      }
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
  }
}
