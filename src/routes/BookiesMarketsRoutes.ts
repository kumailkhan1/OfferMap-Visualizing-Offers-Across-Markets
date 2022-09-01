import express from "express";
import { getAllMarkets, getMarket } from "../controllers/bookiesmarkets";

export const BookiesMarketsRouter = express.Router();

BookiesMarketsRouter.get("/", getAllMarkets);
BookiesMarketsRouter.get("/:id", getMarket);
