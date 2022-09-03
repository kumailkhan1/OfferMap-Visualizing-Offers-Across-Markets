import express from "express";
import {
  getAllBookies,
  getBookie,
  getTopBookies,
} from "../controllers/bookies";

export const BookiesRouter = express.Router();

BookiesRouter.get("/", getAllBookies);
BookiesRouter.get("/top", getTopBookies);
BookiesRouter.get("/:id", getBookie);
