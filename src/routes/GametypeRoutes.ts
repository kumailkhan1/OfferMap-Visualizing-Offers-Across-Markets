import express from "express";
import { getAllGametypes, getGametype } from "../controllers/gametype";

export const GametypesRouter = express.Router();

GametypesRouter.get("/", getAllGametypes);
GametypesRouter.get("/:id", getGametype);
