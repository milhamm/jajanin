import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export function errorHandler(
  error: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(error);
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        res.status(400).json({
          success: false,
          code: 400,
          error: error.meta,
        });
      default:
        console.log(error.message);
        throw error;
    }
  }

  res.status(500).json({
    success: false,
    code: 500,
    error: "Internal Server Error",
  });
}
