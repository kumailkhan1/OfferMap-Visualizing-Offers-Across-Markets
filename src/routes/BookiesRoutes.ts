import express from "express";
import { getAllBookies, getBookie } from "../controllers/bookies";


export const BookiesRouter = express.Router();

BookiesRouter.get("/", getAllBookies);
BookiesRouter.get("/:id",getBookie)

