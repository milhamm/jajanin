import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import bcrypt from "bcrypt";
import { genericException, genericResponse } from "../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const { email, password } = req.body;

      try {
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
          select: {
            id: true,
            image: true,
            phone_number: true,
            name: true,
            email: true,
            password: true,
          },
        });

        if (user?.password) {
          const validPass = await bcrypt.compare(password, user.password);
          if (validPass) {
            res.send(genericResponse(true, 200, user));
          } else {
            res
              .status(401)
              .json(genericException(false, 401, "Email or Password is wrong"));
          }
        } else {
          res
            .status(404)
            .json(genericException(false, 404, "User does not exist"));
        }
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
