import { Request, Response, NextFunction } from "express";
import { PrismaClient, offerings } from "@prisma/client";
const prisma = new PrismaClient();

const getTopGameTypes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const topGameTypes = await prisma.offerings.groupBy({
    by: ["gametype_id"],
    _count: {
      gametype_id: true,
    },
    orderBy: {
      gametype_id: "desc",
    },
  });

  const topGames = topGameTypes.map((el) => {
    return { count: el._count.gametype_id, gametype_id: el.gametype_id };
  });

  return res.status(200).json({ topGameTypes: topGames });
};

const getTopBookies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const topBookiesName = await prisma.offerings.groupBy({
    take:5,
    by: ["bookies_name"],
    _count: {
      bookies_name: true,
    },
    orderBy: {
      _count: {
        bookies_name: "desc",
      },
    },
  });

  const topBookies = topBookiesName.map((el) => {
    return { count: el._count.bookies_name, bookies_name: el.bookies_name };
  });

  return res.status(200).json({ topBookies });
};
export { getTopGameTypes, getTopBookies };
