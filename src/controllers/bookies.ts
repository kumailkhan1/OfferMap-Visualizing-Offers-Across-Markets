import { Request, Response, NextFunction } from "express";
import { PrismaClient, bookies } from "@prisma/client";

const prisma = new PrismaClient();

const getAllBookies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookies: bookies[] = await prisma.bookies.findMany();
  console.log(bookies);
  return res.status(200).json({
    bookies,
  });
};

const getBookie = async (req: Request, res: Response, next: NextFunction) => {
  
  const bookie: bookies | {} = await prisma.bookies.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  console.log(bookie);

  return res.status(200).json({
    bookie,
  });
};

export { getAllBookies, getBookie };
