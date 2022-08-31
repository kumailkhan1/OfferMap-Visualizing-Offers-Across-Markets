import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllBookies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookies = await prisma.bookies.findMany();
  console.log(bookies);
  return res.status(200).json({
    bookies,
  });
};

const getBookie = async (req: Request, res: Response, next: NextFunction) => {
  const bookie = await prisma.bookies.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  return res.status(200).json({
    bookie,
  });
};

export { getAllBookies, getBookie };
