import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOfferings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);

  let skip: number = Number(req.body.skip);
  let take: number = Number(req.body.take);

  let gametype_id: number = Number(req.body.filterby?.gametype_id);
  let bookiesmarkets_id: string = req.body.filterby?.bookiesmarkets_id;
  let bookies_name: string = req.body.filterby?.bookies_name;

  let offerings: any;
  let gameTypes: any;
  let bookiesMarkets: any;

  if (Number.isInteger(skip) && skip >= 0) {
    if (Number.isInteger(take) && take >= 0) {
      offerings = await prisma.offerings.findMany({
        skip: skip,
        take: take,
        where: {
          ...(gametype_id ? { gametype_id: gametype_id } : {}),
          ...(bookiesmarkets_id
            ? { bookiesmarkets_id: bookiesmarkets_id }
            : {}),
          ...(bookies_name ? { bookies_name: bookies_name } : {}),
        },
      });

      gameTypes = await prisma.gametype.findMany();
      bookiesMarkets = await prisma.bookiesmarkets.findMany();

      console.log(gameTypes);
      offerings = offerings.map((el: any) => {
        let gameType = gameTypes.find((item: any) => item.id == el.gametype_id);
        let bookieMarket = bookiesMarkets.find(
          (item: any) => item.id == el.bookiesmarkets_id
        );
        console.log("GAME TYPE", gameType);
        console.log("Bookies Markets: ", bookieMarket);
        el.gametype_id = gameType;
        el.bookiesmarkets_id = bookieMarket?.name
          ? bookieMarket
          : el.bookiesmarkets_id;
        return el;
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
