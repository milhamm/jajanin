import { User } from "@prisma/client";
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
        const user: User | null = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });

        if (!user) {
          res
            .status(401)
            .json(genericException(false, 401, "Email or Password is wrong"));
        }

        if (user?.password) {
          const validPass = await bcrypt.compare(password, user.password);
          if (validPass) {
            res.status(200).json({ message: "Valid Password" });
          } else {
            res.status(400).json({ message: "Invalid Password" });
          }
        } else {
          res.status(400).json({ message: "User does not exist" });
        }

        res.send(genericResponse<User | null>(true, 200, user));
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
