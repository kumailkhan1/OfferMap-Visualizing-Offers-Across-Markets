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

export { getAllGametypes, getGametype };
