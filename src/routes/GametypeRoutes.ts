import express from "express";
import {
  getAllGametypes,
  getGametype,
  getTopGameTypes,
} from "../controllers/gametype";

export const GametypesRouter = express.Router();

GametypesRouter.get("/", getAllGametypes);
GametypesRouter.get("/top", getTopGameTypes);
GametypesRouter.get("/:id", getGametype);
