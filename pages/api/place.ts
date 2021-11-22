import type { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";
import { PlaceRequest, PlaceResponse } from "../../model/Places";
import { prisma } from "../../client/prisma";
import { errorHandler } from "../../helper/errorHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlaceResponse | any>
) {
  if (req.method === "POST") {
    const data: PlaceRequest = req.body;
    const slug = slugify(data.store_name, { lower: true });

    try {
      const place = await prisma.store.create({ data: { ...data, slug } });
      res.send({
        success: true,
        code: 200,
        data: place,
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  } else if (req.method === "GET") {
    const places = await prisma.store.findMany();
    res.send({
      success: true,
      code: 200,
      data: places,
    });
  }
}
