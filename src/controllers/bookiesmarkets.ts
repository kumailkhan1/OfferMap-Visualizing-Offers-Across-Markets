import { Request, Response, NextFunction } from "express";
import { PrismaClient, bookiesmarkets } from "@prisma/client";
import { HttpException } from "../middleware/error";

const prisma = new PrismaClient();

const getAllMarkets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const markets: bookiesmarkets[] = await prisma.bookiesmarkets.findMany();
  return res.status(200).json({
    markets,
  });
};

const getMarket = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const market: bookiesmarkets = await prisma.bookiesmarkets.findUnique({
      where: {
        id: req.params.id,
      },
    });
  
    return res.status(200).json({
      market,
    });
  }catch(err){
    let error = new HttpException(500,"Internal Server Error.")
    next(error);
  }

};

export { getAllMarkets, getMarket };
