import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllMarkets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const markets = await prisma.bookiesmarkets.findMany();
  return res.status(200).json({
    markets,
  });
};

const getMarket = async (req: Request, res: Response, next: NextFunction) => {
  const market = await prisma.bookiesmarkets.findUnique({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json({
    market,
  });
};

export { getAllMarkets, getMarket };
