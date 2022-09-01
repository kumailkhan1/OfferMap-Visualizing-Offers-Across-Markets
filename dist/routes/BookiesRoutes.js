"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookiesRouter = void 0;
const express_1 = __importDefault(require("express"));
const bookies_1 = require("../controllers/bookies");
exports.BookiesRouter = express_1.default.Router();
exports.BookiesRouter.get("/", bookies_1.getAllBookies);
exports.BookiesRouter.get("/:id", bookies_1.getBookie);
