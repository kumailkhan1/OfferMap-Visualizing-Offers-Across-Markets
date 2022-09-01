import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOfferings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const offerings = await prisma.offerings.findMany({
    skip: Number(req.params.skip),
    take: Number(req.params.take),
  });
  return res.status(200).json({
    offerings,
  });
};

const getOffering = async (req: Request, res: Response, next: NextFunction) => {
  const offering = await prisma.offerings.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });

  return res.status(200).json({
    offering,
  });
};

export { getAllOfferings, getOffering };
