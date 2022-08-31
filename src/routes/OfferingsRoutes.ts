import express from "express";
import { getAllOfferings, getOffering } from "../controllers/offerings";


export const OfferingsRouter = express.Router();

OfferingsRouter.get("/:skip&:take", getAllOfferings);
OfferingsRouter.get("/:id",getOffering)

