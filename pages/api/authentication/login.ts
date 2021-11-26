import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: data.email,
        },
      });
      if (user?.password) {
        const validPass = await bcrypt.compare(data.password, user.password);
        if (validPass) {
          res.status(200).json({ message: "Valid Password" });
        } else {
          res.status(400).json({ message: "Invalid Password" });
        }
      } else {
        res.status(400).json({ message: "User does not exist" });
      }
      res.send({
        success: true,
        code: 200,
        data: user,
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }
}
