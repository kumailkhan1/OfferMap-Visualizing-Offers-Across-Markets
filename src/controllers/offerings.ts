import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOfferings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let skip: number = Number(req.params.skip);
  let take: number = Number(req.params.take);
  let offerings;

  if (Number.isInteger(skip) && skip >= 0) {
    if (Number.isInteger(take) && take >= 0) {
      offerings = await prisma.offerings.findMany({
        skip: Number(req.params.skip),
        take: Number(req.params.take),
      });
      return res.status(200).json({
        offerings,
      });
    }
  }
  return res.status(400).json({
    message: "Please provide positive numbers for skip and take parameters.",
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
