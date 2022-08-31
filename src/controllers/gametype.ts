import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllGametypes = async (req: Request,res: Response,next: NextFunction) => {
  const gametypes = await prisma.gametype.findMany();
  return res.status(200).json({
    gametypes,
  });
};

const getGametype = async (req: Request, res: Response, next: NextFunction) => {
  const gametype = await prisma.gametype.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  return res.status(200).json({
    gametype,
  });
};

export { getAllGametypes, getGametype };
