import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";
import validateEmail from "../../../helper/validateEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!validateEmail(data.email)) {
      res.status(400).json({
        success: false,
        code: 400,
        error: "Invalid Email",
      });
    }

    if (!(data.name && data.phone_number)) {
      res.status(400).json({
        success: false,
        code: 400,
        error: "Name or Phone Number not exists",
      });
    }

    try {
      const user = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
          phone_number: data.phone_number,
        },
      });
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
