import { Request, Response, NextFunction } from "express";
import { PrismaClient, gametype } from "@prisma/client";

const prisma = new PrismaClient();

const getAllGametypes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const gametypes: gametype[] = await prisma.gametype.findMany();
  return res.status(200).json({
    gametypes,
  });
};

const getGametype = async (req: Request, res: Response, next: NextFunction) => {
  const gametype: gametype = await prisma.gametype.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  return res.status(200).json({
    gametype,
  });
};

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

export { getAllGametypes, getGametype, getTopGameTypes };
