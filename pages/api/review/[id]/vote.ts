import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../client/prisma";
import { genericException, genericResponse } from "../../../../helper/response";

export type ReviewUpdateRequest = {
  comment: string;
  rating: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const session = (await getSession({ req })) as any;
      const id = req.query.id as string;

      const addVote = await prisma.voteReview.create({
        data: {
          review: {
            connect: {
              id: id,
            },
          },
          user: { connect: { id: session?.user.id } },
        },
      });
      res.send(genericResponse(true, 200, addVote));
    }
    case "DELETE": {
      const data: { id: string } = req.body;
      await prisma.voteReview.delete({
        where: {
          id: data.id,
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
