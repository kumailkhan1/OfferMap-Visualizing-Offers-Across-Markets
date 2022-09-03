import express from "express";
import { getTopGameTypes, getTopBookies } from "../controllers/top";

export const TopRouter = express.Router();
TopRouter.get("/gametype", getTopGameTypes);
TopRouter.get("/bookies", getTopBookies);
