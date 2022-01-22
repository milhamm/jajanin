import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../client/prisma";
import { genericException } from "../../../../../helper/response";

export type ReviewUpdateRequest = {
  comment: string;
  rating: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE": {
      const voteId = req.query.vote_id as string;
      await prisma.voteReview.delete({
        where: {
          id: voteId,
        },
      });
      res.status(204).end();
    }
    default:
      res
        .status(404)
        .json(genericException<string>(false, 404, "Method Not Allowed"));
      break;
  }
}
