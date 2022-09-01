"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookiesMarketsRouter = void 0;
const express_1 = __importDefault(require("express"));
const bookiesmarkets_1 = require("../controllers/bookiesmarkets");
exports.BookiesMarketsRouter = express_1.default.Router();
exports.BookiesMarketsRouter.get("/", bookiesmarkets_1.getAllMarkets);
exports.BookiesMarketsRouter.get("/:id", bookiesmarkets_1.getMarket);
