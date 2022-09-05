import { Request, Response, NextFunction } from "express";
import { PrismaClient, gametype } from "@prisma/client";
import { HttpException } from "../middleware/error";

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
  try {
    const gametype: gametype = await prisma.gametype.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    return res.status(200).json({
      gametype,
    });
  } catch (err) {
    let error = new HttpException(404, "ID should be a number");
    next(error);
  }
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

  const gameTypeNames = await prisma.gametype.findMany();

  const topGames: any = [];
  topGameTypes.forEach((top) => {
    gameTypeNames.forEach((name) => {
      if (name.id == top.gametype_id) {
        topGames.push({
          count: top._count.gametype_id,
          gametype_id: name.type,
        });
      }
    });
  });

  return res.status(200).json({ topGames });
};

export { getAllGametypes, getGametype, getTopGameTypes };
