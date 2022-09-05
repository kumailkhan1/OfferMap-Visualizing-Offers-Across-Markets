import { Request, Response, NextFunction } from "express";
import { PrismaClient, bookies } from "@prisma/client";
import { HttpException } from "../middleware/error";

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
  console.log(Number(req.params.id));
  let id: number = Number(req.params.id);

  try {
    if (isNaN(id)) {
      let error = new HttpException(404, "ID should be a number");
      next(error);
    }

    const bookie: bookies | {} = await prisma.bookies.findUnique({
      where: {
        id: id,
      },
    });

    console.log(bookie);

    return res.status(200).json({
      bookie,
    });
  } catch (err) {
    next(err);
  }
};

const getTopBookies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const topBookiesName = await prisma.offerings.groupBy({
    take: 5,
    by: ["bookies_name"],
    _count: {
      bookies_name: true,
    },
    orderBy: {
      _count: {
        bookies_name: "desc",
      },
    },
  });

  const topBookies = topBookiesName.map((el) => {
    return { count: el._count.bookies_name, bookies_name: el.bookies_name };
  });

  return res.status(200).json({ topBookies });
};

export { getAllBookies, getBookie, getTopBookies };
