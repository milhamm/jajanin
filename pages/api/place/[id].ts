import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";
import { errorHandler } from "../../../helper/errorHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const id = req.query.id as string;
    await prisma.store.delete({
      where: {
        id: id,
      },
    });

    res.status(204).end();
  } else if (req.method === "GET") {
    const id = req.query.id as string;
    const place = await prisma.store.findFirst({
      where: {
        slug: id,
      },
    });
    res.json({
      success: true,
      code: 200,
      data: place,
    });
  } else if (req.method === "PUT") {
    const id = req.query.id as string;
    const data = req.body;
    try {
      const place = await prisma.store.update({
        where: {
          id: id,
        },
        data: {
          ...data,
        },
      });
      res.json({
        success: true,
        code: 200,
        data: place,
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }
}
