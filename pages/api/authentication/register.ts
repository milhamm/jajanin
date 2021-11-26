import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import validateEmail from "../../../helper/validateEmail";
import bcrypt from "bcrypt";
import { genericException, genericResponse } from "../../../helper/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const data = req.body;

      if (!validateEmail(data.email)) {
        res.status(422).json(genericException(false, 422, "Invalid Email"));
      }

      if (!(data.name && data.phone_number)) {
        res
          .status(400)
          .json(
            genericException(false, 400, "Name or Phone Number not exists")
          );
      }

      try {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const user: User = await prisma.user.create({ data: { ...data } });
        res.send(genericResponse<User>(true, 200, user));
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
