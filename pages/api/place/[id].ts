import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../client/prisma";

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
  }
}
